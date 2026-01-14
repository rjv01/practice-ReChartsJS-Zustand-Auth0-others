import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
    const { user,loginWithRedirect,isAuthenticated } = useAuth0();
    // if(isAuthenticated)
    //     console.log("user: ",user);

    return (
        <div className="flex gap-6">
            {
                isAuthenticated ? (
                    <p>{user?.name}</p>
                ) : (
                    <button
                        onClick={()=> loginWithRedirect()}
                        className="button login cursor-pointer"
                    >
                        Log In
                    </button>
                )
            }
        </div>
    );
};

export default LoginButton;
