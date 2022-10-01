import { LockIcon, StarIcon } from "@chakra-ui/icons";
import {
     Container,
     Text,
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
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
} from "@chakra-ui/react";
import "../App.css";
import React from "react";
import { FaPlay } from "react-icons/fa";

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
          <VStack>
               <Container bg={"#181818"} maxW="100%">
                    <Box mt={10} fontSize={20} color={"#ccc"}>
                         <Breadcrumb>
                              <BreadcrumbItem>
                                   <BreadcrumbLink href="#">
                                        Home
                                   </BreadcrumbLink>
                              </BreadcrumbItem>

                              <BreadcrumbItem>
                                   <BreadcrumbLink href="#">
                                        Docs
                                   </BreadcrumbLink>
                              </BreadcrumbItem>

                              <BreadcrumbItem isCurrentPage>
                                   <BreadcrumbLink href="#">
                                        Breadcrumb
                                   </BreadcrumbLink>
                              </BreadcrumbItem>
                         </Breadcrumb>
                    </Box>
                    <Container
                         mt={"60px"}
                         maxW="100%"
                         bg="#181818"
                         color="#262626"
                         font-family="Source Sans Pro"
                    >
                         <Heading fontSize={"6xl"} color="white">
                              {property.title}
                         </Heading>
                         <Text mt={10} color={"white"} fontSize={20}>
                              <StarIcon color={"gold"} />
                              <StarIcon color={"gold"} />
                              <StarIcon color={"gold"} />
                              <StarIcon color={"gold"} />
                              <StarIcon color={"gold"} /> {property.author}
                         </Text>
                         <Text
                              mt={10}
                              fontSize={20}
                              fontWeight={"700"}
                              color={"#fff"}
                         >
                              {property.management}
                         </Text>
                         <Stack mt={10} direction="row" spacing={4}>
                              <Button
                                   leftIcon={<FaPlay />}
                                   colorScheme="black"
                                   variant="solid"
                                   width={350}
                                   height={"80px"}
                                   border={"1px solid #ccc"}
                                   fontSize="20px"
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
                              <Box mt={10} fontSize={18} color={"#fff"}>
                                   {property.whatLearn}
                              </Box>
                         </Stack>
                         <Stack>
                              <VStack width={"100%"} textColor="#fff">
                                   <Accordion
                                        allowMultiple
                                        w="100%"
                                        mt="50px"
                                        // defaultIndex={[0, 1, 2]}
                                   >
                                        <AccordionItem w="100%">
                                             <AccordionButton width="100%">
                                                  <Box
                                                       fontSize="20px"
                                                       flex="1"
                                                       textAlign="left"
                                                  >
                                                       Course Overview <br />
                                                       1m
                                                  </Box>
                                                  <AccordionIcon />
                                             </AccordionButton>
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
                                                            fontSize={20}
                                                       >
                                                            <Box w={"500px"}>
                                                                 <Text>
                                                                      <li>
                                                                           Course
                                                                           Overview
                                                                           1m
                                                                      </li>
                                                                 </Text>
                                                            </Box>
                                                       </Stack>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                        <AccordionItem mt={50} w="100%">
                                             <h2>
                                                  <AccordionButton width="100%">
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                            width={500}
                                                            fontSize="20px"
                                                       >
                                                            Risk Frameworks -
                                                            ISO27005, 31000,
                                                            NIST, HTRA <br />{" "}
                                                            45mins
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
                                                       w="70%"
                                                       fontWeight={"bold"}
                                                       fontSize={25}
                                                  >
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                            width={600}
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            // fontSize="22px"
                                                            fontSize="20px"
                                                       >
                                                            <Text
                                                                 mt={5}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      {`Risk
                                                                      Frameworks
                                                                      - ISO/IEC
                                                                      27005,
                                                                      31000,
                                                                      NIST, HTRA
                                                                      7m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={"1px"}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      {
                                                                           " Risk Management Overview 9m "
                                                                      }
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={"1px"}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      {
                                                                           " Risk Management Terminology 7m "
                                                                      }
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={"1px"}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      {
                                                                           "  Risk and Governance 9m"
                                                                      }
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={"1px"}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      {
                                                                           "  Risk Management Process Part 1  6m"
                                                                      }
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={"1px"}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      {`Risk
                                                                      Management
                                                                      Process
                                                                      Part 2 7m`}
                                                                 </li>
                                                            </Text>
                                                       </Box>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                        <AccordionItem mt={"50px"} w="100%">
                                             <h2>
                                                  <AccordionButton
                                                       fontWeight={"bold"}
                                                       width="100%"
                                                  >
                                                       <Box
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            fontSize="20px"
                                                            flex="1"
                                                            textAlign="left"
                                                       >
                                                            Framing Risk <br />{" "}
                                                            11mins
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
                                                       w="10%"
                                                       fontSize={25}
                                                       fontWeight={"bold"}
                                                  >
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                            width={600}
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            fontSize="20px"
                                                       >
                                                            <Text
                                                                 mt={5}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`  Framing Risk Part 1 5m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`   Framing Risk Part 2 6m`}
                                                                 </li>
                                                            </Text>
                                                       </Box>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                        <AccordionItem mt={"50px"} w="100%">
                                             <AccordionButton
                                                  fontWeight={"bold"}
                                                  width="100%"
                                             >
                                                  <Box
                                                       fontWeight={"normal"}
                                                       fontSize="20px"
                                                       flex="1"
                                                       textAlign="left"
                                                  >
                                                       Assessing Risk <br />{" "}
                                                       45mins
                                                  </Box>
                                                  <AccordionIcon />
                                             </AccordionButton>

                                             <Box
                                                  display="flex"
                                                  flexDirection="row"
                                             >
                                                  <AccordionPanel
                                                       pb={4}
                                                       w="10%"
                                                       fontSize={25}
                                                       fontWeight={"bold"}
                                                  >
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                            width={600}
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            // fontSize="22px"
                                                            fontSize="20px"
                                                       >
                                                            <Text
                                                                 mt={5}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`Assessing
                                                                                Risk
                                                                                9m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`  Threat Modeling 10m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`  Risk Assessment Process Part 1 7m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`  Risk Assessment Process Part 2 6m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`  Risk Assessment Process Part 3 9m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`Risk Assessment Results 4m`}
                                                                 </li>
                                                            </Text>
                                                       </Box>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                        <AccordionItem mt={"50px"} w="100%">
                                             <h2>
                                                  <AccordionButton
                                                       fontWeight={"bold"}
                                                       width="100%"
                                                  >
                                                       <Box
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            fontSize="20px"
                                                            flex="1"
                                                            textAlign="left"
                                                       >
                                                            Mitigating Risk{" "}
                                                            <br /> 31mins
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
                                                       w="10%"
                                                       fontSize={25}
                                                       fontWeight={"bold"}
                                                  >
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                            width={600}
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            fontSize="20px"
                                                       >
                                                            <Text
                                                                 mt={5}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`  Mitigating Risk Part 1 7m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`    Mitigating Risk Part 2 7m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`   Mitigating Risk Part 3 10m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`   Mitigating Risk Part 4 7m`}
                                                                 </li>
                                                            </Text>
                                                       </Box>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                        <AccordionItem mt={"50px"} w="100%">
                                             <h2>
                                                  <AccordionButton
                                                       fontWeight={"bold"}
                                                       width="100%"
                                                  >
                                                       <Box
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            fontSize="20px"
                                                            flex="1"
                                                            textAlign="left"
                                                       >
                                                            Monitoring Risk{" "}
                                                            <br /> 19mins
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
                                                       w="10%"
                                                       fontSize={25}
                                                       fontWeight={"bold"}
                                                  >
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                            width={600}
                                                            fontWeight={
                                                                 "normal"
                                                            }
                                                            // fontSize="22px"
                                                            fontSize="20px"
                                                       >
                                                            <Text
                                                                 mt={5}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`    Monitoring Risk 6m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`      Risk Monitoring Process Part 1 6m`}
                                                                 </li>
                                                            </Text>
                                                            <Text
                                                                 mt={1}
                                                                 p="10px"
                                                            >
                                                                 <li>
                                                                      <LockIcon
                                                                           color={
                                                                                "goldenrod"
                                                                           }
                                                                      />{" "}
                                                                      {`    Risk Monitoring Process Part 2 7m`}
                                                                 </li>
                                                            </Text>
                                                       </Box>
                                                  </AccordionPanel>
                                             </Box>
                                        </AccordionItem>
                                   </Accordion>
                              </VStack>
                         </Stack>
                    </Container>
               </Container>
          </VStack>
     );
};

export default Paragraph;
