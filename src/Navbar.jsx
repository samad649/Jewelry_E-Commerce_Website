import { ReactNode} from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

const Links = ['CHAINS', 'PENDANTS', 'RINGS','WATCHES','BRACELETS','NECKLACE','EARRINGS'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'underline',
      bg: useColorModeValue('#4E31AA', '#ffffff'),
    }}
    href={`/shop/${String(children).toLowerCase()}`}>
    {children}
  </Link>
);

function Navbar({isLoading, setIsLoading,totalItems}) {
  
  const isSmallScreen = useMediaQuery({ maxWidth: 980 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function handleClick() {

    navigate("/");
  }

  function handleCartClick() {
    navigate("/cart");
    setIsLoading(true);
  }
  return (
    <>
      <Box top={0} zIndex={3} position={'fixed'} width={'100vw'} borderBottom={'4px solid #E9D5CA'} color={'#E9D5CA'} bg={useColorModeValue('#37306B', 'red.900')} py={2} px={4}>
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'} zIndex={3}>
        <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
           <Flex gap={2}  fontSize={20} fontFamily={'font1'} alignItems={'center'}>
           <img className='logo' onClick={handleClick} src={require('./assets/logo1.png')} alt='logo'/>
           {isSmallScreen ? null : <h1 className='companyName' onClick={handleClick}>KingCrown Jewelers</h1>}
           </Flex>
            <HStack 
            fontSize={15}
            fontFamily={'font1'}
            fontWeight={'bold'}
              as={'nav'}
              spacing={7}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex gap={10} alignItems={'center'}>
            <div className='cartContainer'>
            <Link className='cartLink'>
            <ShoppingCart isLoading={isLoading} handleCartClick={handleCartClick} itemCount={totalItems} />
            </Link>
            </div>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      
    </>
  );
}
export default Navbar;