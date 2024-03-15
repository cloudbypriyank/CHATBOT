import { GoogleLogout } from "react-google-login"

const Logout = () => {
  const onSuccess = () => {
    console.log("Logout made successfully");
  };

  return ( 
    <GoogleLogout
      clientId="66997291555-mkgthqcgrd5mhv06a3ehavjakk4jdrr9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
};

export default Logout;
