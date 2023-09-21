import {Flex,Heading,Stack} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

const App = () =>{
  return (<Flex>
    <Image src="/dices.png"/>
    <Stack>
      <Heading as="h1">The Dice Game</Heading>
      <Button>Play Now</Button>      
    </Stack>
  </Flex>
  );
}

export default App;