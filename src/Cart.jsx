import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { CartItem } from './CartItem'
  import { CartOrderSummary } from './CartOrderSummary'
  import { useNavigate } from 'react-router-dom';
  import { commerce } from './commerce';
  import { useState } from 'react';
  import { useEffect } from 'react';
  export const Cart = ({isLoading,setIsLoading,setCount,itemCount,fetchCart,cart,setCart }) => {

    const navigate = useNavigate();
   

    useEffect(() => {
      fetchCart();
      setCount();
    },[cart,itemCount]);

    const updateCartQty = async (productID, quantity) => {
      const response = await commerce.cart.update(productID,{ quantity });
      setCart(response.cart);
      
    };
    const handleAddToCart = async (productID, quantity) => {
      const item = await commerce.cart.add(productID, quantity);
      setCart(item.cart);

    };
    const onClickDelete = async (productID) => {
      try {
        setIsLoading(true); // Set the loading state to true
        const response = await commerce.cart.remove(productID);
        setCart(response?.cart);
      } catch (error) {
        // Handle any errors here
      } finally {
        setIsLoading(false); // Set the loading state back to false, regardless of success or error
      }
    };
    function handleClick() {
      navigate("/");
    }
    return(
    <Box
    marginTop={'5%'}
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
         
          <Heading fontSize="2xl" fontWeight="extrabold">
        Shopping Cart ({itemCount === undefined ?  "Loading..." : isLoading ?  "Loading..." : itemCount || 0 })
        </Heading>
        {isLoading === true ? (
  <div>Loading cart...</div>
) : cart === undefined ? (
  <div>Loading cart...</div>
) : itemCount === 0 ? (
  <div>Your cart is empty.</div>
) : (
  <Stack spacing="6">
    {cart?.line_items?.map(item => (
      <CartItem
        updateCartQty={updateCartQty}
        name={item?.product_name}
        onClickDelete={onClickDelete}
        id={item?.id}
        imageUrl={item?.image?.url}
        qty={item?.quantity}
        price={item?.line_total?.formatted_with_symbol}
      />
    ))}
    
  </Stack>
)}
        
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary cart={cart}/>
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link onClick={()=>{handleClick()}} color={mode('#4E31AA', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>);
  };