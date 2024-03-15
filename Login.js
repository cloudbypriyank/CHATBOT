import { GoogleLogin} from 'react-google-login';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
 };

 const onSuccess = (response) => {
    console.log('Login Success: ', response);
  };

  const onFailure = (response) => {
    console.log('Login Failure: ', response);
  };

  return (
    <div>
      <GoogleLogin
        clientId="66997291555-mkgthqcgrd5mhv06a3ehavjakk4jdrr9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default Login;
