import Navbar from "../Navbar/navbar.js";
import classes from "./Layout.css";

// making sure the NavBar appears in every component in other words making it fixed.

function Layout(props) {
  return (
    <div>
     <Navbar/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
