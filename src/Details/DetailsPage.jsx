import { StarIcon } from "@chakra-ui/icons";
import {
     Box,
     Button,
     Heading,
     Text,
     VStack,
     Image,
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineWatchLater, MdSignalCellularAlt } from "react-icons/md";
import { FcBullish, IconName } from "react-icons/fc";
const DetailsPage = () => {
     const property = {
          imageUrl: "https://bit.ly/2Z4KKcF",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Course info",
          formattedPrice: "Rating",
          reviewCount: 34,
          rating: 4,
          im: "Intermediate",
          time: new Date().getHours(),
          min: new Date().getMinutes(),
          date: new Date().toString(),
          // month: new Date().getMonth(),
     };
     return (
          <VStack
               display="flex"
               // border="1px solid red"
               w="550px"
               m="50px auto"
               alignItems={"left"}
               p="10"
               bg={"#181818"}
          >
               <Box pz="2" m={"auto"} bg="#222222" color={"white"}>
                    <Heading textAlign={"left"} mt={5}>
                         Try for free
                    </Heading>
                    <Text mt="2">
                         Get this course plus top-rated picks in tech skills and
                         other popular topics.
                    </Text>
                    <Button
                         borderRadius={"none"}
                         h="50"
                         bg={"#EE364F"}
                         width={400}
                         mt="5"
                         colorScheme="#EF542E"
                    >
                         GET STARTED
                    </Button>
                    <Text pb={10} mt={5} textAlign={"center"}>
                         ₹ 1,499 per month after 10 day trial
                    </Text>
               </Box>
               <Box p="1" m={"auto"} bg="#222222" color={"white"}>
                    <Text fontWeight={"bold"} mt="2">
                         Your 10 day Standard free trial includes
                    </Text>
                    <Box mt={"5"} display={"flex"} alignItems="center" gap={5}>
                         <Image src="https://i.postimg.cc/66cWwsKX/courses-icon.png" />
                         <Text fontWeight={"bold"}>Expert-led courses</Text>
                    </Box>
                    <Text pb={10} mt={5} textAlign={"center"}>
                         Keep up with the pace of change with thousands of
                         expert-led, in-depth courses.
                    </Text>
               </Box>
               <Box pz="2" m={"auto"} bg="#222222" color={"white"}>
                    <Text fontSize={25} textAlign={"left"} mt={5}>
                         For teams
                    </Text>
                    <Text mt="2">
                         Give up to 10 users access to our full library
                         including this course free for 14 days
                    </Text>
               </Box>
               <Box
                    m="100px auto"
                    maxW="600px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    fontSize={25}
                    bg="black"
                    h="300px"
                    p="3"
                    color={"white"}
               >
                    <Box p="6">
                         <Box
                              mt="1"
                              fontWeight="semibold"
                              as="h4"
                              lineHeight="tight"
                              noOfLines={1}
                         >
                              {property.title}
                         </Box>

                         <Box
                              // border={"1px solid red"}
                              display="flex"
                              alignItems={"center"}
                              justifyContent="space-between"
                              mt={5}
                         >
                              {property.formattedPrice}{" "}
                              <Box
                                   display={"flex"}
                                   width="40%"
                                   justifyContent={"space-between"}
                              >
                                   {Array(5)
                                        .fill("")
                                        .map((_, i) => (
                                             <Box
                                                  as="span"
                                                  color="gray.600"
                                                  fontSize="sm"
                                                  w={"1px"}
                                             >
                                                  <StarIcon
                                                       key={i}
                                                       color={
                                                            i < property.date
                                                                 ? "#ffb600"
                                                                 : "gray.300"
                                                       }
                                                  />
                                             </Box>
                                        ))}
                                   <Box color="#ccc" fontSize="sm">
                                        ( {property.reviewCount} )
                                   </Box>
                              </Box>
                         </Box>
                         <Box
                              // border={"1px solid red"}
                              display="flex"
                              alignItems={"center"}
                              justifyContent="space-between"
                         >
                              <Text>Level</Text>
                              <Text
                                   display={"flex"}
                                   alignItems="center"
                                   gap={5}
                                   fontSize={"lg"}
                              >
                                   Advanced <FcBullish />
                              </Text>
                         </Box>
                         <Box
                              // border={"1px solid red"}
                              display="flex"
                              alignItems={"center"}
                              justifyContent="space-between"
                         >
                              <Text>Updated</Text>
                              <Text
                                   display={"flex"}
                                   alignItems="center"
                                   gap={5}
                                   fontSize={"lg"}
                              >
                                   {}
                              </Text>
                         </Box>
                    </Box>
               </Box>
          </VStack>
     );
};

export default DetailsPage;
//  <Box display="flex" mt="2" gap={5} alignItems="center">
//       <Box
//            display="flex"
//            alignItems="center"
//            justifyContent={"space-between"}
//            w="60px"
//            color="#ccc"
//            fontSize="sm"
//       >
//            {property.time}h{property.min}m <MdOutlineWatchLater />
//       </Box>
//       <Box
//            width={"100px"}
//            display="flex"
//            justifyContent={"space-between"}
//            alignItems={"center"}
//            color="#ccc"
//            fontSize="sm"
//       >
//            {property.im} <MdSignalCellularAlt />
//       </Box>
//
//  </Box>;
