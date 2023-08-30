import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Box,
  Image,
  Text,
  Stack,
  Tag,
  Center,
  Wrap,
  Grid,
  List,
  ListItem,
  Tooltip,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, clickFn }) => {
  const Nutrients = [
    recipe.totalNutrients.ENERC_KCAL,
    recipe.totalNutrients.FAT,
    recipe.totalNutrients.CHOCDF,
    recipe.totalNutrients.PROCNT,
    recipe.totalNutrients.CHOLE,
    recipe.totalNutrients.NA,
  ];

  return (
    <Center bg="blue.500" h="max">
      <Card
        mt={["20px", "50px"]}
        mb={["20px", "50px"]}
        width={["80%", "60%"]}
        boxShadow="2xl"
        bg="white"
        cursor={"pointer"}
      >
        <CardHeader>
          <Tooltip label="Return to homepage">
            <Button
              borderRadius={"30%"}
              bg="white"
              w="40px"
              h="40px"
              p={2}
              margin={2}
              _hover={{ backgroundColor: "blue.300" }}
              onClick={() => clickFn()}
            >
              <ArrowLeftIcon />
            </Button>
          </Tooltip>
        </CardHeader>
        <CardBody>
          <Center>
            <Box w="100%">
              <Image
                src={recipe.image}
                objectFit={"cover"}
                height={500}
                width={"100%"}
              />
            </Box>
          </Center>
          <Grid gridTemplateColumns={["1fr", "3fr 2fr"]}>
            <Stack mt={[1, 6]} spacing="3">
              <Text
                color="black"
                fontSize="xs"
                textTransform={"uppercase"}
                fontWeight={"semibold"}
              >
                {recipe.mealType.length > 1
                  ? recipe.mealType.join("/")
                  : recipe.mealType}{" "}
              </Text>
              <Text
                fontSize={["l", "xl"]}
                color="black"
                fontWeight={"bold"}
                pb={3}
              >
                {recipe.label}
              </Text>
              <Stack direction="row">
                <Text fontSize={"sm"}>
                  Total cooking time: {recipe.totalTime} minutes
                </Text>
              </Stack>
              <Stack direction="row">
                <Text fontSize={"sm"}>Servings: {recipe.yield}</Text>
              </Stack>
              <Text fontWeight={"bold"} pt={3} color="black">
                Ingredients:
              </Text>
              <List>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <ListItem key={ingredient.text} fontSize={["xs", "sm"]}>
                      {ingredient.text}
                    </ListItem>
                  );
                })}
              </List>
            </Stack>
            <Stack mt="6" spacing="3">
              <Text fontWeight={"semibold"} pt={3} color="black">
                {recipe.healthLabels.length >= 1 ? "Health labels:" : ""}
              </Text>
              <Wrap>
                {recipe.healthLabels.map((label) => {
                  return (
                    <Tag
                      key={label}
                      size={"sm"}
                      maxBlockSize={2}
                      bg="purple.100"
                      m={2}
                      textAlign={"center"}
                      color="purple.600"
                      fontWeight={"semibold"}
                      py={1}
                      textTransform={"uppercase"}
                    >
                      {label}
                    </Tag>
                  );
                })}
              </Wrap>
              <Text fontWeight={"semibold"} pt={3} color="black">
                {recipe.dietLabels.length >= 1 ? "Diet:" : ""}
              </Text>
              <Wrap>
                {recipe.dietLabels.map((label) => {
                  return (
                    <Tag
                      key={label}
                      size={"sm"}
                      maxBlockSize={2}
                      bg="green.100"
                      textAlign={"center"}
                      color="green.600"
                      fontWeight={"semibold"}
                      py={1}
                      textTransform={"uppercase"}
                    >
                      {label}
                    </Tag>
                  );
                })}
              </Wrap>
              <Stack direction="row">
                <Text fontWeight={"semibold"} pt={3} color="black">
                  {recipe.cautions.length >= 1 ? "Cautions:" : ""}
                </Text>
              </Stack>
              <Wrap>
                {recipe.cautions.map((warning) => {
                  return (
                    <Tag
                      key={warning}
                      size={"sm"}
                      bg="red.100"
                      textAlign={"center"}
                      color="red.600"
                      fontWeight={"bold"}
                      py={1}
                      textTransform={"uppercase"}
                      wrap={"wrap"}
                    >
                      {warning}
                    </Tag>
                  );
                })}
              </Wrap>
              <Text fontWeight={"bold"} pt={3} color="black">
                Total nutrients:
              </Text>
              <Stack direction={["column", "row"]} gap={[1, 5]}>
                {Nutrients.map((nutri) => {
                  return (
                    <Stack
                      direction="column"
                      key={nutri.label}
                      p={1}
                      fontSize={["xs", "sm"]}
                      textAlign={"center"}
                    >
                      <Text mb={-2}>
                        {Math.round(nutri.quantity)} {nutri.unit}
                      </Text>
                      <Text
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        fontSize={"xs"}
                      >
                        {nutri.label}
                      </Text>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
        </CardBody>
      </Card>
    </Center>
  );
};
