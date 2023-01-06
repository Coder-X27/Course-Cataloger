import React from 'react';
import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy,} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import './home.css';
import { Link } from 'react-router-dom';
import vd from '../../Assets/images/bg.png';
import introvideo from '../../Assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center','flex-end']} spacing='8'>
            <Heading children="Learn From the Experts" size={'2xl'} />
            <Text fontFamily='cursive' fontSize={'2xl'} textAlign={['center','left']} children="Find Valuable content at reasonable price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image className='vector-graphics' boxSize={'md'}  src={vd} objectFit="contain" />
        </Stack>
      </div>
      <Box padding={'8'} bg='blackAlpha.800' >
        <Heading children="Our Brands" textAlign='center' fontFamily='body' color={'yellow.400'}/>
        <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop='4'>
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
        </HStack>
      </Box>
      <div className="container2">
          <video src={introvideo}  controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
      </div>
    </section>
  );
};

export default Home;
