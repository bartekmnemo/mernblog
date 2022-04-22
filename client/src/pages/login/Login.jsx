import { Link } from "react-router-dom";
import "./login.css";
import React, { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <div className="wrapperForm">
        <div className="wrapperLogin">
          <form onSubmit={handleSubmit} className="loginForm">
            <h1>Logowanie</h1>
            <input type="text" placeholder="Nazwa użytkownika" ref={userRef} />
            <input type="password" placeholder="Hasło" ref={passwordRef} />
            <button className="loginButton" type="submit" disabled={isFetching}>
              Zaloguj się
            </button>
          </form>
        </div>
        <div className="wrapperLoginRegister">
          <form className="loginRegisterForm">
            <h1>Cześć, Przyjacielu!</h1>
            <p>Chcesz rozpocząć z nami niesamowitą przygodę?</p>
            <p> Kliknij w przycisk i uzupełnij formularz!</p>

            <button className="loginRegisterButton">
              <Link className="link" to="/register">
                {" "}
                Zarejestruj się
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
