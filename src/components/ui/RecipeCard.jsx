import {
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
  Tag,
  Center,
  Wrap,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Card
      mt={8}
      width={["300px", "340px"]}
      boxShadow="2xl"
      bg="white"
      onClick={() => clickFn(recipe)}
      cursor={"pointer"}
      _hover={{
        opacity: 0.6,
        transform: "scale(.95)",
        filter: "auto",
        blur: "0.5px",
      }}
    >
      <CardBody>
        <Center>
          <Image src={recipe.image} boxSize={"300"} objectFit={"cover"} />
        </Center>
        <Stack mt="4" spacing="2" alignItems={"center"}>
          <Text
            color="black"
            fontSize="xs"
            textTransform={"uppercase"}
            fontStyle={"italic"}
          >
            {recipe.mealType.length > 1
              ? recipe.mealType.join("/")
              : recipe.mealType}{" "}
          </Text>
          <Heading size="md" textAlign={"center"}>
            {recipe.label}
          </Heading>
          <Stack direction={"row"}>
            <Text color="black" fontSize="sm">
              Dish:
            </Text>
            <Text
              color="black"
              fontSize="sm"
              fontWeight={"semibold"}
              textTransform={"capitalize"}
            >
              {" "}
              {recipe.dishType}
            </Text>
          </Stack>
        </Stack>
        <Center mt={3}>
          {recipe.healthLabels.map((label) =>
            label === "Vegan" ? (
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
            ) : (
              label === "Vegetarian" && (
                <Tag
                  key={label}
                  size={"sm"}
                  m={2}
                  bg="purple.100"
                  textAlign={"center"}
                  color="purple.600"
                  fontWeight={"semibold"}
                  py={1}
                  textTransform={"uppercase"}
                >
                  {label}
                </Tag>
              )
            )
          )}
        </Center>
        <Center>
          {recipe.dietLabels.map((label) => (
            <Tag
              key={label}
              size={"sm"}
              m={2}
              bg="green.100"
              textAlign={"center"}
              color="green.600"
              fontWeight={"semibold"}
              py={1}
              textTransform={"uppercase"}
            >
              {label}
            </Tag>
          ))}
        </Center>
        <Center>
          <Stack direction={"row"}>
            <Text color="black" fontSize="sm" m={2}>
              {recipe.cautions.length >= 1 ? "Cautions:" : ""}
            </Text>{" "}
          </Stack>
        </Center>
        <Wrap spacing="15px" justify="center" mt={1.5}>
          {recipe.cautions.map((warning) => (
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
          ))}
        </Wrap>
      </CardBody>
    </Card>
  );
};
