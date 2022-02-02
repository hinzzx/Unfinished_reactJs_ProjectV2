import Navbar from "../Navbar/navbar.js";
import classes from "./Layout.css";

function Layout(props) {
  return (
    <div>
     <Navbar/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;