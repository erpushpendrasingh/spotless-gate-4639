import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
     { path: "/", title: "Home" },
     { path: "/skills", title: "Skills" },
     { path: "/flow", title: "Flow" },
     { path: "/blog", title: "Blog" },
     { path: "/signin", title: "Sign in" },
];
const Navbar = () => {
     return (
          //   <HStack
          //   bg={"#202020"}
          //        border={"1px solid red"}
          //        w={"full"}
          //        h={"50px"}
          //   ></HStack>
          <Box
               color="#red"
               display="flex"
               alignItems="center"
               justifyContent="space-around"
               width="100%"
               margin="auto"
               bg="#202020"
          >
               <Box
                    color="#red"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    width="100%"
                    margin="auto"
                    bg="#202020"
               ></Box>
               <Box
                    color="#red"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width="25%"
                    margin="auto"
                    pr={"50px"}
                    bg="transparent"
                    h="50px"
               >
                    {links.map((link) => (
                         <NavLink
                              // style={({ isActive }) => {
                              //   return isActive ? activeStyle : defaultStyle;
                              // }}
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
