import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Icon,HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: props) {
    const iconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        ninetendo : SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        web:BsGlobe
    }
  return (
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'>{platform.slug}</Icon>
        ))}
      </HStack>
  );
}

export default PlatformIconList;
