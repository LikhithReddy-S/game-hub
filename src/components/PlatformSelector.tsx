import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';

function PlatformSelector() {
  const { data , error} = usePlatforms();
  if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>platforms</MenuButton>
        <MenuList>  
            {data.map(d=><MenuItem key={d.id}>{d.name}</MenuItem>)}
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector;
