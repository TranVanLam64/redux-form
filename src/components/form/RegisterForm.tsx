import { Field, reduxForm } from "redux-form";
import { IUserRegister } from "../../pages/register/Register";

interface IError {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const validate = (values: IUserRegister) => {
  const errors: IError = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email address";
  }
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or less";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Wrong confirm password";
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}: any) => {
  return (
    <div>
      <div className="sectionInputRegister">
        <input
          {...input}
          placeholder={label}
          type={type}
          className="registerInput"
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const RegisterForm = (props: { handleSubmit: any }) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        placeholder="Email Address"
        component={renderField}
        label="email"
      />
      <Field
        name="firstName"
        type="text"
        placeholder="First Name"
        component={renderField}
        label="firstName"
      />
      <Field
        name="lastName"
        type="type"
        placeholder="Last Name"
        component={renderField}
        label="lastName"
      />
      <Field
        name="password"
        type="password"
        placeholder="Password"
        component={renderField}
        label="password"
      />
      <Field
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        component={renderField}
        label="confirmPassword"
      />
      <button type="submit" className="btnRegister">
        Register
      </button>
    </form>
  );
};

export default reduxForm({
  form: "registerForm",
  validate,
})(RegisterForm);
