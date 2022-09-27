import {
     Box,
     Container,
     Heading,
     Text,
     VStack,
     Grid,
     GridItem,
     Input,
     Button,
     FormControl,
     FormLabel,
     FormHelperText,
     Checkbox,
} from "@chakra-ui/react";
// import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
     return (
          <VStack>
               <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    <GridItem>
                         <Box
                              spacing="20px"
                              border="5px solid black"
                              borderWidth="1px"
                              borderRadius="lg"
                              w="200px"
                         >
                              <Heading color="white">Support</Heading>
                              <Text color="#ccc">Contact</Text>
                              <Text color="#ccc"> Help Center</Text>
                              <Text color="#ccc">IP Allowlist </Text>
                              <Text color="#ccc">Site Map</Text>
                              <Text color="#ccc">Download Pluralsight</Text>
                              <Text color="#ccc">Skills Plans</Text>
                              <Text color="#ccc">Flow Plans</Text>
                         </Box>
                    </GridItem>
                    <GridItem>
                         <Box
                              w="200px"
                              spacing="20px"
                              border="5px solid black"
                              borderWidth="1px"
                              borderRadius="lg"
                         >
                              <Heading color="white">Community</Heading>
                              <Text color="#ccc">Guides</Text>
                              <Text color="#ccc">Teach</Text>
                              <Text color="#ccc">Partner with Pluralsight</Text>
                              <Text color="#ccc">Affiliate Partners</Text>
                              <Text color="#ccc">PluralsightOne.org</Text>
                              <Text color="#ccc"> Authors</Text>
                         </Box>
                    </GridItem>
                    <GridItem>
                         <Box
                              w="200px"
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
                    <GridItem>
                         <Box
                              w="200px"
                              spacing="20px"
                              border="5px solid black"
                              borderWidth="1px"
                              borderRadius="lg"
                         >
                              <Heading color="#ccc">Industries</Heading>
                              <Text color="#ccc">Public Sector</Text>
                              <Text color="#ccc">Non-Profit</Text>
                         </Box>
                    </GridItem>
                    <GridItem>
                         <Box
                              w="400px"
                              spacing="20px"
                              border="5px solid black"
                              borderWidth="1px"
                              borderRadius="lg"
                         >
                              <Heading color="#ccc">Newsletter</Heading>
                              <Text color="#ccc">
                                   Sign up with your email to join our mailing
                                   list.
                              </Text>
                              <FormControl>
                                   <FormHelperText>
                                        Email Address*
                                   </FormHelperText>
                                   <Input type="text" placeholder="Name" />
                              </FormControl>
                              <Checkbox
                                   //    icon={<CustomIcon />}
                                   colorScheme="cyan"
                                   color="white"
                              >
                                   I would like to receive emails from
                                   Pluralsight:
                              </Checkbox>{" "}
                              <br />
                              <Button colorScheme="red" variant="solid">
                                   Subscribe
                              </Button>
                         </Box>
                    </GridItem>
               </Grid>
          </VStack>
     );
};

export default Footer;
