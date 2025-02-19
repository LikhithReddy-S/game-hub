import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'

interface props{
    game : Game;
}

function GameCard({game}:props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
