import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContextProvider";
// import { AuthContext } from "../Context/AuthContextProvider";
function TokenPage() {
  const { token } = useContext(AuthContext);

  return <h1>My Token is - {token}</h1>;
}

export default TokenPage;
