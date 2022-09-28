import {
     Box,
     Heading,
     Text,
     HStack,
     Image,
     Grid,
     GridItem,
     VStack,
     Flex,
     Button,
} from "@chakra-ui/react";

function Feature({
     image,
     textOne,
     desc2,
     desc3,
     DeutscheImg,
     title,
     desc,
     ...rest
}) {
     return (
          <VStack
               display="flex"
               flexDirection="row"
               bg="#FFFFFF"
               w="80%"
               margin="100px auto"
               py={10}
               maxH={"xl"}
          >
               <Box w="500px" h="420px">
                    <Box m="auto" w="90%">
                         <Box w={270} p={6}>
                              <Image src={DeutscheImg} alt="imgl" />
                         </Box>
                         <Box w={450} p={4}>
                              <Heading
                                   fontSize={40}
                                   fontWeight={"extrabold"}
                                   mt={5}
                              >
                                   {desc2}
                              </Heading>
                         </Box>
                         <Text fontSize={18} mt="50px">
                              {textOne}
                         </Text>
                         <Box mt="10px" p={2} w={350}>
                              <Button
                                   color={"white"}
                                   bg={"#EF3D49"}
                                   width={190}
                                   h={50}
                              >
                                   For non-profits
                              </Button>
                         </Box>
                    </Box>
               </Box>
               <Box>
                    <Image height={900} width={700} src={image} />
               </Box>
          </VStack>
     );
}

function PluralSightOne() {
     return (
          <HStack spacing={8}>
               <Feature
                    title="Plan Money"
                    desc="The future can be even brighter but a goal without a plan is just a wish"
                    DeutscheImg="https://i.postimg.cc/cJnwjP1G/psone-logo.png"
                    desc3="IB Technology Chief Architect and CTO, Deutsche Bank"
                    desc2="See our growth, progress, and evolution"
                    image="https://i.postimg.cc/L50zLZMk/pluralsight-one-collage.webp"
                    textOne="At Pluralsight, we see firsthand every day how technology makes the impossible possible. It’s why Pluralsight One exists: to accelerate our mission of advancing the world’s tech workforce, challenging assumptions about solutions, and creating significant, lasting social impact.

"
               />
          </HStack>
     );
}

export default PluralSightOne;
