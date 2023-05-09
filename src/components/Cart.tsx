interface Props{
    cartItems: string[]
    onClear : () => void
}
const Cart = ({cartItems, onClear}: Props) => {
  return (
    <div>
        <ul>
            {cartItems.map(cartItem => <li>{cartItem}</li>)}
            <button onClick={onClear}>Clear</button>
        </ul>
    </div>
  )
}

export default Cart