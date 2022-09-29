import { Box, Flex, VStack, Image, Stack, Heading } from "@chakra-ui/react";
function BackdropFilters() {
     const outerBoxStyles = {
          boxSize: "100%",
          p: "10",
          h: "300px",
          background:
               "url(https://i.postimg.cc/yN1cwhBP/enimation.png) center/cover no-repeat",
          url: "https://i.postimg.cc/Fs2m8XdZ/logo-skills-black.png",
     };

     return (
          <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
               {/* adding backdrop-filter property to the element */}
               <Box height={600} sx={outerBoxStyles}>
                    <Box color={"white"}>
                         <VStack>
                              <Stack mt={50}>
                                   <Image
                                        bg={"white"}
                                        src={outerBoxStyles.url}
                                   />
                              </Stack>
                              <Stack w={"600px"}>
                                   <Heading>
                                        Thousands of courses authored by our
                                        network of industry experts
                                   </Heading>
                              </Stack>
                         </VStack>
                    </Box>
               </Box>
          </Flex>
     );
}
export default BackdropFilters;
