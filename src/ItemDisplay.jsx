import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { MdLocalShipping} from 'react-icons/md';
 import { Carousel } from 'react-responsive-carousel';
 import 'react-responsive-carousel/lib/styles/carousel.min.css';
 import { useLocation } from 'react-router-dom';
 import { useParams } from 'react-router-dom';
 import { commerce } from "./commerce";
 import { useState, useEffect} from 'react';
  export default function ItemDisplay({setItems}) {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const [cart, setCart] = useState([]);
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
    const addToCart = async (productID, quantity) => {
      try {
          setItems(['..']);
        const item = await commerce.cart.add(productID, quantity).then((response) =>{ 
          console.log(response.total_items)
          setCart(response);
          setItems(response.total_items);
      });
  
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    };
    useEffect(() => {
      (async () => {
        try {
          await fetchCart();
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      })();
    }, []);
    useEffect(() => {
      console.log(productId);
      const fetchProduct = async () => {
        try {
          const productData = await commerce.products.retrieve(productId);
          setProduct(productData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
          setProduct(null);
          setLoading(false);
        }
      };
      fetchProduct();
    }, [productId]);
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!product) {
      // Handle the case where the product data is not found or invalid
      return <div>Product not found</div>;
    }
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>

          <Flex>
          <Carousel
          infiniteLoop={true}
          showThumbs={true} 
          showStatus={false} 
          showArrows={false}
          showIndicators={true} 
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            // Custom rendering of indicators
            const indicatorClasses = isSelected ? "indicator-selected" : "indicator";
            return (
              <div
                key={index}
                className={indicatorClasses}
                onClick={onClickHandler}
                title={label}
              />
            );
          }}>
     {(product.assets).map((item) => (
  <div key={item.id}>
    <img src={item.url} alt={item.id} />
    
  </div>
))}
    </Carousel>
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {product.name}
              </Heading>
              <Text
                color={'gray.900'}
                fontWeight={300}
                fontSize={'2xl'}>
                {product.price.formatted_with_symbol} USD
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={'gray.200'}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={'gray.500'}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
             
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={'yellow.500'}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
                <List spacing={2} style={{ display: 'flex', flexDirection: 'column'}}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
             onClick={()=>{
              addToCart(product.id,1);
             }}
              bg={'gray.900'}
              color={'white'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }