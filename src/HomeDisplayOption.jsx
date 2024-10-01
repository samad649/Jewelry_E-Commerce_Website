import React from "react";
import {SimpleGrid,Card, CardHeader,CardFooter,Button, Text,Heading} from "@chakra-ui/react";


function HomeDisplayOption(){
    return(
        <>
        <SimpleGrid className="displayGrid" marginBottom={'15%'} paddingLeft={5} paddingRight={10} columns={[1, null, null, null, 5]} spacing={10} minChildWidth="150px" width="100%">
        <Card borderRadius={10} className="card" height={'fit-content'}>
  <CardHeader>
    <Heading borderRadius={10} border={6} bg={'transparent'} size='sm'>
        <Text className="itemShopTitle">Item</Text>
      <img src={require('./assets/item2.png')} alt='img1'/>
    </Heading>
  </CardHeader>
  <CardFooter justifyContent={'center'}>
    <Button bg={'slategray'}>Shop</Button>
  </CardFooter>
</Card>
<Card borderRadius={10} className="card" height={'fit-content'}>
  <CardHeader>
    <Heading borderRadius={10} border={6} bg={'transparent'} size='sm'>
        <Text className="itemShopTitle">Item</Text>
      <img src={require('./assets/item2.png')} alt='img1'/>
    </Heading>
  </CardHeader>
  <CardFooter justifyContent={'center'}>
    <Button bg={'slategray'}>Shop</Button>
  </CardFooter>
</Card>
<Card borderRadius={10} className="card"  height={'fit-content'}>
  <CardHeader>
    <Heading borderRadius={10} border={6} bg={'transparent'} size='sm'>
        <Text className="itemShopTitle">Item</Text>
      <img src={require('./assets/item2.png')} alt='img1'/>
    </Heading>
  </CardHeader>
  <CardFooter justifyContent={'center'}>
    <Button bg={'slategray'}>Shop</Button>
  </CardFooter>
</Card>
<Card borderRadius={10} className="card" height={'fit-content'}>
  <CardHeader>
    <Heading borderRadius={10} border={6} bg={'transparent'} size='sm'>
        <Text className="itemShopTitle">Item</Text>
      <img src={require('./assets/item2.png')} alt='img1'/>
    </Heading>
  </CardHeader>
  <CardFooter justifyContent={'center'}>
    <Button bg={'slategray'}>Shop</Button>
  </CardFooter>
</Card>
<Card borderRadius={10} className="card" height={'fit-content'}>
  <CardHeader>
    <Heading borderRadius={10} border={6} bg={'transparent'} size='sm'>
        <Text className="itemShopTitle">Item</Text>
      <img src={require('./assets/item2.png')} alt='img1'/>
    </Heading>
  </CardHeader>
  <CardFooter justifyContent={'center'}>
    <Button bg={'slategray'}>Shop</Button>
  </CardFooter>
</Card>
<Card  borderRadius={10} className="card" height={'fit-content'}>
  <CardHeader>
    <Heading borderRadius={10} border={6} bg={'transparent'} size='sm'>
        <Text className="itemShopTitle">Item</Text>
      <img src={require('./assets/item2.png')} alt='img1'/>
    </Heading>
  </CardHeader>
  <CardFooter justifyContent={'center'}>
    <Button bg={'slategray'}>Shop</Button>
  </CardFooter>
</Card>
</SimpleGrid>
        </>
    );
}

export default HomeDisplayOption;