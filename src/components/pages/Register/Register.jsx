import { useState } from "react";
import { Navigate , Link } from "react-router-dom";

const Register = ({link, msg}) => {

    const [user, setUser] = useState(false);
    
    const UserRegex = /^[a-zA-Z][a-zA-Z0-9-]{3,23}$/;
    const PasswordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@&#$%]).{8,23}$/;
    const EmailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const PhoneNumberRegex = /^+(?:\d{1,3})?\d{10,14}$/;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="card">
        {user && <Navigate to="/account" replace={true} />}
        <div className="card-body">
          <h1 className="card-title">Inscription</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="email" name="email" />
            <input type="tel" name="phone" />
            <input type="password" name="password" />
            <input type="password" name="confirmPassword" />
            <div className="d-flex justify-content-between">
              <div className="my-4 form-text text-primary">
                <Link className="text-decoration-none" to={link}>{msg}</Link>
              </div>
              <div>
                <button type="submit" className="btn btn-primary btn-lg mt-2">Valider</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;