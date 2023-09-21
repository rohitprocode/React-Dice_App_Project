import {Flex,Heading,Stack} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

const App = () =>{
  return (
  <Flex justify="center" align="center" >
    <Image width="50%" src="/dices.png"/>
    <Stack>
      <Heading fontSize="7xl" as="h1">The Dice Game</Heading>
      <Button alignSelf="flex-end" >Play Now</Button>      
    </Stack>
  </Flex>
  );
}

export default App;