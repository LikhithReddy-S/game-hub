import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface props{
  onSearch : (searchText : string) => void
}

function Navbar({onSearch}:props) {
  return (
    <HStack paddingRight='20px'>
        <Image src={logo} boxSize='60px' />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )

}
export default Navbar
