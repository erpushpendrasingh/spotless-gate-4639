import {
     Box,
     Image,
     Heading,
     HStack,
     VStack,
     Flex,
     Spacer,
     Text,
     Button,
} from "@chakra-ui/react";
import React from "react";
import HeroLeft from "./heroleft.png";
import heroright from "./heroright.png";
import delllogo from "./delllogo.png";
import gelogo from "./ge-logo.png";
import fordlogo from "./fordlogo.png";
import fedexlogo from "./fedexlogo.png";
const MainPageFirstCard = () => {
     return (
          <>
               <VStack maxW="full" bg="#B6284E" border="1px solid red">
                    <Box margin="50px auto" bg="#3B121D" w="92%" h="700px">
                         <VStack>
                              <Heading mt={50} fontSize="40px" color="white">
                                   Pluralsight empowers you to build tech
                                   fluency
                              </Heading>
                              <Heading mt={50} fontSize="40px" color="white">
                                   innovate smarter
                              </Heading>
                              <VStack>
                                   <Text color="white" p={10}>
                                        Develop critical tech skills. Cut cycle
                                        times. Build happier, healthier tech
                                        teams. And transform your goals into
                                        gains. All with Pluralsight.
                                   </Text>
                                   <Button
                                        bg="#EF4144"
                                        colorScheme="#EF4144"
                                        size="lg"
                                   >
                                        View Plans
                                   </Button>
                              </VStack>

                              <VStack p={50} margin="auto" maxW="1000px">
                                   <Flex
                                        alignItems="center"
                                        justifyContent="space-between"
                                   >
                                        <HStack width="600px">
                                             <Image h="300px" src={HeroLeft} />
                                        </HStack>

                                        <HStack>
                                             <Image h="300px" src={heroright} />
                                        </HStack>
                                   </Flex>
                              </VStack>
                         </VStack>
                         <VStack>
                              <Box>
                                   <Flex>
                                        <Image src={delllogo} alt="logo" />
                                        <Image src={gelogo} alt="logo" />
                                        <Image src={fedexlogo} alt="logo" />
                                        <Image src={fordlogo} alt="logo" />
                                   </Flex>
                              </Box>
                         </VStack>
                    </Box>
               </VStack>
          </>
     );
};

export default MainPageFirstCard;
