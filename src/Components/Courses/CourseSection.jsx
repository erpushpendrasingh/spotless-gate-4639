import {
     ChevronDownIcon,
     Search2Icon,
     SearchIcon,
     UpDownIcon,
} from "@chakra-ui/icons";
import {
     Box,
     Button,
     Input,
     VStack,
     HStack,
     FormControl,
     FormLabel,
     FormHelperText,
     IconButton,
     MenuButton,
     Menu,
     MenuList,
     Text,
     MenuOptionGroup,
     MenuItemOption,
     MenuDivider,
     Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaSort } from "react-icons/fa";

const CourseSection = ({ setOrderby, searchItems }) => {
     return (
          <VStack bg={"blackAlpha.900"}>
               <Box w="90%" py="100">
                    <VStack
                         display={"flex"}
                         alignItems="center"
                         // flexDirection={"row"}
                    >
                         <FormControl
                              display={"flex"}
                              alignItems={"center"}
                              w="90%"
                         >
                              <FormLabel
                                   fontSize={20}
                                   fontWeight={"bold"}
                                   color={"white"}
                              >
                                   Search
                              </FormLabel>
                              <Input
                                   color={"white"}
                                   fontSize="26px"
                                   bg="#363638"
                                   placeholder="Search"
                                   h="80px"
                                   w="85%"
                                   border={"none"}
                                   type="email"
                                   borderRadius={"none"}
                                   onChange={(e) => {
                                        searchItems(e.target.value);
                                   }}
                              />
                              <IconButton
                                   h="80px"
                                   w="50px"
                                   borderRadius={"none"}
                                   aria-label="Search database"
                                   icon={<SearchIcon />}
                                   bg="#363638"
                                   color="white"
                                   fontSize={28}
                                   marginBottom="5px"
                                   onClick={(e) => searchItems(e)}
                              />

                              <Menu
                                   border={"1px solid red"}
                                   closeOnSelect={false}
                              >
                                   <MenuButton
                                        display={"flex"}
                                        height="80px"
                                        as={Button}
                                        w={"190px"}
                                        alignItems="center"
                                        bg="black"
                                        color={"white"}
                                        margin="0px 25px"
                                        variant="outline"
                                        type="radio"
                                   >
                                        <Text as={Heading}>
                                             {" "}
                                             {" Sort by "}{" "}
                                        </Text>
                                   </MenuButton>
                                   <MenuList
                                        minWidth="240px"
                                        bg={"#222222"}
                                        color="#fff"
                                   >
                                        <MenuOptionGroup>
                                             <MenuItemOption
                                                  value="asc"
                                                  onClick={() =>
                                                       setOrderby("asc")
                                                  }
                                             >
                                                  Newest
                                             </MenuItemOption>
                                             <MenuItemOption
                                                  value="desc"
                                                  onClick={() =>
                                                       setOrderby("desc")
                                                  }
                                             >
                                                  Higest Rated
                                             </MenuItemOption>
                                             <MenuItemOption>
                                                  Course A → Z
                                             </MenuItemOption>
                                             <MenuItemOption>
                                                  Course Z ← A
                                             </MenuItemOption>
                                        </MenuOptionGroup>
                                   </MenuList>
                              </Menu>
                              {/* <Menu closeOnSelect={false}>
                                   <MenuButton as={Button} colorScheme="blue">
                                        MenuItem
                                   </MenuButton>
                                   <MenuList minWidth="240px">
                                        <MenuOptionGroup
                                             defaultValue="asc"
                                             title="Order"
                                             type="radio"
                                        >
                                             <MenuItemOption
                                                  value="asc"
                                                  onClick={() =>
                                                       setOrderby("asc")
                                                  }
                                             >
                                                  Ascending
                                             </MenuItemOption>
                                             <MenuItemOption value="desc">
                                                  Descending
                                             </MenuItemOption>
                                        </MenuOptionGroup>
                                        <MenuDivider />
                                        <MenuOptionGroup
                                             title="Country"
                                             type="checkbox"
                                        >
                                             <MenuItemOption value="email">
                                                  Email
                                             </MenuItemOption>
                                             <MenuItemOption value="phone">
                                                  Phone
                                             </MenuItemOption>
                                             <MenuItemOption value="country">
                                                  Country
                                             </MenuItemOption>
                                        </MenuOptionGroup>
                                   </MenuList>
                              </Menu> */}
                         </FormControl>
                    </VStack>
               </Box>
               {/* </Flex> */}
          </VStack>
     );
};

export default CourseSection;
