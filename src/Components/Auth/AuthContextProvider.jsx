import { createContext, useState } from "react";
// Create a context by the name AuthContext
// create a AuthContextProvider component
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  // create a isAuth and a toggleAuth function
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const toggleAuth = () => {
    setIsAuth(isAuth === true ? false : null);
  };

  return (
    <AuthContext.Provider
      // pass these values into your context provider
      value={{
        isAuth,
        setIsAuth,
        toggleAuth,
        token,
        setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
