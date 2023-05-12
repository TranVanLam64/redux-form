import { useNavigate } from "react-router-dom";
import "./register.scss";
import RegisterForm from "../../components/form/RegisterForm";
import showResult from "../../features/account/showResult";

export interface IUserRegister {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();

  const handleClick = (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="registerContainer">
        <h1>Register</h1>
        <RegisterForm onSubmit={showResult} />
        <div className="registerFooter">
          <span>Do you have an account?</span>{" "}
          <span onClick={handleClick}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
