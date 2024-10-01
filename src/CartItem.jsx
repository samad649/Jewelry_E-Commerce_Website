import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState } from 'react';
const QuantitySelect = (props) => {
  const options = Array.from({ length: 999 }, (_, index) => index + 1);
  return (
    <Select
      maxW="80px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
};

export const CartItem = (props) => {
  const {
    updateCartQty,
    id,
    isGiftWrapping,
    name,
    description,
    imageUrl,
    currency,
    price,
    qty,
    onChangeQuantity,
    onClickDelete,
  } = props
  const [quantity, setQuantity] = useState(qty);
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            updateCartQty(id,e.target.value);
            console.log(e.target.value);
            setQuantity(e.target.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={()=>{
          onClickDelete(id);
          }} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            updateCartQty(id,e.target.value);
            console.log(e.target.value);  
            setQuantity(e.target.value);        
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}