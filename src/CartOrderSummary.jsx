import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
  const OrderSummaryItem = (props) => {
    const { label, value, children, cart} = props
    
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = ({cart}) => {
    const navigate = useNavigate();
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={cart?.subtotal?.formatted_with_symbol || "Loading..."} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {(cart?.subtotal?.formatted_with_symbol)}
            </Text>
          </Flex>
        </Stack>
        <Button component={Link} to='/Checkout' onClick={()=>{
          navigate("/Checkout");
        }} colorScheme="purple" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button>
      </Stack>
    )
  }