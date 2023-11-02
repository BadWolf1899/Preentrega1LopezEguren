import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
const CartWidget = () => {
    return (
        <div className='Cart'>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon /> 
            </Badge>
         </div>
    )
}

export default CartWidget;