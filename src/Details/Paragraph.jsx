import { ArrowForwardIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";
import {
     Container,
     Text,
     HStack,
     VStack,
     Heading,
     Stack,
     Button,
     Box,
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionIcon,
     AccordionPanel,
     Radio,
     Checkbox,
     RadioGroup,
} from "@chakra-ui/react";
import "../App.css";
import React from "react";

const Paragraph = () => {
     const property = {
          title: " Risk Assessment and Management",
          author: " by Kevin Henry",
          whatLearn: `Security Professionals rely on risk
                                   management to justify and develop an
                                   Information Security program. In this course,
                                   Risk Assessment and Management, you will
                                   learn comprehensive knowledge of risk
                                   management and the theories, concepts, and
                                   practices of threat modeling and enterprise
                                   risk management. First, you will learn about
                                   establishing the context for risk management.
                                   Next, you will compare the various methods of
                                   risk assessment. Finally, you will examine
                                   the options for risk response and monitoring.
                                   When you’re finished with this course, you
                                   will have the skills and knowledge of
                                   information security needed to be an
                                   effective manager and practitioner in
                                   information and risk management.`,
          management: `Risk management is the foundation for most
                              security programs and strategies. The Information
                              Security professional must be familiar with the
                              concepts and practices of risk management and this
                              course is essential for all security
                              certifications.`,
     };
     return (
          //   <HStack border={"1px solid red"} maxW="100%">
          <VStack>
               <Container bg={"black"} border={"1px solid red"} maxW="100%">
                    <Container
                         maxW="100%"
                         bg="black.400"
                         color="#262626"
                         font-family="Source Sans Pro"
                    >
                         <Heading color="white">{property.title}</Heading>
                         <Text color={"white"} fontSize={20}>
                              {property.author}
                         </Text>
                         <Text fontSize={20} fontWeight={"700"} color={"#fff"}>
                              {property.management}
                         </Text>
                         <Stack direction="row" spacing={4}>
                              <Button
                                   leftIcon={<EmailIcon />}
                                   colorScheme="teal"
                                   variant="solid"
                              >
                                   PREVIEW THIS COURSE
                              </Button>
                         </Stack>
                         <Stack>
                              <Box mt={100} fontSize={30} color={"white"}>
                                   What you'll learn
                              </Box>
                         </Stack>
                         <Stack>
                              <Box
                                   fontSize={20}
                                   fontWeight={"bold"}
                                   color={"#fff"}
                              >
                                   {property.whatLearn}
                              </Box>
                         </Stack>
                         <Stack>
                              <VStack bg="#000" width={500} textColor="#fff">
                                   <Accordion
                                        allowMultiple
                                        w="70%"
                                        mt="50px"
                                        defaultIndex={[0, 1, 2]}
                                   >
                                        <AccordionItem w="100%">
                                             <h2>
                                                  <AccordionButton width="100%">
                                                       <Box
                                                            width={500}
                                                            fontWeight={"bold"}
                                                            fontSize="22px"
                                                            flex="1"
                                                            textAlign="left"
                                                       >
                                                            Ways to learn
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <Box
                                                  display="flex"
                                                  flexDirection="row"
                                             >
                                                  <AccordionPanel
                                                       pb={4}
                                                       w="50%"
                                                  >
                                                       <Stack
                                                            fontWeight={"bold"}
                                                            fontSize={35}
                                                       >
                                                            <RadioGroup
                                                                 w="200px"
                                                                 //   onChange={
                                                                 //        setValue
                                                                 //   }
                                                                 value={"1"}
                                                            >
                                                                 <Radio
                                                                      size="lg"
                                                                      width={
                                                                           500
                                                                      }
                                                                      value="1"
                                                                      colorScheme="teal"
                                                                 >
                                                                      All
                                                                 </Radio>
                                                                 <Radio
                                                                      size="lg"
                                                                      value="10"
                                                                      colorScheme="teal"
                                                                 >
                                                                      Core
                                                                      courses
                                                                 </Radio>
                                                                 <Radio
                                                                      size="lg"
                                                                      value="2"
                                                                      colorScheme="teal"
                                                                 >
                                                                      Expended
                                                                      courses
                                                                 </Radio>
                                                                 <Radio
                                                                      size="lg"
                                                                      value="3"
                                                                      colorScheme="teal"
                                                                 >
                                                                      Labs
                                                                 </Radio>
                                                            </RadioGroup>
                                                       </Stack>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                        <AccordionItem w="100%">
                                             <h2>
                                                  <AccordionButton
                                                       //    width={400}
                                                       fontWeight={"bold"}
                                                       width="100%"
                                                  >
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                            width={500}
                                                            fontWeight={"bold"}
                                                            fontSize="22px"
                                                       >
                                                            Skill level
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <Box
                                                  display="flex"
                                                  flexDirection="row"
                                             >
                                                  <AccordionPanel
                                                       pb={4}
                                                       w="50%"
                                                       fontWeight={"bold"}
                                                       fontSize={25}
                                                  >
                                                       {/* <Radio
                                        size="lg"
                                        name="1"
                                        colorScheme="teal"
                                        defaultChecked
                                   >
                                       Advanced
                                   </Radio> */}
                                                       <Checkbox isValid>
                                                            Advanced
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Advanced
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Advanced
                                                       </Checkbox>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                        <AccordionItem w="100%">
                                             <h2>
                                                  <AccordionButton
                                                       fontWeight={"bold"}
                                                       width="100%"
                                                  >
                                                       <Box
                                                            fontWeight={"bold"}
                                                            fontSize="22px"
                                                            flex="1"
                                                            textAlign="left"
                                                       >
                                                            Subject
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <Box
                                                  display="flex"
                                                  flexDirection="column"
                                             >
                                                  <AccordionPanel
                                                       pb={4}
                                                       w="100%"
                                                       fontSize={25}
                                                       fontWeight={"bold"}
                                                  >
                                                       <Checkbox
                                                            width={500}
                                                            isValid
                                                       >
                                                            Architecture &
                                                            construction
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Business
                                                            professional
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Creative
                                                            professional
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Data professional
                                                       </Checkbox>

                                                       <Checkbox isValid>
                                                            Manufacturing &
                                                            design
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Information & cyber
                                                            security
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Software development
                                                       </Checkbox>
                                                       <Checkbox isValid>
                                                            Web development
                                                       </Checkbox>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                   </Accordion>
                                   <Button
                                        mt={20}
                                        bg="black"
                                        colorScheme={"blackAlpha"}
                                        variant={"solid"}
                                        w={"100%"}
                                        size="lg"
                                   >
                                        <CloseIcon mr={5} /> Clear filter
                                   </Button>
                              </VStack>
                         </Stack>
                    </Container>
               </Container>
          </VStack>
     );
};

export default Paragraph;
