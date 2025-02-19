import { Badge, Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface props{
    game : Game;
}

function GameCard({game}:props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
            <CriticScore  score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard
