import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <div className="wrapperForm">
        <div className="wrapperRegisterLogin">
          <form className="registerLoginForm">
            <h1>Cześć, Przyjacielu!</h1>
            <p>Jeśli już posiadasz u nas konto...</p>
            <p> Po prostu kliknij poniżej i się zaloguj :)</p>
            <button className="registerLoginButton">
              <Link className="link" to="/login">
                Zaloguj się!
              </Link>
            </button>
          </form>
        </div>
        <div className="wrapperRegister">
          <form onSubmit={handleSubmit} className="registerForm">
            <h1>Zarejestruj się!</h1>
            <input
              type="text"
              placeholder="Nazwa użytkownika"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Hasło"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="registerButton">
              Zarejestruj się
            </button>
            {error && (
              <span
                style={{ color: "red", display: "block", marginTop: "10px" }}
              >
                Coś poszło nie tak!
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
