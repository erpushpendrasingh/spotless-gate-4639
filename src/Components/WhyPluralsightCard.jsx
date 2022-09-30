import {
     GridItem,
     Image,
     Grid,
     HStack,
     Text,
     Box,
     Heading,
     Button,
     VStack,
} from "@chakra-ui/react";
import React from "react";
import why from "./why-ps-2x.png";
const WhyPluralsightCard = () => {
     return (
          <>
               <VStack
                    bg="#FFFFFF"
                    w="100%"
                    height={"90vh"}
                    margin="150px auto"
               >
                    <Grid templateColumns="repeat(2,1fr)" alignItems="center">
                         <GridItem>
                              <Box w="800px">
                                   <Heading mt={20} fontSize={70}>
                                        Why Pluralsight?
                                   </Heading>
                                   <Text mt={20} height={400} fontSize={25}>
                                        Whether you’re an individual looking to
                                        learn Python to advance your career or
                                        an enterprise team looking to cut cycle
                                        times, speed up onboarding, or give your
                                        teams the skills to realize your
                                        strategies, we remove the challenges and
                                        roadblocks slowing you down. We’re
                                        advancing the world’s tech workforce,
                                        and that starts with making your work
                                        more efficient and effective—and giving
                                        you more to celebrate.
                                   </Text>
                                   <Button
                                        bg="#EF4143"
                                        h="70px"
                                        w="270px"
                                   >
                                        See our solutions
                                   </Button>
                              </Box>
                         </GridItem>
                         <GridItem>
                              <Image w="700px" h="900" src={why} />
                         </GridItem>
                    </Grid>
               </VStack>
          </>
     );
};

export default WhyPluralsightCard;
