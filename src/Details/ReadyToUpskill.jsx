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
          <Container
               display={"flex"}
               maxW={"full"}
               backgroundImage={"https://i.postimg.cc/cCbtdStZ/dot.png"}
               backgroundRepeat="no-repeat"
               backgroundSize={"cover"}
               border={"1px solid teal"}
          >
               <Box
                    borderLeftRadius={20}
                    bg={"#F0562E"}
                    margin={"auto"}
                    width="600px"
                    h="150px"
               >
                    <Heading fontSize={45} color={"white"} p="10">
                         Ready to upskill?
                    </Heading>
               </Box>
               <Box
                    bg={"#F04641"}
                    margin={"auto"}
                    width="800px"
                    h="150px"
               ></Box>
               <Box
                    bg={"#EF3454"}
                    margin={"auto"}
                    width="800px"
                    h="150px"
                    borderRightRadius={20}
                    p="10"
               >
                    <Button
                         marginLeft={300}
                         colorScheme={"blackAlpha"}
                         bg="black"
                         height={"70px"}
                         fontWeight="bold"
                         fontSize={"20px"}
                         alignItems="center"
                         width="250px"
                    >
                         {" "}
                         GET STARTED
                    </Button>
               </Box>
          </Container>
     );
};

export default ReadyToUpskill;
