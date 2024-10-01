
import { FormControl } from "@chakra-ui/react"
import { useState } from "react"
import { Input,FormLabel,FormErrorMessage } from "@chakra-ui/react"
import { FormHelperText } from "@chakra-ui/react"

export default function EmailForm({setEmail}) {
    const [input, setInput] = useState('');
  
    const handleInputChange = (e) =>{ setInput(e.target.value)
    setEmail(input);
    };
  
    const isError = input === '';
  
    return (
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
           Invoice will be send to this email
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
    )
  }