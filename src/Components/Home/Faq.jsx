import { ChevronRightIcon } from "@chakra-ui/icons";
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
import { MdOutlineEngineering } from "react-icons/md";
import { BiBulb } from "react-icons/bi";
import { BsClouds } from "react-icons/bs";
import { VscCreditCard, VscSettingsGear } from "react-icons/vsc";
import { ImRocket } from "react-icons/im";
const Faq = () => {
     return (
          <VStack h="150vh" bg="#272727" textColor="#fff">
               <Accordion allowToggle defaultIndex={[0]} w="82%" mt="50px">
                    <AccordionItem w="100%" border="none">
                         <AccordionButton
                              borderTop="5px solid #EC008C"
                              width="40%"
                         >
                              <Box
                                   width="100%"
                                   display="flex"
                                   alignItems="center"
                                   textAlign="left"
                                   fontWeight="500"
                                   fontSize={22}
                              >
                                   <MdOutlineEngineering
                                        style={{ marginRight: "10px" }}
                                   />
                                   Engineering onboarding
                              </Box>
                              <AccordionIcon />
                         </AccordionButton>
                         <Box
                              display="flex"
                              flexDirection="row"
                              justifyContent="space-between"
                         >
                              <AccordionPanel pb={4} w="100%">
                                   <p
                                        style={{
                                             fontWeight: "400",
                                             fontSize: "16px",
                                        }}
                                   >
                                        Get new engineering hires to full
                                        productivity faster
                                   </p>
                                   <br />
                                   <Button
                                        border="none"
                                        variant="link"
                                        rightIcon={<ChevronRightIcon />}
                                        colorScheme="teal"
                                        fontSize="large"
                                        color="#EC008C"
                                   >
                                        Learn more
                                   </Button>
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        // w="250px"
                                        src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/agile-transformation.webp"
                                        alt="Dan 1"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>

                    <AccordionItem w="100%" border="none">
                         <AccordionButton
                              borderTop="1px solid #ccc"
                              width="40%"
                         >
                              <Box
                                   width="100%"
                                   display="flex"
                                   alignItems="center"
                                   textAlign="left"
                                   fontWeight="500"
                                   fontSize={22}
                              >
                                   <VscCreditCard
                                        style={{ marginRight: "10px" }}
                                   />
                                   Software delivery
                              </Box>
                              <AccordionIcon />
                         </AccordionButton>
                         <Box
                              display="flex"
                              flexDirection="row"
                              justifyContent="space-between"
                         >
                              <AccordionPanel pb={4} w="100%">
                                   <p
                                        style={{
                                             fontWeight: "400",
                                             fontSize: "16px",
                                        }}
                                   >
                                        Empower software teams to ship reliable,
                                        scalable, secure code on time
                                   </p>
                                   <br />
                                   <Button
                                        border="none"
                                        variant="link"
                                        rightIcon={<ChevronRightIcon />}
                                        colorScheme="teal"
                                        fontSize="large"
                                        color="#EC008C"
                                   >
                                        Learn more
                                   </Button>
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        // w="250px"
                                        src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/agile-transformation.webp"
                                        alt="Dan 2"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>

                    <AccordionItem w="100%" border="none">
                         <AccordionButton
                              borderTop="1px solid #ccc"
                              width="40%"
                         >
                              <Box
                                   width="100%"
                                   display="flex"
                                   alignItems="center"
                                   textAlign="left"
                                   fontWeight="500"
                                   fontSize={22}
                              >
                                   <BiBulb style={{ marginRight: "10px" }} />
                                   Tech fluency
                              </Box>
                              <AccordionIcon />
                         </AccordionButton>
                         <Box
                              display="flex"
                              flexDirection="row"
                              justifyContent="space-between"
                         >
                              <AccordionPanel pb={4} w="100%">
                                   <p
                                        style={{
                                             fontWeight: "400",
                                             fontSize: "16px",
                                        }}
                                   >
                                        Remove knowledge barriers and accelerate
                                        every touchpoint to technology
                                   </p>
                                   <br />
                                   <Button
                                        border="none"
                                        variant="link"
                                        rightIcon={<ChevronRightIcon />}
                                        colorScheme="teal"
                                        fontSize="large"
                                        color="#EC008C"
                                   >
                                        Learn more
                                   </Button>
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/agile-transformation.webp"
                                        alt="Dan Abramov"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>

                    <AccordionItem w="100%" border="none">
                         <AccordionButton
                              borderTop="1px solid #ccc"
                              width="40%"
                         >
                              <Box
                                   width="100%"
                                   display="flex"
                                   alignItems="center"
                                   textAlign="left"
                                   fontWeight="500"
                                   fontSize={22}
                              >
                                   <BsClouds style={{ marginRight: "10px" }} />
                                   Cloud transformation
                              </Box>
                              <AccordionIcon />
                         </AccordionButton>
                         <Box
                              display="flex"
                              flexDirection="row"
                              justifyContent="space-between"
                         >
                              <AccordionPanel pb={4} w="100%">
                                   <p
                                        style={{
                                             fontWeight: "400",
                                             fontSize: "16px",
                                        }}
                                   >
                                        Overcome complex cloud challenges and
                                        build cloud talent from within
                                   </p>
                                   <br />
                                   <Button
                                        border="none"
                                        variant="link"
                                        rightIcon={<ChevronRightIcon />}
                                        colorScheme="teal"
                                        fontSize="large"
                                        color="#EC008C"
                                   >
                                        Learn more
                                   </Button>
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/agile-transformation.webp"
                                        alt="Dan Abramov"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>

                    <AccordionItem w="100%" border="none">
                         <AccordionButton
                              borderTop="1px solid #ccc"
                              width="40%"
                         >
                              <Box
                                   width="100%"
                                   display="flex"
                                   alignItems="center"
                                   textAlign="left"
                                   fontWeight="500"
                                   fontSize={22}
                              >
                                   <ImRocket style={{ marginRight: "10px" }} />
                                   Upskilling/reskilling
                              </Box>
                              <AccordionIcon />
                         </AccordionButton>
                         <Box
                              display="flex"
                              flexDirection="row"
                              justifyContent="space-between"
                         >
                              <AccordionPanel pb={4} w="100%">
                                   <p
                                        style={{
                                             fontWeight: "400",
                                             fontSize: "16px",
                                        }}
                                   >
                                        Build the tech skills you need for
                                        career growth and mission-critical
                                        projects
                                   </p>
                                   <br />
                                   <Button
                                        border="none"
                                        variant="link"
                                        rightIcon={<ChevronRightIcon />}
                                        colorScheme="teal"
                                        fontSize="large"
                                        color="#EC008C"
                                   >
                                        Learn more
                                   </Button>
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/agile-transformation.webp"
                                        alt="Dan Abramov"
                                   />
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>

                    <AccordionItem w="100%" border="none">
                         <AccordionButton
                              borderTop="1px solid #ccc"
                              width="40%"
                         >
                              <Box
                                   width="100%"
                                   display="flex"
                                   alignItems="center"
                                   textAlign="left"
                                   fontWeight="500"
                                   fontSize={22}
                              >
                                   <VscSettingsGear
                                        style={{ marginRight: "10px" }}
                                   />
                                   Agile transformation
                              </Box>
                              <AccordionIcon />
                         </AccordionButton>
                         <Box
                              display="flex"
                              flexDirection="row"
                              justifyContent="space-between"
                         >
                              <AccordionPanel pb={4} w="100%">
                                   <p
                                        style={{
                                             fontWeight: "400",
                                             fontSize: "16px",
                                        }}
                                   >
                                        Identify how your Agile journey is
                                        progressing and how to improve
                                   </p>
                                   <br />
                                   <Button
                                        border="none"
                                        variant="link"
                                        rightIcon={<ChevronRightIcon />}
                                        colorScheme="teal"
                                        fontSize="large"
                                        color="#EC008C"
                                   >
                                        Learn more
                                   </Button>
                              </AccordionPanel>
                              <AccordionPanel pb={4}>
                                   <Image
                                        src="https://www.pluralsight.com/content/dam/ps-dam/images/solutions-custom-accordion/webp/upskilling-reskilling.webp"
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
