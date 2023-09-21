import { Box,Flex, Heading, Stack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useState } from "react";


const App = () => {
  const [gameStarted,setGameStarted] = useState(false); //useStateHook

  const numbers = [1,2,3,4,5,6];

  const StartGameHandler = ()=>{
    setGameStarted(true);
  }
  return <> 
    {gameStarted ? 
    <Stack> 
    <Heading>Select Number</Heading>
    <Flex>
    {numbers.map((value)=>
    <Flex justify={"center"}
     align={"center"}
      fontSize={"30"}
       bg={"black"} color={"white"}
        w={"50px"}
         h={"50px"}
         key={value}
         mr={4}
         borderRadius={"md"}
          >{value}
          </Flex>
    )
    }
    </Flex>
    </Stack> 
    : (
      <Flex justify="center" align="center" >
      <Image width="50%" src="/dices.png" />
      <Stack>
        <Heading fontSize="7xl" as="h1">The Dice Game</Heading>
        <Button
        onClick={StartGameHandler}
          alignSelf="flex-end"
          bg={"black"}
          color={"white"}
          _hover={{ bg: "green", color: 'yellow' }}
        >
          Play Now
        </Button>
      </Stack>
    </Flex>
    )}
  
  </>
}

export default App;