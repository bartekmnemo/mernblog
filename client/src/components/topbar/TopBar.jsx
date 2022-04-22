import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="link" to="/">
          Blog for WSB
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Strona główna
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/settings">
              {user && "Ustawienia"}
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/info">
              O projekcie
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {user && "Pisz"}
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Wyloguj"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <p style={{ marginRight: "10px", cursor: "default" }}>
              Cześć, {user.username}
            </p>
            <Link to="/settings">
              {" "}
              <img
                className="topAvatar"
                src={PF + user.profilePic}
                alt="avatar"
              />
            </Link>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Zaloguj się
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                Zarejestruj się
              </Link>
            </li>
          </ul>
        )}

        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  );
}
