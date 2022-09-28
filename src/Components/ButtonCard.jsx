import {
     Text,
     Box,
     Heading,
     VStack,
     Grid,
     GridItem,
     Container,
     Spacer,
} from "@chakra-ui/react";

function ButtonCard() {
     return (
          <>
               <VStack maxW={900} border="1px solid red" margin="50px auto">
                    <Container margin="50px auto" maxW="4xl" height="300px">
                         <Grid
                              templateColumns="repeat(5, 1fr)"
                              gap={6}
                              justifyContent="space-between"
                              alignItems="center"
                         >
                              <Spacer />
                              <GridItem>
                                   <Box
                                        spacing="20px"
                                        border="5px solid black"
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        w="250px"
                                        h="200px"
                                   >
                                        <Heading color="white">Support</Heading>
                                        <Text color="#ccc">Contact</Text>
                                        <Text color="#ccc"> Help Center</Text>
                                        <Text color="#ccc">IP Allowlist </Text>
                                        <Text color="#ccc">Site Map</Text>
                                        <Text color="#ccc">
                                             Download Pluralsight
                                        </Text>
                                        <Text color="#ccc">Skills Plans</Text>
                                        <Text color="#ccc">Flow Plans</Text>
                                   </Box>
                              </GridItem>
                              <GridItem>
                                   <Box
                                        w="250px"
                                        spacing="20px"
                                        border="5px solid black"
                                        borderWidth="1px"
                                        borderRadius="lg"
                                   >
                                        <Heading color="white">
                                             Community
                                        </Heading>
                                        <Text color="#ccc">Guides</Text>
                                        <Text color="#ccc">Teach</Text>
                                        <Text color="#ccc">
                                             Partner with Pluralsight
                                        </Text>
                                        <Text color="#ccc">
                                             Affiliate Partners
                                        </Text>
                                        <Text color="#ccc">
                                             PluralsightOne.org
                                        </Text>
                                        <Text color="#ccc"> Authors</Text>
                                   </Box>
                              </GridItem>
                              <GridItem>
                                   <Box
                                        w="250px"
                                        spacing="20px"
                                        border="5px solid black"
                                        borderWidth="1px"
                                        borderRadius="lg"
                                   >
                                        <Heading color="#ccc">Company</Heading>
                                        <Text color="#ccc">About Us</Text>
                                        <Text color="#ccc">Careers</Text>
                                        <Text color="#ccc">Newsroom</Text>
                                        <Text color="#ccc">Resources</Text>
                                   </Box>
                              </GridItem>
                         </Grid>
                    </Container>
               </VStack>
          </>
     );
}
export default ButtonCard;
