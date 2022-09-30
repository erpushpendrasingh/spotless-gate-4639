import {
     Accordion,
     AccordionButton,
     AccordionIcon,
     AccordionItem,
     AccordionPanel,
     Box,
     Button,
     Image,
     VStack,
} from "@chakra-ui/react";
import React from "react";

const Faq = () => {
     return (
          <VStack bg="#000" textColor="#fff">
               <Accordion allowMultiple w="70%" mt="150px">
                    <AccordionItem w="100%">
                         <h2>
                              <AccordionButton width="50%">
                                   <Box flex="1" textAlign="left">
                                        Engineering onboarding
                                   </Box>
                                   <AccordionIcon />
                              </AccordionButton>
                         </h2>
                         <Box display="flex" flexDirection="row">
                              <AccordionPanel pb={4} w="50%">
                                   Get new engineering hires to full
                                   productivity faster
                                   <Button bg="red" mt="50px">
                                        Learn more
                                   </Button>
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        // w="250px"
                                        src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/agile-transformation.webp"
                                        alt="Dan Abramov"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>
                    <AccordionItem w="100%">
                         <h2>
                              <AccordionButton width="50%">
                                   <Box flex="1" textAlign="left">
                                        Section 1 title
                                   </Box>
                                   <AccordionIcon />
                              </AccordionButton>
                         </h2>
                         <Box display="flex" flexDirection="row">
                              <AccordionPanel pb={4} w="50%">
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipiscing elit, sed do eiusmod tempor
                                   incididunt ut labore et dolore magna aliqua.
                                   Ut enim ad minim veniam, quis nostrud
                                   exercitation ullamco laboris nisi ut aliquip
                                   ex ea commodo consequat.
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        src="https://bit.ly/dan-abramov"
                                        alt="Dan Abramov"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>
                    <AccordionItem w="100%">
                         <h2>
                              <AccordionButton width="50%">
                                   <Box flex="1" textAlign="left">
                                        Section 1 title
                                   </Box>
                                   <AccordionIcon />
                              </AccordionButton>
                         </h2>
                         <Box display="flex" flexDirection="row">
                              <AccordionPanel pb={4} w="50%">
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipiscing elit, sed do eiusmod tempor
                                   incididunt ut labore et dolore magna aliqua.
                                   Ut enim ad minim veniam, quis nostrud
                                   exercitation ullamco laboris nisi ut aliquip
                                   ex ea commodo consequat.
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        src="https://bit.ly/dan-abramov"
                                        alt="Dan Abramov"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>
               </Accordion>
          </VStack>
     );
};

export default Faq;
