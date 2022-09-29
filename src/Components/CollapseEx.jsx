import { Box, Button, Collapse, Flex, useDisclosure } from "@chakra-ui/react";

function CollapseEx() {
     const { isOpen, onToggle } = useDisclosure();

     return (
          <>
               <Button onClick={onToggle}>Click Me</Button>
               <Collapse in={isOpen} animateOpacity>
                    <Box
                         p="40px"
                         color="white"
                         bg="teal.500"
                         rounded="md"
                         shadow="md"
                         mt="410px"
                         w="900px"
                    >
                         <Flex>
                              <Box w="200px">
                                   <Button maxW="200px" bg="white"></Button>
                              </Box>
                              <Box w="200px">
                                   <Button maxW="200px" bg="white"></Button>
                              </Box>
                              <Box w="200px" h="250px">
                                   <Button maxW="200px" bg="white"></Button>
                              </Box>
                         </Flex>
                    </Box>
               </Collapse>
          </>
     );
}
export default CollapseEx;
