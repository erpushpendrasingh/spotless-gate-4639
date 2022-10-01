import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { MdOutlineWatchLater, MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router-dom";
function AirbnbCard({ data }) {
  const { author, duration, level, rating, rating_count, title } = data;

  return (
    <Box
      w="90%"
      borderBottom={"1px solid #ccc"}
      overflow="hidden"
      fontSize={"18px"}
      margin="15px 0px"
      bg="#181818"
      h="120px"
      color={"white"}
    >
      <Box>
        <Box
          mt="1"
          fontWeight="bold"
          lineHeight="tight"
          fontSize={"20px"}
          noOfLines={1}
        >
          <Link to="/detailsPage">{title}</Link>
        </Box>

        <Box>{`By ${author}`}</Box>

        <Box display="flex" mt="2" gap={5} alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            width={"100px"}
            justifyContent={"space-between"}
            color="#ccc"
            fontSize="sm"
          >
            {duration} <MdOutlineWatchLater />
          </Box>
          <Box
            width={"100px"}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            color="#ccc"
            fontSize="sm"
          >
            {level} <MdSignalCellularAlt />
          </Box>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Box as="span" color="gray.600" fontSize="sm" w={"1px"}>
                <StarIcon key={i} color={i < rating ? "#ffb600" : "gray.300"} />
              </Box>
            ))}
          <Box color="gray.600" fontSize="sm">
            ( {rating_count} )
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default AirbnbCard;
