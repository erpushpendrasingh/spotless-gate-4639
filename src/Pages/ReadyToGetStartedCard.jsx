import {
     Box,
     Button,
     Grid,
     GridItem,
     Heading,
     HStack,
     Text,
     VStack,
} from "@chakra-ui/react";
import React from "react";

const ReadyToGetStartedCard = () => {
     return (
          <HStack width={"93%"} m={"50px auto"}>
               <Grid templateColumns="repeat(2, 1fr)" gap={10}>
                    <GridItem
                         border={"1px"}
                         colSpan={1}
                         h="350"
                         bg="#441E2E"
                         //  p={50}
                         width={700}
                         alignItems={"center"}
                         justifyContent={"center"}
                    >
                         <Box>
                              <VStack>
                                   <VStack w="500px">
                                        <Heading
                                             mt={50}
                                             color={"white"}
                                             textAlign={"center"}
                                        >
                                             Ready to get started with
                                             Pluralsight Skills?
                                        </Heading>
                                        <Text
                                             py={4}
                                             color={"white"}
                                             fontSize={20}
                                        >
                                             Develop better. Deliver better.
                                        </Text>
                                   </VStack>
                                   <HStack py={4} gap={10}>
                                        <Button
                                             color={"white"}
                                             bg="#EE2C5A"
                                             w="250px"
                                             h="55px"
                                        >
                                             View individual plans
                                        </Button>
                                        <Button
                                             color={"white"}
                                             w="250px"
                                             h="55px"
                                             bg="#F04D37"
                                             fontWeight={"bold"}
                                        >
                                             View individual plans
                                        </Button>
                                   </HStack>
                              </VStack>
                         </Box>
                    </GridItem>
                    <GridItem
                         border={"1px"}
                         colSpan={1}
                         h="350"
                         bg="#1A394B"
                         //  p={50}
                         width={700}
                         alignItems={"center"}
                         justifyContent={"center"}
                    >
                         <Box>
                              <VStack>
                                   <VStack w="500px">
                                        <Heading
                                             mt={50}
                                             color={"white"}
                                             textAlign={"center"}
                                        >
                                             Ready to get started with
                                             Pluralsight Flow?
                                        </Heading>
                                        <Text
                                             py={4}
                                             color={"white"}
                                             fontSize={20}
                                        >
                                             Unlock your people. Upgrade your
                                             processes.
                                        </Text>
                                   </VStack>
                                   <HStack py={4} gap={10}>
                                        <Button
                                             color={"white"}
                                             bg="#EE2C5A"
                                             w="250px"
                                             h="55px"
                                        >
                                             Contact sales
                                        </Button>
                                   </HStack>
                              </VStack>
                         </Box>
                    </GridItem>
               </Grid>
          </HStack>
     );
};

export default ReadyToGetStartedCard;
