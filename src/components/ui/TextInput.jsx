import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant={"filled"}
      focusBorderColor="blue.400"
      _focus={{ background: "white" }}
      fontSize={"sm"}
      color="blue.400"
      fontStyle={"italic"}
      placeholder="Search for recipe"
      _placeholder={{ color: "black.400" }}
      _hover={{ background: "#c6d8f5" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
