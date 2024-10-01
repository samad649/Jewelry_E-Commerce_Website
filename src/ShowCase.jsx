import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
  
  export const ShowCase = () => (
    <Box borderColor={'transparent'} borderRadius={20} backgroundColor={'#3B3486'} marginBottom={5} maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
        borderRadius={20}
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: useColorModeValue('#C3ACD0', 'gray.700'), lg: '#E6E6FA' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '6' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size="xl" fontFamily={'font2'} color={useColorModeValue('#6554AF', 'red.300')}>
                New Arrivals
              </Heading>
              <Heading size="xl" fontFamily={'font2'} fontWeight="normal">
                sarim is a motu
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link color={useColorModeValue('#6554AF', 'red.300')}  fontFamily={'font2'} fontWeight="bold" fontSize="lg">
                Shop now
              </Link>
              <Icon color={useColorModeValue('#6554AF', 'red.300')} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src={require('./assets/item1.png')} 
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
          <Image
            display={{ base: 'none', sm: 'initial' }}
            src={require('./assets/item2.png')} 
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  )