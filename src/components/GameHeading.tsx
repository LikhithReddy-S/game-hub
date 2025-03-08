import { Heading } from '@chakra-ui/react'
import { h1 } from 'framer-motion/client'
import { GameQuery } from '../App'

interface props{
    gameQuery : GameQuery
}

function GameHeading({gameQuery}:props) {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`    
  return (
    <Heading as={h1} marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading
