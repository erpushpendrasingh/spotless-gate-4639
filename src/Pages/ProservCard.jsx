import {
     Box,
     Button,
     Flex,
     Heading,
     HStack,
     Text,
     Image,
} from "@chakra-ui/react";

function Feature({ title, desc, btnText, btnText_I, imgl, ...rest }) {
     return (
          <Box
               m="50px auto"
               p={10}
               h="290px"
               w="750px"
               shadow="md"
               borderWidth="1px"
               {...rest}
          >
               <Box>
                    <Image src={imgl} alt="imgl" />
                    <Text mt={10}>{desc}</Text>
               </Box>

               <Box w={400} mt={8}>
                    <Flex
                         p={2}
                         direction="row"
                         gap={10}
                         justifyContent="space-between"
                    >
                         <Button color="white" h="55px" w="200px" bg="#EE364F">
                              <Box bg="">{btnText}</Box>
                         </Button>
                         <Button color="white" h="55px" w="200px" bg="#EE364F">
                              {btnText_I}
                         </Button>
                    </Flex>
               </Box>
          </Box>
     );
}

function StackEx() {
     return (
          <HStack spacing={8}>
               <Feature
                    imgl="https://i.postimg.cc/xTZBDMjL/proserv-logo.png"
                    desc="Get more out of Skills and Flow. Customize your team’s learning experiences and drive your most important initiatives forward with our Professional Services."
                    btnText="ProServ for Skills"
                    btnText_I="ProServ for Flow"
               />
          </HStack>
     );
}

// render(<StackEx />);
export default StackEx;
