import { EmailIcon } from "@chakra-ui/icons";
import {
     Box,
     Heading,
     HStack,
     IconButton,
     Image,
     VStack,
} from "@chakra-ui/react";
import React from "react";

const ToolsIcon = () => {
     return (
          <HStack bg="#202020" width={"80%"} m="auto">
               <Box mt="40px" width={350}>
                    <Heading color={"white"}>
                         Popular Pluralsight Skills topics to learn now
                    </Heading>
               </Box>
               <HStack
                    border={"1px solid red"}
                    gap={2}
                    m={"100px auto"}
                    // w="80%"
               >
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/BnjgDHQh/javascript-noshadow.png"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/9FMt5ZTW/angular-noshadow.png"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/nVQ9v2v9/azure-noshadow.pngs"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/bNk6FQjs/ruby-noshadow.png"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/rsSSgNtT/csharp-noshadow-1.png"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/PxtxBGJP/java-noshadow.png"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/8P4v55RZ/react-noshadow.png"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/3RZ8ByJ6/python-noshadow.png"
                              />
                         }
                    />
                    <IconButton
                         variant="outline"
                         h={"60px"}
                         colorScheme="teal"
                         aria-label="Send email"
                         icon={
                              <Image
                                   h={"60px"}
                                   src="https://i.postimg.cc/2ycCsPW7/aws-noshadow.png"
                              />
                         }
                    />
               </HStack>
          </HStack>
     );
};

export default ToolsIcon;
