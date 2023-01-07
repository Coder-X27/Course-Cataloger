import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Course=({views,title ,imageScr,id,addToPlaylistHandler,creator,description,lectureCount})=>{
  return(
    <VStack className='course' alignItems={['center','flex-start']}>
      <Image src={imageScr} boxSize='60' objectFit={'contain'} />
      <Heading textAlign={['center','left']} children={title} maxW='200px' fontFamily={'sans-serif'} noOfLines='3' size={'sm'}/>
      <Text children={description} noOfLines='2' />
      <HStack>
        <Text children={"Creator"} textTransform="uppercase" fontWeight='bold' />
        <Text children={creator} textTransform="uppercase" fontFamily={'body'} />
      </HStack>
      <Heading textAlign={'center'} size='xs' children={`Lectures ${lectureCount}`} textTransform='uppercase' />
      <Heading textAlign={'center'} size='xs' children={`Views ${views}`} textTransform='uppercase' />
      <Stack alignItems={'center'} direction={['column','row']}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow' }>
            Watch Now
          </Button>
        </Link>
        <Button colorScheme={'yellow' }  variant='ghost' onClick={()=>{addToPlaylistHandler(id)}}>Add to Playlist</Button>
      </Stack>

    </VStack>
  )
}
const addToPlaylistHandler1=()=>{
  console.log('Playlist added')
}
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structures &Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => {
          setKeyword(e.target.value);
        }}
        placeholder="Search a Course ...."
        type={'text'}
        focusBorderColor="yellow.500"
      />
      <HStack overflowX={'auto'} paddingY={'8'}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'center']}
        alignItems={['center', 'flex-start']}
      >
        <Course views="2" title="sample" imageScr="data:image/jpeg;base64,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" id="sample" addToPlaylistHandler={addToPlaylistHandler1} creator="karan" description="sample" lectureCount="5" />
      </Stack>
    </Container>
  );
};

export default Courses;
