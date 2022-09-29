import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, color, Image } from "@chakra-ui/react";
import { FaBeer, FcPositiveDynamic } from "react-icons/fa";
import { MdOutlineWatchLater, MdSignalCellularAlt } from "react-icons/md";
function AirbnbCard() {
     const property = {
          imageUrl: "https://bit.ly/2Z4KKcF",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Risk Assessment and Management",
          formattedPrice: "by kevin Henry",
          reviewCount: 34,
          rating: 4,
          im: "Intermediate",
          time: new Date().getHours(),
          min: new Date().getMinutes(),
     };

     return (
          <Box
               m="100px auto"
               maxW="600px"
               borderWidth="1px"
               borderRadius="lg"
               overflow="hidden"
               fontSize={25}
               bg="black"
               h="200px"
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

                    <Box>{property.formattedPrice}</Box>

                    <Box display="flex" mt="2" gap={5} alignItems="center">
                         <Box
                              display="flex"
                              alignItems="center"
                              justifyContent={"space-between"}
                              w="60px"
                              color="#ccc"
                              fontSize="sm"
                         >
                              {property.time}h{property.min}m{" "}
                              <MdOutlineWatchLater />
                         </Box>
                         <Box
                              width={"100px"}
                              display="flex"
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              color="#ccc"
                              fontSize="sm"
                         >
                              {property.im} <MdSignalCellularAlt />
                         </Box>
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
                                                  i < property.rating
                                                       ? "#ffb600"
                                                       : "gray.300"
                                             }
                                        />
                                   </Box>
                              ))}
                         <Box color="gray.600" fontSize="sm">
                              ( {property.reviewCount} )
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
}
export default AirbnbCard;
