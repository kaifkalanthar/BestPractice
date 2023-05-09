interface Props{
    CartItems: number
}
const NavBar = ({CartItems}: Props) => {
  return (
    <div>
      <p>Count {CartItems}</p>
    </div>
  )
}

export default NavBar
