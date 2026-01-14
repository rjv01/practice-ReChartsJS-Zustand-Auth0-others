import  express  from "express";
import  nodemailer  from "nodemailer";
import  cors  from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

const allowedOrigins = ["http://localhost:5173"];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(express.json());


const transporter = nodemailer.createTransport({
    secure:true,
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    }
});

function sendMail(to,sub,msg){
    transporter.sendMail({
        from:process.env.EMAIL,
        to,
        subject:sub,
        html:msg,
    })
    console.log("Message sent");
};


app.post("/sendyouremailid",async (req,res) => {
    console.log(req.body);
    const { email } = req.body;

    if(!email){
        return res.send(400).json({message:"Email is required"});
    }
    
    try {
        await sendMail(email,"This is Test subject😐","<h1>This is test message👁️👄👁️<h1>");
        return res.status(200).json({message:"Email sent successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
});

app.get("/",(req,res)=>{
    res.send("Backend is running...");
});

app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`);
});