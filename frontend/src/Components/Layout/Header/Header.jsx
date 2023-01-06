import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user={
    role:"admin"
  }
  const logOutHandler=()=>{
    console.log('Logout');
  }
  return (
    <>
      <ColorModeSwitcher />
      <Button
        colorScheme={'yellow'}
        position="fixed"
        top={'6'}
        left="6"
        width="12"
        height="12"
        rounded="full"
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(10px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'}>Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/browse">
                <Button variant="ghost">Browse Courses</Button>
              </Link>
              <Link to="/request">
                <Button variant="ghost">Request a Course</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost">Contact</Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>Profile</Button>
                        </Link>
                        <Button variant={'ghost'} colorScheme={'yellow'} onClick={logOutHandler}>
                            <RiLogoutBoxLine/>
                            Logout
                        </Button>
                      </HStack>
                      {user && user.role==='admin' && (
                        <Link to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant='ghost' >
                            <RiDashboardFill style={{margin:'4px'}}/>
                            DashBoard
                          </Button>
                          {/* <Button variant={'ghost'} colorScheme={'yellow'}>Profile</Button> */}
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register">
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
