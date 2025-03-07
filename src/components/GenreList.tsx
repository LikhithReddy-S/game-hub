import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre : (genre : Genre) => void;
  selectedGenre : Genre | null;
}

const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
  const { data ,isLoading} = useGenres();
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
            />
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
