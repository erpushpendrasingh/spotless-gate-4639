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
                    border="1px solid red"
                    w="80%"
                    margin="100px auto"
               >
                    <Grid templateColumns="repeat(2,1fr)" alignItems="center">
                         <GridItem>
                              <Box w="600px">
                                   <Heading>Why Pluralsight?</Heading>
                                   <Text>
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
                                        h="50px"
                                        w="200px"
                                        mt="40px"
                                   >
                                        See our solutions
                                   </Button>
                              </Box>
                         </GridItem>
                         <GridItem>
                              <Image w="590px" src={why} />
                         </GridItem>
                    </Grid>
               </VStack>
          </>
     );
};

export default WhyPluralsightCard;
