import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnISHighlighted] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0)

    const {items} = cartCtx;

    useEffect(() => {
        if(cartCtx.items.length === 0) return;
        setBtnISHighlighted(true);
        const timer = setTimeout(() => {
            setBtnISHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span><CartIcon/></span>
            <span>Your cart yo</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}   

export default HeaderCartButton
