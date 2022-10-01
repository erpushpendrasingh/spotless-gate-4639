import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";
import "./styles.css";

function Form() {
     const { setIsAuth, setToken } = useContext(AuthContext);

     const [loginData, setLoginData] = useState({
          email: "",
          password: "",
     });
     const [isLoading, setIsLoading] = useState(false);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setLoginData({
               ...loginData,
               [name]: value,
          });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          setIsLoading(true);

          const userData = {
               email: loginData.email,
               password: loginData.password,
          };
          // "email": "eve.holt@reqres.in",
          // "password": "cityslicka"

          axios.post("https://reqres.in/api/login", userData)
               .then((res) => {
                    setToken(res.data.token);
                    setIsAuth(true);
               })
               .catch((err) => {
                    console.log(err);
               })
               .finally(() => {
                    setIsLoading(false);
               });
     };

     if (isLoading) {
          return <div>...loading</div>;
     }
     return (
          <form className="form">
               <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
               />
               <input
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
               />
               <button onClick={handleSubmit}>Login</button>
          </form>
     );
}

export default Form;
