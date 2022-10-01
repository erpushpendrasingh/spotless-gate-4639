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
     Image,
} from "@chakra-ui/react";
// import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
     return (
          <Box margin={"auto"} bg="#202020" height={"500px"} p="40px">
               <Grid
                    w="80%"
                    margin={"auto"}
                    templateColumns="repeat(5, 1fr)"
                    gap={6}
               >
                    <GridItem margin={"auto"}>
                         <Box
                              spacing="20px"
                              w="200px"
                              // p={"10px"}
                         >
                              <Heading fontSize={"20px"} color="white">
                                   Support
                              </Heading>
                              <Text mt="20px" color="#CCCCC7">
                                   Contact
                              </Text>
                              <Text color="#CCCCC7"> Help Center</Text>
                              <Text color="#CCCCC7">IP Allowlist </Text>
                              <Text color="#CCCCC7">Site Map</Text>
                              <Text color="#CCCCC7">Download Pluralsight</Text>
                              <Text color="#CCCCC7">Skills Plans</Text>
                              <Text color="#CCCCC7">Flow Plans</Text>
                         </Box>
                    </GridItem>
                    <GridItem>
                         <Box
                              // w="200px"
                              // spacing="20px"
                              // border="5px solid black"
                              // borderWidth="1px"
                              // borderRadius="lg"
                              spacing="20px"
                              w="200px"
                         >
                              <Heading fontSize={"20px"} color="white">
                                   Community
                              </Heading>
                              <Text mt="20px" color="#CCCCC7">
                                   Guides
                              </Text>
                              <Text color="#CCCCC7">Teach</Text>
                              <Text color="#CCCCC7">
                                   Partner with Pluralsight
                              </Text>
                              <Text color="#CCCCC7">Affiliate Partners</Text>
                              <Text color="#CCCCC7">PluralsightOne.org</Text>
                              <Text color="#CCCCC7"> Authors</Text>
                         </Box>
                    </GridItem>
                    <GridItem>
                         <Box w="200px" spacing="20px">
                              <Heading fontSize={"20px"} color="#CCCCC7">
                                   Company
                              </Heading>
                              <Text mt="20px" color="#CCCCC7">
                                   About Us
                              </Text>
                              <Text color="#CCCCC7">Careers</Text>
                              <Text color="#CCCCC7">Newsroom</Text>
                              <Text color="#CCCCC7">Resources</Text>
                         </Box>
                    </GridItem>
                    <GridItem>
                         <Box w="200px" spacing="20px">
                              <Heading fontSize={"20px"} color="#CCCCC7">
                                   Industries
                              </Heading>
                              <Text mt="20px" color="#CCCCC7">
                                   Public Sector
                              </Text>
                              <Text color="#CCCCC7">Non-Profit</Text>
                         </Box>
                    </GridItem>
                    <GridItem>
                         <Box w="400px" spacing="20px">
                              <Heading fontSize={"20px"} color="#CCCCC7">
                                   Newsletter
                              </Heading>
                              <Text mt="20px" color="#CCCCC7">
                                   Sign up with your email to join our mailing
                                   list.
                              </Text>
                              <FormControl m={"10px"}>
                                   <FormHelperText>
                                        Email Address*
                                   </FormHelperText>
                                   <Input type="text" />
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
                              <Box
                                   display="flex"
                                   width={"200px"}
                                   border="1px solid red"
                                   justifyContent={"space-between"}
                                   h="30px"
                                   // paddingTop={20}
                              >
                                   <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-fb.png" />
                                   <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-twitter.png" />
                                   <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-instagram.png" />
                                   <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-linkedin.png" />
                                   <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-yt.png" />
                              </Box>
                         </Box>
                    </GridItem>
               </Grid>
               <Box border={"1px solid red"} color="white" display={"flex"} alignItems="center" justifyContent={"space-between"}>
                    <Image src="https://www.pluralsight.com/content/dam/logo/pluralsight-footer-logo-icon.png" />
                    <Text>
                         Copyright @2004-2022 pluralsight LLC.All rights
                         reserved{" "}
                    </Text>
                    <Box display={"flex"}>
                         <Image src="https://www.pluralsight.com/content/dam/social-icons/pluralsight-footer-globe-wireframe.png" />
                         <Text>Deutsch</Text>
                         <Text>English</Text>
                         <Text>French</Text>
                    </Box>
                    <Box display={"flex"}>
                         <Text>Terms of Use</Text>
                         <Text>Privacy Notice</Text>
                         <Text>Modern Slavery Act Transparency Statement</Text>
                    </Box>
               </Box>
          </Box>
     );
};

export default Footer;
