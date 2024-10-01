import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { ReactComponent as ShoppingIcon } from './assets/cartDark.svg';
  import { useNavigate } from 'react-router-dom';
  import { useEffect,useState } from 'react';
  import { commerce } from "./commerce";
  

  function ItemCard({addCart,productID,price,name,image}) {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const fetchedProduct = await commerce.products.retrieve(productID);
          setProduct(fetchedProduct);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, [productID]);

    const imageSize = useBreakpointValue({ base: '3xs', sm: '3xs', md: '4xs' , lg: '2xs'});
   
    function handleClick() {
      navigate(`/Item/${productID}`);
    } 
    return (
      <Flex 
      onClick={()=>{handleClick()}}
      className='itemCard' 
      w="3xs" 
      alignItems="center" 
      justifyContent="center">
        <Box
          
          bg={useColorModeValue('white', 'gray.800')}
          maxW={imageSize}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">

          <Image
            src={image}
            alt={`Picture of ${name}`}
            roundedTop="md"
          />
  
          <Box p="2">
            <Flex mt="2" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xs"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'.8em'}>
                <chakra.a  display={'flex'}>
                  <Icon as={ShoppingIcon} h={6} w={6} alignSelf={'center'} onClick={(event)=>{
                    event.stopPropagation();
                    addCart(productID, 1);
                    }} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="md" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                {price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ItemCard;