
import { ReactComponent as ShoppingIcon } from './assets/cart.svg';

function ShoppingCart({isLoading, handleCartClick, itemCount}) {

  return (
    <div>
      <ShoppingIcon onClick={handleCartClick} className='cart' />
      <div className="item-count">
      {isLoading ? ".." : (itemCount !== null && itemCount !== undefined) ? itemCount : ".."}
      </div>
    </div>
  );
}

export default ShoppingCart;




