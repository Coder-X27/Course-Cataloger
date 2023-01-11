import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introvideo from '../../Assets/videos/intro.mp4';
import termsandCondition from '../../Assets/docs/termsAndCondition'
const About = () => {
  return (
    <Container maxWidth={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Stack direction={['column', 'row']} spacing={['4', '16']}>
        <VStack>
          <Avatar
            src="https://avatars.githubusercontent.com/u/84677110?v=4"
            boxSize={['40', '48']}
          />
          <Text children="Co-Founder" opacity={'.7'} />
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Karan Sharma" size={['md', 'xl']} />
          <Text
            children={`Hi, I am a MERN Stack Developer and a Competitive Programmer.
        Our Mission is to provide quality content at reasonable price.`}
            alignItems={['center', 'left']}
          />
        </VStack>
      </Stack>
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} margin="8" textAlign={['center', 'left']}>
          We are a video Streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <Box>
        <video
          autoPlay
          muted
          src={introvideo}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </Box>
      <Box>
        <Heading textAlign={['center','left']} size={'md'} children="Terms & Condtion"/>
        <Box h={'sm'} p="4" overflowY={'scroll'}>
             <Text textAlign={['center','left']} letterSpacing={'widest'} fontFamily="heading">
                {termsandCondition}
             </Text>
             <Heading my={'4'} size={'xs'} children="Refund Our aplication for cancellation within 7 days"/> 
        </Box>
    </Box>
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          children={'Payment is secured by Razorpay'}
          textTransform='uppercase'
        />
      </HStack>
    </Container>
  );
};

export default About;
