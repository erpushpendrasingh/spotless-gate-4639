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

const CourseSection = ({ setOrderby, searchItems }) => {
  return (
    <VStack bg={"blackAlpha.900"}>
      <Box w="90%" py="100">
        <VStack display={"flex"} alignItems="center">
          <FormControl display={"flex"} alignItems={"center"} w="90%">
            <Box width={"100%"}>
              <FormLabel
                textAlign={"start"}
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
                h="60px"
                w="95%"
                border={"none"}
                type="email"
                borderRadius={"none"}
                onChange={(e) => {
                  searchItems(e.target.value);
                }}
              />
              <IconButton
                h="60px"
                w="50px"
                borderRadius={"none"}
                aria-label="Search database"
                icon={<SearchIcon />}
                bg="#363638"
                color="white"
                fontSize={28}
                marginBottom="14px"
                onClick={(e) => searchItems(e)}
              />
            </Box>
            <Menu border={"1px solid red"} closeOnSelect={false}>
              <MenuButton
                display={"flex"}
                height="60px"
                w={"190px"}
                alignItems="center"
                bg="black"
                color={"white"}
                margin="0px 25px"
                marginTop={"22px"}
                variant="outline"
                type="radio"
              >
                <Text fontSize={"18px"}>{"Sort by"}</Text>
              </MenuButton>
              <MenuList minWidth="240px" bg={"#222222"} color="#fff">
                <MenuOptionGroup>
                  <MenuItemOption value="asc" onClick={() => setOrderby("asc")}>
                    Newest
                  </MenuItemOption>
                  <MenuItemOption
                    value="desc"
                    onClick={() => setOrderby("desc")}
                  >
                    Higest Rated
                  </MenuItemOption>
                  <MenuItemOption>Course A → Z</MenuItemOption>
                  <MenuItemOption>Course Z ← A</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </FormControl>
        </VStack>
      </Box>
    </VStack>
  );
};

export default CourseSection;
