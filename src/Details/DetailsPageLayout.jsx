import { Box } from "@chakra-ui/react";
import React from "react";
import AboutTheAuthor from "./AboutTheAuthor";
import DetailsPage from "./DetailsPage";
import Paragraph from "./Paragraph";
import ReadyToUpskill from "./ReadyToUpskill";
import SkillBox from "./SkillBox";

const DetailsPageLayout = () => {
     return (
          <>
               <Box w="100%"  bg={"#181818"}>
                    <Box
                         border="1px solid green"
                         width={"90%"}
                         display="flex"
                         //  alignItems={"center"}
                         flexDirection="row"
                         margin={"auto"}
                    >
                         <Box w="70%" border="1px solid red">
                              <Paragraph />
                              <AboutTheAuthor />
                         </Box>
                         <Box border="2px solid teal">
                              <DetailsPage />
                         </Box>
                    </Box>
                    <ReadyToUpskill />
               </Box>
          </>
     );
};

export default DetailsPageLayout;
