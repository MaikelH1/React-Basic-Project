import { Center, Heading, Grid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <Center h="100%" flexDir="column" bg="blue.500" pb="200px" w="100%">
      <Heading color="white" fontSize="4xl" pb={3} mt={5}>
        Winc Recipe Checker
      </Heading>
      <TextInput changeFn={handleChange} w={[200, 500]} mt={2} />
      <Grid
        alignContent={"center"}
        justifyContent={"center"}
        gridTemplateColumns={[
          "1fr",
          matchedRecipes.length >= 4
            ? "repeat(4, 1fr)"
            : matchedRecipes.length === 3
            ? "repeat(3, 1fr)"
            : matchedRecipes.length === 2
            ? "repeat(2, 1fr)"
            : "1fr",
        ]}
        columnGap={10}
        pb={matchedRecipes.length === 0 && "500px"}
      >
        {matchedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            clickFn={clickFn}
          />
        ))}
      </Grid>
    </Center>
  );
};
