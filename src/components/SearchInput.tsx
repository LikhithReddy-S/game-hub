import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface props{
  onSearch : (searchText : string) => void
}

function SearchInput({onSearch}:props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      if (ref.current){
        onSearch(ref.current.value)
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          ref={ref}
          placeholder="search games.."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
