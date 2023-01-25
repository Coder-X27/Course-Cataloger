import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const PaymentSuccess = () => {
  return (
    <Container h="90vh" p="16">
      <Heading my={'8'} textAlign="center">
        You have Pro Pack
      </Heading>
      <VStack
        width={'full'}
        boxShadow={'lg'}
        alignItems={'center'}
        borderRadius={'13px 13px 0 0 '}
      >
        <Box
          width={'full'}
          bg="yellow.500"
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'}>Payment SuccessFull</Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text>
              Congratulations you're a pro member. You have access to our
              premium content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button variant={'ghost'}>Go to Profile</Button>
        </Link>
        <Heading size={'xs'} p='4'>Reference:karan sharma , and company</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
