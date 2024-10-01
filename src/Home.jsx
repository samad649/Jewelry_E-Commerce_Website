
import {React} from "react";
import {Flex,Heading,VStack} from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";
import HomeDisplayOption from "./HomeDisplayOption";
import { Spacer } from "@chakra-ui/react";
import { ShowCase } from "./ShowCase";
import FeaturedItems from "./FeaturedItems";
import Footer from "./Footer";
function Home() {
    return(
        <>
        <Flex minWidth={'100vw'} justifyContent={"center"}>
        <VStack zIndex={2} marginTop={'4.2rem'}  gap={0}>
            <div className="homePage">
            <ImageCarousel />
            <Spacer h={5} ></Spacer>
            <ShowCase /> 
            <Spacer h={5} ></Spacer>
            <div className="shopArea">
                <Heading padding={2} letterSpacing={5} display={'inline-block'} borderBottom={'2px solid #E9D5CA'} textDecoration={'none'} textAlign={'center'} fontSize={26} color={'#E9D5CA'} fontFamily={'font2'}> Featured Items </Heading>
                <Spacer h={5} ></Spacer>
                <FeaturedItems />
                </div>
            <Spacer h={5} ></Spacer>
                 <div className="shopArea">
                <Heading padding={2} letterSpacing={5} display={'inline-block'} borderBottom={'2px solid #E9D5CA'}  color={'#E9D5CA'} textDecoration={'none'} textAlign={'center'} fontSize={26} fontFamily={'font2'}> Shop</Heading>
                <Spacer h={5} ></Spacer>
                <HomeDisplayOption />
                </div>
                <Spacer h={5} ></Spacer>
            </div>
        </VStack>
        </Flex>
        <Footer />
        </>
    ); 
  }


  export default Home;