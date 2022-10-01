import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContextProvider";
import "./styles.css";
function NavBar() {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h4>Context AUTH</h4>
      <button onClick={toggleAuth}>
        {isAuth ? "Click to Logout" : "Not LoggedIn yet"}
      </button>
    </div>
  );
}

export default NavBar;
