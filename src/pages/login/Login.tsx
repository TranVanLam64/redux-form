import { useNavigate } from "react-router-dom";
import "./login.scss";
import LoginForm from "../../components/form/LoginForm";
import showResult from "../../features/account/showResult";

export interface IUser {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Login</h1>
        <LoginForm onSubmit={showResult} />
        <div className="loginFooter">
          <span>Don't have an account?</span>{" "}
          <span onClick={handleClick}>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
