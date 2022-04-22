import { Link, animateScroll as scroll } from "react-scroll";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          Jesteś już bezpieczny, zrelaksuj się i...
        </span>
        <span className="headerTitleLg">Czytaj</span>
        <button className="exploreBtn">
          <Link
            to="postsId"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Odkrywaj
          </Link>
        </button>
      </div>
      {/* <img className='headerImg' src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="header " /> */}
      <div className="imageBg"></div>
    </div>
  );
}
