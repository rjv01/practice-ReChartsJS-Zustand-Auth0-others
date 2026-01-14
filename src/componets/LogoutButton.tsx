import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
        {
            isAuthenticated && (
                <button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    className="button logout cursor-pointer"
                >
                    Log Out
                </button>
            )
        }
    </div>
  );
};

export default LogoutButton;