import { Badge } from '@chakra-ui/react';
import React from 'react'

interface props{
    score:number;
}

function CriticScore({score}:props) {
    let color = score>75 ? 'green' : score > 65 ? 'yellow' : ''; 
  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore
