import {
  Box,
  Image,
  Badge,
  Text,
  Button,
  Flex,
  Stack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
const ProductsCard = () => {
  const property = {
    imageUrl: "https://i.postimg.cc/vTvLp5Yd/product-skills-1.png",
    imageAlt: "Rear view of modern home with pool",
    imageUrl_I: "https://i.postimg.cc/QMt6r4wx/logo-skills-black.png",
    imageAlt_I: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title:
      "Empower yourself or your team to develop the skills critical to delivering on your career goals and initiatives with our tech skills platform.",
    viewAllCourses: "View all courses",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box h="180vh" bg="#F8F8F8" display={"flex"} flexDirection="column">
      <Box w="500px" margin={"50px auto"}>
        <Heading fontSize={"54px"} textAlign="center">
          Products
        </Heading>
      </Box>
      <Box
        display={"flex"}
        width={"80%"}
        margin={"0px auto"}
        alignItems="center"
      >
        <Box
          width={"500px"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          margin="10px auto"
          p={8}
          boxShadow={"0px 20px 40px rgb(0 0 0 / 6%)"}
        >
          <Image
            width={600}
            margin="auto"
            src={property.imageUrl}
            alt={property.imageAlt}
          />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="1">
                <Image src={property.imageUrl_I} alt={property.imageAlt_I} />
              </Badge>
            </Box>

            <Text mt="10" as="h4" lineHeight="tight" fontSize={20}>
              {property.title}
            </Text>
            <Box>
              <Stack gap="10px" mt="10">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
              <Stack gap="10px" mt="4">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
              <Stack gap="10px" mt="4">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
              <Stack gap="5px" mt="4">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
            </Box>
            <Box>
              <Button bg="#EE394C" w="160px" h="55px" mt={5} colorScheme="blue">
                Explore Skills
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          margin="100px auto"
          p={8}
          boxShadow={"0px 20px 40px rgb(0 0 0 / 6%)"}
          width={"500px"}
        >
          <Image
            width={600}
            margin="auto"
            src={property.imageUrl}
            alt={property.imageAlt}
          />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="1">
                <Image src={property.imageUrl_I} alt={property.imageAlt_I} />
              </Badge>
            </Box>

            <Text
              mt="10"
              // fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              fontSize={20}
              // noOfLines={1}
            >
              {property.title}
            </Text>
            <Box>
              <Stack gap="10px" mt="10">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
              <Stack gap="10px" mt="4">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
              <Stack gap="10px" mt="4">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
              <Stack gap="5px" mt="4">
                <Flex direction={"row"}>
                  <Box
                    h={12}
                    border="1px"
                    borderColor="#ccc"
                    w={600}
                    colorScheme="black"
                    variant="ghost"
                    textAlign="start"
                    alignItems={"center"}
                    p={2}
                  >
                    {property.viewAllCourses}
                  </Box>
                  <Box>{<ChevronRightIcon />}</Box>
                </Flex>
              </Stack>
            </Box>
            <Box>
              <Button bg="#EE394C" w="160px" h="55px" mt={5} colorScheme="blue">
                Explore Skills
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsCard;

{
  /* <Box
     maxW="500"
     borderWidth="1px"
     s
     borderRadius="lg"
     overflow="hidden"
     margin="50px auto"
     p={8}
>
     <Image
          src={property.imageUrl}
          alt={property.imageAlt}
     />

     <Box p="6">
          <Box display="flex" alignItems="baseline">
               <Badge borderRadius="full" px="1">
                    <Image
                         src={property.imageUrl_I}
                         alt={property.imageAlt_I}
                    />
               </Badge>
          </Box>

          <Text
               mt="10"
               // fontWeight="semibold"
               as="h4"
               lineHeight="tight"
               fontSize={20}
               // noOfLines={1}
          >
               {property.title}
          </Text>
          <Box>
               <Stack gap="10px" mt="10">
                    <Flex direction={"row"}>
                         <Box
                              h={12}
                              border="1px"
                              borderColor="#ccc"
                              w={400}
                              colorScheme="black"
                              variant="ghost"
                              textAlign="start"
                              alignItems={"center"}
                              p={2}
                         >
                              {property.viewAllCourses}
                         </Box>
                         <Box>{<ChevronRightIcon />}</Box>
                    </Flex>
               </Stack>
               <Stack gap="10px" mt="4">
                    <Flex direction={"row"}>
                         <Box
                              h={12}
                              border="1px"
                              borderColor="#ccc"
                              w={400}
                              colorScheme="black"
                              variant="ghost"
                              textAlign="start"
                              alignItems={"center"}
                              p={2}
                         >
                              {property.viewAllCourses}
                         </Box>
                         <Box>{<ChevronRightIcon />}</Box>
                    </Flex>
               </Stack>
               <Stack gap="10px" mt="4">
                    <Flex direction={"row"}>
                         <Box
                              h={12}
                              border="1px"
                              borderColor="#ccc"
                              w={400}
                              colorScheme="black"
                              variant="ghost"
                              textAlign="start"
                              alignItems={"center"}
                              p={2}
                         >
                              {property.viewAllCourses}
                         </Box>
                         <Box>{<ChevronRightIcon />}</Box>
                    </Flex>
               </Stack>
               <Stack gap="5px" mt="4">
                    <Flex direction={"row"}>
                         <Box
                              h={12}
                              border="1px"
                              borderColor="#ccc"
                              w={400}
                              colorScheme="black"
                              variant="ghost"
                              textAlign="start"
                              alignItems={"center"}
                              p={2}
                         >
                              {property.viewAllCourses}
                         </Box>
                         <Box>{<ChevronRightIcon />}</Box>
                    </Flex>
               </Stack>
          </Box>
          <Box>
               <Button
                    bg="#EE394C"
                    w="160px"
                    h="55px"
                    mt={5}
                    colorScheme="blue"
               >
                    Explore Skills
               </Button>
          </Box>
     </Box>
</Box> */
}
