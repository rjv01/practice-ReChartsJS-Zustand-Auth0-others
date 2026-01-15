import axios from 'axios';
import { useState } from 'react';


function SendEmail() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [email,setEmail] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);

    const sentEmail = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!email){
            alert("Email is required");
            return ;
        }

        try{
            setLoading(true);
            await axios.post(`${BACKEND_URL}/sendyouremailid`,{
                email,
            });
            alert("Email Sent successfully, check your email");
            setEmail("");
        } catch (error:any) {
            console.log(error?.response?.message || "Error in sending email")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col justify-center items-center w-60 h-44 bg-gray-500 rounded-lg'>
            <form className='flex flex-col' onSubmit={sentEmail}>
                <input 
                    type="email"
                    placeholder='Enter Your Email'
                    className='border p-4 m-2'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <button 
                    type='submit'
                    disabled={loading}
                    className='border rounded-2xl hover:font-bold duration-150 cursor-pointer m-3 p-2'
                >{loading ? "Sending...":"Submit"}</button>
            </form>
        </div>
    );
};

export default SendEmail
