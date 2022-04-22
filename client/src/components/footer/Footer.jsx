import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-basic">
        <footer>
          {" "}
          <div className="social">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            <i className="sidebarIcon fa-brands fa-youtube"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
          </div>
          <p className="copyright">Blog for WSB © 2022</p>
        </footer>
      </div>
    </>
  );
}
