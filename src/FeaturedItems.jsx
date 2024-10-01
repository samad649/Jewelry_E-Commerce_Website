
import {HStack,Box, Flex} from "@chakra-ui/react";
function FeaturedItems(){
    return(
        <>
        <HStack justifyContent={'space-between'} width={'100vw'}>
        <Flex flexWrap={'wrap'} width={'100%'} justify={'space-between'}>
            <Box borderRadius={20} className="leftBox" flex={1} width={'33%'}>
            <div className='imageContainer'>
        <img src={require('./assets/item1.png')} alt='img1'/>
                </div>
            </Box>
           <Box  className="middleBox" flex={1} width={'33%'}>
           <div className='imageContainer'>
        <img src={require('./assets/item1.png')} alt='img1'/>
                </div>
           </Box> 
           <Box borderRadius={20} className="rightBox"flex={1} width={'33%'} >
           <div className='imageContainer'>
        <img src={require('./assets/item1.png')} alt='img1'/>
                </div>
           </Box> 
        </Flex>

        </HStack>

        </>
    );
}

export default FeaturedItems