import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
     { path: "/", title: "Home" },
     { path: "/skills", title: "Skills" },
     { path: "/flow", title: "Flow" },
     { path: "/blog", title: "Blog" },
     // { path: "/login", title: "Sign in" },
];
const Navbar = () => {
     return (
          <Box color="#red" bg="#202020">
               <Box
                    border={"1px transparent "}
                    color="#red"
                    display="flex"
                    marginLeft={"72%"}
                    alignItems="center"
                    justifyContent="space-between"
                    width="25%"
                    bg="transparent"
                    h="50px"
               >
                    {links.map((link) => (
                         <NavLink
                              className={({ isActive }) => {
                                   return isActive
                                        ? styles.active
                                        : styles.default;
                              }}
                              key={link.path}
                              to={link.path}
                              end
                         >
                              {link.title}
                         </NavLink>
                    ))}
               </Box>
          </Box>
     );
};

export default Navbar;
