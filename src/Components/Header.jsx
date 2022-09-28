import {
     Box,
     Button,
     Divider,
     Flex,
     HStack,
     Image,
     Input,
     Spacer,
     Stack,
} from "@chakra-ui/react";
import React from "react";
import {
     PhoneIcon,
     AddIcon,
     WarningIcon,
     Search2Icon,
     ChevronDownIcon,
     ChevronUpIcon,
} from "@chakra-ui/icons";
import BrandImg from "./brand.png";
import CollapseEx from "./CollapseEx";
import { Link } from "react-router-dom";

const Header = () => {
     const handleClick = () => {
          alert("hello");
     };
     return (
          <>
               <HStack
                    bg="#2B2B2B"
                    h="80px"
                    margin="50px auto"
                    w="100%"
                    border="1px solid red"
                    px="50px"
               >
                    <Box>
                         <Flex gap={10} alignItems="center">
                              <Image
                                   w="220px"
                                   h="50px"
                                   src={BrandImg}
                                   alt="brandImg"
                              />
                              {/* <Button colorScheme="black" w="100px" h="60px">
                                   Products <ChevronDownIcon />
                              </Button> */}
                              <CollapseEx />
                              <Button colorScheme="black" h="60px">
                                   Solutions <ChevronDownIcon />
                              </Button>
                              <Button colorScheme="black" w="100px" h="60px">
                                   Resources
                              </Button>
                              <Button colorScheme="black" w="100px" h="60px">
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
