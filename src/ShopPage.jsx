
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { commerce } from "./commerce";
import { SimpleGrid, Box, Flex, Spacer, Center } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import Footer from "./Footer";

function ShopPage({isLoading,setIsLoading,setItems}) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true); // Add loading state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([fetchProducts(), fetchCart()]);
        setLoading(false); // Set loading to false after both API calls are completed
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchData();
  }, [products,cart.updated]);


  const addToCart = async (productID, quantity) => {
    try {
      
      setItems(['..']);
  
      const item = await commerce.cart.add(productID, quantity);
      setCart(item);
      setItems(item.total_items);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
       // This will execute after the try block, regardless of success or error
    }
  };

  return (
    <>
      {loading ? ( // Render a loading message while the API calls are in progress
        <Box position={"relative"} className="shopPage" width={"100vw"} height={"100vh"}>
        <Flex marginTop={"5%"} zIndex={2} height={"100%"}>
          <Box overflow={"auto"} position={"relative"} className="shopSection" width={"100vw"}>
            <Box position={"relative"}>
              <SimpleGrid
                spacingY={50}
                margin={10}
                position={"relative"}
                columns={[1, 1, 1, 2, 4, 4]}
                spacing={3}
              >
                Loading...
              </SimpleGrid>
              <Spacer h={60}></Spacer>
            </Box>
          </Box>
        </Flex>
      </Box>
      ) : (
        <Box position={"relative"} className="shopPage" width={"100vw"} height={"100vh"}>
          <Flex marginTop={"5%"} zIndex={2} height={"100%"}>
            <Box overflow={"auto"} position={"relative"} className="shopSection" width={"100vw"}>
              <Box position={"relative"}>
                <SimpleGrid
                  spacingY={50}
                  margin={10}
                  position={"relative"}
                  columns={[1, 1, 1, 2, 4, 4]}
                  spacing={3}
                >
                  {products.map((product) => (
                    <Center key={product.id}>
                      <ItemCard
                        addCart={addToCart}
                        productID={product.id}
                        name={product.name}
                        price={product.price.formatted}
                        image={product.image.url}
                      />
                    </Center>
                  ))}
                </SimpleGrid>
                <Spacer h={60}></Spacer>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
      <Footer />
    </>
  );
}

export default ShopPage;