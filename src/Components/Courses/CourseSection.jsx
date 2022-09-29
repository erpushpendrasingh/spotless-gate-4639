import {
     ChevronDownIcon,
     Search2Icon,
     SearchIcon,
     UpDownIcon,
} from "@chakra-ui/icons";
import {
     Box,
     Button,
     ButtonGroup,
     Flex,
     Heading,
     Input,
     Spacer,
     Text,
     Tag,
     TagLabel,
     Stack,
     VStack,
     HStack,
     FormControl,
     FormLabel,
     FormHelperText,
     IconButton,
     MenuButton,
     Menu,
     MenuList,
     MenuItem,
} from "@chakra-ui/react";
import React from "react";

const CourseSection = () => {
     return (
          <VStack bg={"blackAlpha.900"}>
               {/* <Flex w="70%" margin={"auto"} alignItems="center" gap="5"> */}
               <Box py="100">
                    <VStack gap={2}>
                         <FormControl alignItems={"center"}>
                              <FormLabel
                                   fontSize={20}
                                   fontWeight={"bold"}
                                   color={"white"}
                              >
                                   Search
                              </FormLabel>
                              <Input
                                   placeholder="Search"
                                   h="50px"
                                   w="900px"
                                   borderRadius={"none"}
                                   type="email"
                              />
                              <IconButton
                                   h="53px"
                                   w="50px"
                                   borderRadius={"none"}
                                   aria-label="Search database"
                                   icon={<SearchIcon />}
                              />

                              {/* <Button
                                   h={"55"}
                                   colorScheme="teal"
                                   variant="outline"
                                   py={5}
                              >
                                   Sort by <UpDownIcon />
                              </Button> */}
                              <Menu>
                                   {({ isOpen }) => (
                                        <>
                                             <MenuButton
                                                  h={50}
                                                  bg={"black"}
                                                  isActive={isOpen}
                                                  as={Button}
                                                  color="red"
                                                  border={"1px solid red"}
                                                  rightIcon={
                                                       <ChevronDownIcon />
                                                  }
                                             >
                                                  {isOpen ? "Close" : "Sort by"}
                                             </MenuButton>
                                             <MenuList>
                                                  <MenuItem>
                                                       Highest rated
                                                  </MenuItem>
                                                  <MenuItem
                                                       onClick={() =>
                                                            alert("Kagebunshin")
                                                       }
                                                  >
                                                       Newest
                                                  </MenuItem>
                                                  <MenuItem
                                                       onClick={() =>
                                                            alert("Kagebunshin")
                                                       }
                                                  >
                                                       Course A→Z
                                                  </MenuItem>
                                                  <MenuItem
                                                       onClick={() =>
                                                            alert("Kagebunshin")
                                                       }
                                                  >
                                                       Course Z←A
                                                  </MenuItem>
                                             </MenuList>
                                        </>
                                   )}
                              </Menu>
                         </FormControl>
                    </VStack>
               </Box>
               {/* </Flex> */}
          </VStack>
     );
};

export default CourseSection;
