import { Box } from "@chakra-ui/react";
import React from "react";
import AboutTheAuthor from "./AboutTheAuthor";
import DetailsPage from "./DetailsPage";
import Paragraph from "./Paragraph";
import ReadyToUpskill from "./ReadyToUpskill";

const DetailsPageLayout = () => {
     return (
          <>
               <Box w="100%" h={"360vh"} bg={"#181818"}>
                    <Box
                         width={"90%"}
                         display="flex"
                         flexDirection="row"
                         margin={"auto"}
                    >
                         <Box w="70%">
                              <Paragraph />
                              <AboutTheAuthor />
                         </Box>
                         <Box>
                              <DetailsPage />
                         </Box>
                    </Box>
                    <ReadyToUpskill />
               </Box>
          </>
     );
};

export default DetailsPageLayout;
