import {
     Box,
     Button,
     Container,
     Heading,
     HStack,
     Image,
} from "@chakra-ui/react";
import React from "react";

const ReadyToUpskill = (url) => {
     return (
          <Box
               width={"90%"}
               display={"flex"}
               alignItems="center"
               justifyContent="space-around"
               m="5px auto"
               h="100px"
               bg="linear-gradient(269.52deg,#ec008c 0,#f15b2a 98.86%)"
          >
               <Heading fontSize={45} w="600px" color={"white"}>
                    Ready to upskill?
               </Heading>

               <Button
                    colorScheme={"blackAlpha"}
                    bg="black"
                    height={"70px"}
                    fontWeight="bold"
                    fontSize={"20px"}
                    alignItems="center"
                    width="250px"
               >
                    {"GET STARTED "}
               </Button>
          </Box>
     );
};

export default ReadyToUpskill;
