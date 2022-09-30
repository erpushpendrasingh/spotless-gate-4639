import {
     Box,
     Button,
     Collapse,
     Flex,
     HStack,
     Image,
     Spacer,
     Text,
     Heading,
     Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
     Search2Icon,
     ChevronDownIcon,
     ChevronUpIcon,
     ChevronRightIcon,
} from "@chakra-ui/icons";
import BrandImg from "./brand.png";
import { Link } from "react-router-dom";

const Header = () => {
     const [openTabOne, setOpenTabOne] = useState(false);
     const [openTabTwo, setOpenTabTwo] = useState(false);
     const [openTabThree, setOpenTabThree] = useState(false);

     const setOpenTabOneChange = () => {
          setOpenTabOne(!openTabOne);
          if (openTabTwo) {
               setOpenTabTwo(false);
          }
          if (openTabThree) {
               setOpenTabThree(false);
          }
     };

     const setOpenTabTwoChange = () => {
          setOpenTabTwo(!openTabTwo);
          if (openTabOne) {
               setOpenTabOne(false);
          }
          if (openTabThree) {
               setOpenTabThree(false);
          }
     };
     const setOpenTabThreeChange = () => {
          setOpenTabThree(!openTabThree);
          if (openTabOne) {
               setOpenTabOne(false);
          }
          if (openTabTwo) {
               setOpenTabTwo(false);
          }
     };
     const handleClick = () => {
          alert("hello");
     };
     return (
          <>
               <HStack bg="#2B2B2B" h="80px" margin=" auto" w="100%" px="50px">
                    <Box width="100%">
                         <Flex
                              alignItems="center"
                              justifyContent="space-between"
                         >
                              <Image
                                   w="220px"
                                   h="50px"
                                   src={BrandImg}
                                   alt="brandImg"
                              />
                              <Button
                                   colorScheme="black"
                                   w="150px"
                                   h="60px"
                                   onClick={() => setOpenTabOneChange()}
                              >
                                   Products
                                   {!openTabOne ? (
                                        <ChevronDownIcon m={2} w={6} h={6} />
                                   ) : (
                                        <ChevronUpIcon w={6} m="10px" h={6} />
                                   )}
                              </Button>
                              <Collapse zIndex="1000" in={openTabOne}>
                                   <Box
                                        bg="#FFFFFF"
                                        w="85%"
                                        position="absolute"
                                        top="130px"
                                        left="100px"
                                        h="45vh"
                                        color={"black"}
                                        zIndex="1000"
                                   >
                                        <Flex
                                             flexDirection="row"
                                             alignItems="center"
                                             justifyContent="space-around"
                                             mt="20px"
                                        >
                                             <Box w="250px" h="250px">
                                                  <Box
                                                       borderRight="5px solid #FFFFFF"
                                                       w="250px"
                                                       h="200px"
                                                  >
                                                       <Box
                                                            display={"flex"}
                                                            gap={8}
                                                            w={400}
                                                            h="80px"
                                                            borderBottom={
                                                                 "2px solid #ccc"
                                                            }
                                                       >
                                                            <Box>
                                                                 <Image
                                                                      w="60px"
                                                                      src="https://i.postimg.cc/XYgqWz1p/product-logo-skills.png"
                                                                 />
                                                            </Box>
                                                            <Box>
                                                                 <Heading>
                                                                      Skills
                                                                 </Heading>
                                                                 <Text
                                                                      fontSize={
                                                                           "xl"
                                                                      }
                                                                 >
                                                                      Build tech
                                                                      skills to
                                                                      drive
                                                                      results
                                                                 </Text>
                                                            </Box>
                                                       </Box>

                                                       <Box
                                                            display={"flex"}
                                                            flexDirection="column"
                                                            fontSize={20}
                                                            gap={2}
                                                            mt={10}
                                                       >
                                                            <Link>Courses</Link>
                                                            <Link>
                                                                 {
                                                                      " For individuals"
                                                                 }
                                                            </Link>
                                                            <Link>
                                                                 {"View plans "}
                                                            </Link>
                                                       </Box>
                                                       <Box
                                                            color={"#ED0D92"}
                                                            w={150}
                                                            mt={50}
                                                            fontWeight={
                                                                 "medium"
                                                            }
                                                            fontSize={"22px"}
                                                       >
                                                            <Link>
                                                                 Why Skills?
                                                            </Link>
                                                       </Box>
                                                  </Box>
                                             </Box>
                                             <Box w="250px" h="250px">
                                                  <Box
                                                       borderRight="5px solid #FFFFFF"
                                                       w="250px"
                                                       h="200px"
                                                  >
                                                       <Box
                                                            display={"flex"}
                                                            gap={8}
                                                            w={400}
                                                            h="80px"
                                                       >
                                                            <Box>
                                                                 <Image
                                                                      w="60px"
                                                                      src="https://i.postimg.cc/pT8X3qmd/product-logo-flow.png"
                                                                 />
                                                            </Box>
                                                            <Box>
                                                                 <Heading>
                                                                      Flow
                                                                 </Heading>
                                                                 <Text
                                                                      fontSize={
                                                                           "xl"
                                                                      }
                                                                 >
                                                                      Get
                                                                      insights
                                                                      into your
                                                                      workflow
                                                                 </Text>
                                                            </Box>
                                                       </Box>

                                                       <Box
                                                            display={"flex"}
                                                            flexDirection="column"
                                                            fontSize={20}
                                                            gap={2}
                                                            mt={10}
                                                            width={"300px"}
                                                       >
                                                            <Link>
                                                                 View features
                                                            </Link>
                                                            <Link>
                                                                 {"View plans"}
                                                            </Link>
                                                       </Box>
                                                       <Box
                                                            color={"#ED0D92"}
                                                            w={150}
                                                            mt={50}
                                                            fontWeight={
                                                                 "medium"
                                                            }
                                                            fontSize={"22px"}
                                                       >
                                                            <Link>
                                                                 Why Flow?
                                                            </Link>
                                                       </Box>
                                                  </Box>
                                             </Box>
                                             <Box w="250px" h="250px">
                                                  <Box
                                                       borderRight="5px solid #FFFFFF"
                                                       w="250px"
                                                       h="200px"
                                                  >
                                                       <Box
                                                            display={"flex"}
                                                            gap={8}
                                                            w={400}
                                                            h="80px"
                                                            borderBottom={
                                                                 "2px solid #ccc"
                                                            }
                                                       >
                                                            <Box>
                                                                 <Image
                                                                      w="60px"
                                                                      src="https://www.pluralsight.com/content/dam/ps-nav-assets/products/product-logo-proserv.png"
                                                                 />
                                                            </Box>
                                                            <Box>
                                                                 <Heading>
                                                                      Proserv
                                                                 </Heading>
                                                                 <Text
                                                                      fontSize={
                                                                           "xl"
                                                                      }
                                                                 >
                                                                      Tailor
                                                                      solutions
                                                                      to your
                                                                      needs
                                                                 </Text>
                                                            </Box>
                                                       </Box>

                                                       <Box
                                                            display={"flex"}
                                                            flexDirection="column"
                                                            fontSize={20}
                                                            gap={2}
                                                            mt={10}
                                                            w="300px"
                                                       >
                                                            <Link>
                                                                 Tech employee
                                                                 development
                                                            </Link>
                                                            <Link>
                                                                 {
                                                                      "Proserv for Skills"
                                                                 }
                                                            </Link>
                                                            <Link>
                                                                 {
                                                                      "Proserv for Flow "
                                                                 }
                                                            </Link>
                                                       </Box>
                                                       <Box
                                                            color={"#ED0D92"}
                                                            w={150}
                                                            mt={50}
                                                            fontWeight={
                                                                 "medium"
                                                            }
                                                            fontSize={"22px"}
                                                       >
                                                            <Link>
                                                                 Why Proserv?
                                                            </Link>
                                                       </Box>
                                                  </Box>
                                             </Box>
                                        </Flex>
                                   </Box>
                              </Collapse>
                              <Button
                                   colorScheme="black"
                                   w="150px"
                                   h="60px"
                                   onClick={() => setOpenTabTwoChange()}
                              >
                                   Solutions
                                   {!openTabTwo ? (
                                        <ChevronDownIcon m={2} w={6} h={6} />
                                   ) : (
                                        <ChevronUpIcon w={6} m="10px" h={6} />
                                   )}
                              </Button>
                              <Collapse in={openTabTwo}>
                                   <Box
                                        bg="#FFFFFF"
                                        w="89%"
                                        position="absolute"
                                        top="130px"
                                        left="100px"
                                        h="50vh"
                                        color={"black"}
                                   >
                                        <Flex
                                             flexDirection="row"
                                             alignItems="center"
                                             justifyContent="space-around"
                                             mt="20px"
                                        >
                                             <Box>
                                                  <Box
                                                       // 1
                                                       display={"flex"}
                                                       gap={5}
                                                       w={400}
                                                       h="80px"
                                                       mt={8}
                                                  >
                                                       <Box>
                                                            <Image
                                                                 w="60px"
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-engineer-icon.png"
                                                            />
                                                       </Box>
                                                       <Box>
                                                            <Text
                                                                 fontSize={20}
                                                                 fontWeight={
                                                                      "bold"
                                                                 }
                                                            >
                                                                 Engineer
                                                                 onboarding
                                                            </Text>
                                                            <Text
                                                                 fontSize={"xl"}
                                                            >
                                                                 Onboard new
                                                                 engineers
                                                                 faster
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                                  {/* 1  END*/}

                                                  <Box
                                                       // 2 start
                                                       display={"flex"}
                                                       gap={5}
                                                       w={600}
                                                       h="80px"
                                                       mt={8}
                                                  >
                                                       <Box>
                                                            <Image
                                                                 w="60px"
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-software-icon.png"
                                                            />
                                                       </Box>
                                                       <Box>
                                                            <Text
                                                                 fontSize={20}
                                                                 fontWeight={
                                                                      "bold"
                                                                 }
                                                            >
                                                                 Software
                                                                 delivery
                                                            </Text>
                                                            <Text
                                                                 fontSize={"xl"}
                                                            >
                                                                 Build products
                                                                 faster and
                                                                 improve
                                                                 developer
                                                                 experience
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                                  {/* 2 end */}
                                                  <Box
                                                       // 3rd box
                                                       display={"flex"}
                                                       gap={5}
                                                       w={400}
                                                       h="80px"
                                                       mt={8}
                                                  >
                                                       <Box>
                                                            <Image
                                                                 w="60px"
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-cloud-icon.png"
                                                            />
                                                       </Box>
                                                       <Box>
                                                            <Text
                                                                 fontSize={20}
                                                                 fontWeight={
                                                                      "bold"
                                                                 }
                                                            >
                                                                 Software
                                                                 delivery
                                                            </Text>
                                                            <Text
                                                                 fontSize={"xl"}
                                                            >
                                                                 Develop
                                                                 internal cloud
                                                                 talent
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                                  {/* 3rd box end */}
                                                  <Box mt={10}>
                                                       <Box>
                                                            <Text
                                                                 fontWeight={
                                                                      "bold"
                                                                 }
                                                                 fontSize={20}
                                                            >
                                                                 See All
                                                                 Solution{" "}
                                                                 <ChevronRightIcon />
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                             </Box>
                                             <Box>
                                                  <Box
                                                       // 2.1
                                                       display={"flex"}
                                                       gap={8}
                                                       w={450}
                                                       h="80px"
                                                       mt={10}
                                                  >
                                                       <Box>
                                                            <Image
                                                                 w="60px"
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-talent-icon.png"
                                                            />
                                                       </Box>
                                                       <Box>
                                                            <Text
                                                                 fontSize={20}
                                                                 fontWeight={
                                                                      "bold"
                                                                 }
                                                            >
                                                                 Talent mobility
                                                            </Text>
                                                            <Text
                                                                 fontSize={"xl"}
                                                                 // width={"400px"}
                                                            >
                                                                 Improve
                                                                 retention and
                                                                 cut hiring
                                                                 costs
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                                  {/* 1  END*/}

                                                  <Box
                                                       // 2 start
                                                       display={"flex"}
                                                       gap={8}
                                                       w={400}
                                                       h="80px"
                                                       mt={10}
                                                  >
                                                       <Box>
                                                            <Image
                                                                 w="60px"
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-teams-icon.png"
                                                            />
                                                       </Box>
                                                       <Box>
                                                            <Text
                                                                 fontSize={20}
                                                                 fontWeight={
                                                                      "bold"
                                                                 }
                                                            >
                                                                 Distributed &
                                                                 remote teams
                                                            </Text>
                                                            <Text
                                                                 fontSize={"xl"}
                                                            >
                                                                 Improve cycle
                                                                 times and
                                                                 reduce burnout
                                                                 for remote
                                                                 teams
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                                  {/* 2 end */}
                                                  <Box
                                                       // 3rd box
                                                       display={"flex"}
                                                       gap={8}
                                                       w={400}
                                                       h="80px"
                                                       mt={10}
                                                  >
                                                       <Box>
                                                            <Image
                                                                 w="60px"
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-upskilling-icon.png"
                                                            />
                                                       </Box>
                                                       <Box>
                                                            <Text
                                                                 fontSize={20}
                                                                 fontWeight={
                                                                      "bold"
                                                                 }
                                                            >
                                                                 Icon for
                                                                 Upskilling &
                                                                 reskilling
                                                            </Text>
                                                            <Text
                                                                 fontSize={"xl"}
                                                            >
                                                                 Develop teams
                                                                 that deliver on
                                                                 key initiatives
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                                  {/* 3rd box end */}
                                             </Box>
                                             <Box
                                                  w="500px"
                                                  border={"1px solid red"}
                                                  h="400px"
                                             >
                                                  <Box>
                                                       <Box
                                                            // 3.1
                                                            display={"flex"}
                                                            gap={8}
                                                            w={450}
                                                            h="80px"
                                                            mt={10}
                                                       >
                                                            <Box>
                                                                 <Image
                                                                      w="60px"
                                                                      src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-agile-icon.png"
                                                                 />
                                                            </Box>
                                                            <Box>
                                                                 <Text
                                                                      fontSize={
                                                                           20
                                                                      }
                                                                      fontWeight={
                                                                           "bold"
                                                                      }
                                                                 >
                                                                      Agile
                                                                      transformation
                                                                 </Text>
                                                                 <Text
                                                                      fontSize={
                                                                           "xl"
                                                                      }
                                                                      // width={"400px"}
                                                                 >
                                                                      Increase
                                                                      delivery
                                                                      speed and
                                                                      overcome
                                                                      Agile
                                                                      roadblocks
                                                                 </Text>
                                                            </Box>
                                                       </Box>
                                                       {/* 1  END*/}

                                                       <Box
                                                            // 2 start
                                                            display={"flex"}
                                                            gap={8}
                                                            w={400}
                                                            h="80px"
                                                            mt={10}
                                                       >
                                                            <Box>
                                                                 <Image
                                                                      w="60px"
                                                                      src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-fluency-icon.png"
                                                                 />
                                                            </Box>
                                                            <Box>
                                                                 <Text
                                                                      fontSize={
                                                                           20
                                                                      }
                                                                      fontWeight={
                                                                           "bold"
                                                                      }
                                                                 >
                                                                      Tech
                                                                      fluency
                                                                 </Text>
                                                                 <Text
                                                                      fontSize={
                                                                           "xl"
                                                                      }
                                                                 >
                                                                      Build
                                                                      fluency
                                                                      and
                                                                      collaboration—organization-wide
                                                                 </Text>
                                                            </Box>
                                                       </Box>
                                                       {/* 2 end */}
                                                       <Box
                                                            // 3rd box
                                                            display={"flex"}
                                                            gap={8}
                                                            w={400}
                                                            h="80px"
                                                            mt={10}
                                                       >
                                                            <Box>
                                                                 <Image
                                                                      w="60px"
                                                                      src="https://www.pluralsight.com/content/dam/ps-nav-assets/solutions/solutions-opportunity-icon.png"
                                                                 />
                                                            </Box>
                                                            <Box>
                                                                 <Text
                                                                      fontSize={
                                                                           20
                                                                      }
                                                                      color="black"
                                                                      fontWeight={
                                                                           "bold"
                                                                      }
                                                                 >
                                                                      Opportunity
                                                                      Academies
                                                                 </Text>
                                                                 <Text
                                                                      fontSize={
                                                                           "xl"
                                                                      }
                                                                      color="silver"
                                                                 >
                                                                      Hire
                                                                      job-ready,
                                                                      diverse
                                                                      talent
                                                                 </Text>
                                                            </Box>
                                                       </Box>
                                                       {/* 3rd box end */}
                                                  </Box>
                                             </Box>
                                        </Flex>
                                   </Box>
                              </Collapse>
                              <Button
                                   colorScheme="black"
                                   w="150px"
                                   h="60px"
                                   onClick={() => setOpenTabThreeChange()}
                              >
                                   Resources
                                   {!openTabThree ? (
                                        <ChevronDownIcon m={2} w={6} h={6} />
                                   ) : (
                                        <ChevronUpIcon w={6} m="10px" h={6} />
                                   )}
                              </Button>

                              <Collapse in={openTabThree} zIndex={"100"}>
                                   <Box
                                        bg="#FFFFFF"
                                        w="85%"
                                        position="absolute"
                                        top="130px"
                                        left="100px"
                                        h="50vh"
                                        zIndex={"1000"}
                                   >
                                        <Flex
                                             flexDirection="row"
                                             alignItems="center"
                                             justifyContent="space-around"
                                             mt="20px"
                                             zIndex="1000"
                                        >
                                             <Box
                                                  w="350px"
                                                  h="350px"
                                                  mt={10}
                                                  display={"flex"}
                                                  flexDirection="column"
                                                  gap={5}
                                             >
                                                  <Stack>
                                                       <Heading
                                                            borderBottom={
                                                                 "2px solid #ccc"
                                                            }
                                                            fontSize={20}
                                                       >
                                                            Learn
                                                       </Heading>
                                                  </Stack>
                                                  <Box
                                                       display={"flex"}
                                                       alignItems="center"
                                                  >
                                                       <Image
                                                            width={10}
                                                            src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/blog-icon.png"
                                                       />
                                                       <Text
                                                            fontSize={18}
                                                            fontWeight="medium"
                                                       >
                                                            Blog
                                                       </Text>
                                                  </Box>
                                                  <Box
                                                       display={"flex"}
                                                       alignItems="center"
                                                  >
                                                       <Image
                                                            width={10}
                                                            src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/stories-icon.png"
                                                       />
                                                       <Text
                                                            fontSize={18}
                                                            fontWeight="medium"
                                                       >
                                                            Customer stories
                                                       </Text>
                                                  </Box>
                                                  <Box
                                                       display={"flex"}
                                                       alignItems="center"
                                                  >
                                                       <Image
                                                            width={10}
                                                            src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/resources-icon.png"
                                                       />
                                                       <Text
                                                            fontSize={18}
                                                            fontWeight="medium"
                                                       >
                                                            Resource center
                                                       </Text>
                                                  </Box>
                                                  <Box
                                                       display={"flex"}
                                                       alignItems="center"
                                                  >
                                                       <Image
                                                            width={10}
                                                            src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/courses-guides-icon.png"
                                                       />
                                                       <Text
                                                            fontSize={18}
                                                            fontWeight="medium"
                                                       >
                                                            Guides
                                                       </Text>
                                                  </Box>
                                                  <Box
                                                       display={"flex"}
                                                       alignItems="center"
                                                  >
                                                       <Image
                                                            width={10}
                                                            src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/download-icon.png"
                                                       />
                                                       <Text
                                                            fontSize={18}
                                                            fontWeight="medium"
                                                       >
                                                            App download
                                                       </Text>
                                                  </Box>
                                                  <Box
                                                       display={"flex"}
                                                       alignItems="center"
                                                  >
                                                       <Image
                                                            width={10}
                                                            src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/stories-icon.png"
                                                       />
                                                       <Text
                                                            fontSize={18}
                                                            fontWeight="medium"
                                                       >
                                                            Support
                                                       </Text>
                                                  </Box>
                                             </Box>
                                             <Box w="500px" h="400px">
                                                  <Box
                                                       w="350px"
                                                       h="350px"
                                                       mt={10}
                                                       display={"flex"}
                                                       flexDirection="column"
                                                       gap={5}
                                                  >
                                                       <Stack>
                                                            <Heading
                                                                 fontSize={20}
                                                                 borderBottom={
                                                                      "2px solid #ccc"
                                                                 }
                                                            >
                                                                 Connect
                                                            </Heading>
                                                       </Stack>
                                                       <Box
                                                            display={"flex"}
                                                            alignItems="center"
                                                       >
                                                            <Image
                                                                 width={10}
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/events-icon.png"
                                                            />
                                                            <Text
                                                                 fontSize={18}
                                                                 fontWeight="medium"
                                                            >
                                                                 Event
                                                            </Text>
                                                       </Box>
                                                       <Box
                                                            display={"flex"}
                                                            alignItems="center"
                                                       >
                                                            <Image
                                                                 width={10}
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/webinars-icon.png"
                                                            />
                                                            <Text
                                                                 fontSize={18}
                                                                 fontWeight="medium"
                                                            >
                                                                 Webinars
                                                            </Text>
                                                       </Box>
                                                       <Box
                                                            display={"flex"}
                                                            alignItems="center"
                                                       >
                                                            <Image
                                                                 width={10}
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/podcast-icon-1.png"
                                                            />
                                                            <Text
                                                                 fontSize={18}
                                                                 fontWeight="medium"
                                                            >
                                                                 All Hands on
                                                                 Tech podcast
                                                            </Text>
                                                       </Box>
                                                       <Box
                                                            display={"flex"}
                                                            alignItems="center"
                                                       >
                                                            <Image
                                                                 width={10}
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-icons/podcast-icon-2.png"
                                                            />
                                                            <Text
                                                                 fontSize={18}
                                                                 fontWeight="medium"
                                                            >
                                                                 Perspectives in
                                                                 Leadership
                                                                 podcast
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                             </Box>
                                             <Box w="500px" h="400px">
                                                  <Box
                                                       w="350px"
                                                       h="350px"
                                                       mt={10}
                                                       display={"flex"}
                                                       flexDirection="column"
                                                       gap={5}
                                                  >
                                                       <Stack>
                                                            <Heading
                                                                 fontSize={20}
                                                                 borderBottom={
                                                                      "2px solid #ccc"
                                                                 }
                                                            >
                                                                 Featured
                                                            </Heading>
                                                       </Stack>
                                                       <Box
                                                            display={"flex"}
                                                            alignItems="center"
                                                            width={600}
                                                       >
                                                            <Image
                                                                 width={"450px"}
                                                                 src="https://www.pluralsight.com/content/dam/ps-nav-assets/feature-images/feature-state-of-upskilling.webp"
                                                            />
                                                       </Box>
                                                     
                                                       <Heading
                                                            fontSize={18}
                                                            fontWeight="bold"
                                                            color={"black"}
                                                       >
                                                            State of Upskilling
                                                            Report 2022
                                                       </Heading>
                                                       <Text
                                                            fontSize={18}
                                                            fontWeight="medium"
                                                       >
                                                            Dive into the data
                                                            pool with the 2022
                                                            State of Upskilling
                                                       </Text>
                                                      
                                                  </Box>
                                             </Box>
                                        </Flex>
                                   </Box>
                              </Collapse>
                              <Button colorScheme="black" w="150px" h="60px">
                                   For individuals
                              </Button>
                         </Flex>
                    </Box>
                    <Spacer />
                    <Box>
                         <Flex gap={10} marginRight="10px" alignItems="center">
                              <Search2Icon
                                   onClick={handleClick}
                                   color="white"
                              />
                              <Button
                                   colorScheme="teal"
                                   variant="outline"
                                   color="white"
                                   w="150px"
                                   h="60px"
                              >
                                   Contact Sales
                              </Button>
                              <Button
                                   color="white"
                                   bg="#EF3E48"
                                   w="150px"
                                   h="60px"
                              >
                                   View Plans
                              </Button>
                         </Flex>
                    </Box>
               </HStack>
          </>
     );
};

export default Header;
