import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AddressElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { commerce } from "./commerce";
import { Box, Button, Flex, Container, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import EmailForm from "./EmailForm";
import validator from 'validator';

function StripeForm({ checkoutToken, stripe }) {
    const stripeApi = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const validData = () => {
        let isValid = true;
        let errorMessage = "";

    
        if (!validator.isEmail(email)) {
            isValid = false;
            console.log(email);
            errorMessage = "Please enter a valid email address.";
        }

        // Add additional validation logic here if needed

        if (!isValid) {
            alert(errorMessage); // Show error message to user
        }

        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var addressElement = elements?.getElement('address');
        addressElement?.getValue()
        .then(function(result) {
        if (result.complete) {
            if(validData()){
            console.log("valid")
            }
            else{
                console.log("not valid")
            }
            }
            })
        
    }
    const [email,setEmail] = useState('');
    return (
        <>
            <EmailForm setEmail={setEmail}/>
            <AddressElement options={{ mode: 'shipping', allowedCountries: ['US'], display: { name: 'split' } }} />
            <Text fontWeight="medium" mb={2}>Payment</Text>
            <Box border="1px solid" borderColor="gray.300" p={2} width="full" borderRadius="md">
            <CardElement
    style={{
        base: {
            fontSize: '24px',
            '::placeholder': {
                color: '#aab7c4',
            },
            ':hover': {
                color: '#424770',
            },
            ':focus': {
                borderColor: '#424770',
            }
        },
        complete: {
            color: 'green',
        },
        empty: {
            color: '#fffff6',
        },
        invalid: {
            iconColor: 'red',
            color: 'red',
        }
    }}
/>
            </Box>
            <Flex direction="row" justify="space-between" width="full" mt={4}>
                <Button variant={'outlined'} onClick={() => navigate('/cart')}>Back</Button>
                <Button onClick={(e)=>{handleSubmit(e)}} backgroundColor={'#363062'} color={'gray.100'} variant={'contained'} disabled={!stripe} type="submit">
                    Pay {checkoutToken?.subtotal?.formatted_with_symbol}
                </Button>
            </Flex>
        </>
    );
}

const Checkout = ({ cart }) => {
    const [checkoutToken, setcheckoutToken] = useState(null);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setcheckoutToken(token);
            } catch (error) {
                console.error("Error generating checkout token:", error);
            }
        }

        generateToken();
    }, [cart.updated]);

    return (
        <Flex align="center" justify="center" height="90vh" backgroundColor="white" mt={200}>
            <Container maxW="md" bg="white" boxShadow="md" p={6} borderRadius="md">
                <VStack spacing={4}>
                    <Box fontSize={29} textAlign="center">Check Out</Box>
                    {checkoutToken ? (
                        <Elements stripe={stripePromise}>
                            <StripeForm checkoutToken={checkoutToken} />
                        </Elements>
                    ) : (
                        <Box>Loading...</Box>
                    )}
                </VStack>
            </Container>
        </Flex>
    );
}

export default Checkout;

