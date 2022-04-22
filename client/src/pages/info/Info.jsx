import "./info.css";

export default function Info() {
  return (
    <div className="infoWrapper">
      <div className="header">
        <h1>Projekt Blog for WSB</h1>
      </div>
      <div className="desc">
        <p>
          Blog for WSB to aplikacja MERN stackowa, to znaczy, że została
          stworzona za pomocą zbioru oprogramowań, a dokładnie - MongoDB ,
          Express , React i Node.js.
        </p>
        <b>
          <p style={{ marginTop: "10px" }}>
            Projet ten został stworzony na zaliczenie laboratorium z
            zaawansowanych aplikacji internetowych.
          </p>
        </b>
        <h2 style={{ margin: "20px" }}>Możliwości na stronie:</h2>
        <ul className="listaFn">
          <li>✅ Rejestracja</li>
          <li>✅ Logowanie</li>
          <li>✅ Wylogowanie</li>
          <li style={{ fontWeight: "bold" }}>✅ Hasła są szyfrowane</li>
          <li>✅ Tworzenie postów</li>
          <li>✅ Edycja postów</li>
          <li>✅ Wyświetlanie postów na stronie głownej</li>
          <li>✅ Wyświetlanie konkretnego posta na osobnej stronie</li>
          <li>
            ✅ Edycja konta użytkownia (zmiana zdjęcia profilowego, nazwy
            użytkownika, emaila, hasła)
          </li>
          <li>✅ Usuwanie konta użytkownia</li>
        </ul>

        <span
          style={{ color: "#FF8383", fontWeight: "bold", marginTop: "20px" }}
        >
          Aplikacja zawiera błędy i niedokończone funkcjonalności!
        </span>
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#999" }}>
          Podziękowania dla Lama Dev - Bartosz i Natan
        </p>
      </div>
    </div>
  );
}
