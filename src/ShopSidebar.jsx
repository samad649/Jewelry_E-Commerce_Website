import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Spacer, Box, Text, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
function ShopSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
    top={0}
    zIndex={2}
    marginTop={'5'}
      h="100vh"
      className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
    >
      <Sidebar>
        <Flex justifyContent={'space-between'}>
        <Text
        marginTop={2}
          color="#393646"
          letterSpacing={2}
          fontWeight={590}
          fontSize={35}
          fontFamily="font1"
        >
          Shop
        </Text>
        <IconButton marginTop={3}
        backgroundColor={'transparent'}
            size={'md'}
            display={{ md: 'none' }}
            icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            onClick={handleSidebarToggle}
          />
        </Flex>

        <Spacer height="2%"></Spacer>
        <Menu
          menuItemStyles={{
            button: {
              letterSpacing: '2px',
              backgroundColor: '#37306B',
              fontSize: '1.2rem',
              fontWeight: '450',
              fontFamily: 'font1',
              color: '#E9D5CA',
              [`&.active`]: {
                backgroundColor: '#37306B',
                color: '#E9D5CA',
              },
              '&:hover': {
                backgroundColor: 'rgba(55, 48, 107, 0.8)',
              },
            },
          }}
        >
          <SubMenu label="Chain">
            <MenuItem>Gold</MenuItem>
            <MenuItem>Diamonds</MenuItem>
          </SubMenu>
          <MenuItem>Watches</MenuItem>
          <MenuItem>Pendants</MenuItem>
          <MenuItem>Earrings</MenuItem>
          <MenuItem>Rings</MenuItem>
          <MenuItem>Grills</MenuItem>
          <MenuItem>Cuban</MenuItem>
          <MenuItem>Extra</MenuItem>

        </Menu>
      </Sidebar>
    </Box>
  );
}

export default ShopSidebar;