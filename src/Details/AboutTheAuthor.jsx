import { ChevronRightIcon } from "@chakra-ui/icons";
import {
     Avatar,
     Box,
     Container,
     Heading,
     TagRightIcon,
     Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";

const AboutTheAuthor = () => {
     return (
          <Container mt={10} px={"20"} maxW={"900px"} bg={"#181818"}>
               <Heading color={"white"} fontWeight={"semibold"}>
                    About the author
               </Heading>
               <Box mt={8} display={"flex"} alignItems={"center"} gap="5">
                    <Avatar
                         size="lg"
                         name="Prosper Otemuyiwa"
                         src="https://bit.ly/prosper-baba"
                    />{" "}
                    <Text fontSize={"3xl"} color={"white"}>Kevin Henry</Text>
               </Box>

               <Box mt={10} fontSize={"xl"} color={"white"}>
                    Kevin Henry is a well-known and respected educator and
                    lecturer in the fields of information security and audit.
                    Kevin uses his more than 30 years of practical experience as
                    a network technician, computer programmer, and information
                    systems auditor to deliver outstanding presentations that
                    make each topic interesting, relevant, and useful. Often
                    described by students as "The best instructor I have ever
                    had," Kevin has the ability to provide quality instruction
                    that engages the audience and provides guidance on how to
                    implement a successful program when they return to their
                    workplace.
               </Box>
               <Text
                    fontSize={"x-large"}
                    fontWeight={"bold"}
                    mt={5}
                    color="white"
               >
                    See more courses by Kevin Henry{" "}
                    <ChevronRightIcon color={"#CA078C"} />
               </Text>
          </Container>
     );
};

export default AboutTheAuthor;
