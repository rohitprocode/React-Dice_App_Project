import { List, ListItem, Text, Box, Flex, Heading, Stack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useState } from "react";


const App = () => {
  const [gameStarted, setGameStarted] = useState(false); //useStateHook
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];

  const StartGameHandler = () => {
    setGameStarted(true);
  }

  const backGameHandler = () =>{
    setGameStarted(false);
  }
  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null)
  }

  const generateRandomNo = () => {
    if (selectedNumber) {
      const generatedNo = Math.ceil(Math.random() * 6);
      setDice(generatedNo);
      if (selectedNumber === generatedNo) {
        setScore((prev) => prev + generatedNo);
      } else {
        setScore((prev) => prev - 2);
      }
    } else {
      setError("Please Select Number");
    }
  }

  return <>
    {gameStarted ?
      <>
      <Button onClick={backGameHandler}>Back</Button>
        <Stack
          justify={"center"}
          align={"center"}
          height={"100vh"}
        >
          <Heading as="h1" fontSize={"6xl"} mb="10" color={error ? "red" : "black"}>
            {(error) ? error : "Select Number"}
          </Heading>
          <Flex pb="10">
            {numbers.map((value) =>
              <Flex justify={"center"}
                align={"center"}
                fontSize={"30"}
                bg={selectedNumber === value ? "green" : "black"}
                color={"white"}
                w={"50px"}
                h={"50px"}
                key={value}
                mr={4}
                borderRadius={"md"}
                onClick={() => { onNumberClicked(value) }}
              >{value}
              </Flex>
              
              
              
            )
            }
          </Flex>
          <Box onClick={generateRandomNo} >
            <Image src={`/dice/dice${dice}.png`} />
          </Box>
          <Text as="p" fontSize="xl">Click on Dice to Roll</Text>

          <Text fontSize={"8xl"} fontWeight={"bold"} color={score > 0 ? "green" : "red"} >{score}</Text>
          <Text fontSize={"6xl"}>Total Score</Text>
          <Button onClick={() => { setScore(0); setSelectedNumber(null) }} >Reset Score</Button>
        </Stack>
        <Stack maxW={"900px"} margin={"auto"}>
          <Heading as="h2">Game Rules:</Heading>
          <List>
            <ListItem>Select Any Number</ListItem>
            <ListItem>Click on dice image to roll it.</ListItem>
            <ListItem>Select number is equal to obtained dice result then you will get same point of dice</ListItem>
            <ListItem>If you are wrong score will be deducted by two points</ListItem>
          </List>
        </Stack>
      </>
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