import Banner from './Components/Banner'
import logo from './assets/logo.png'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import ShoppingList from './Components/ShoppingList'
import './styles/Layout.css'
import { useState, useEffect } from 'react'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const handleDelete = (name, amount) => {
		console.log(name, amount);
		
		// {amount > 0 ? (
		// 	<div>
		// 		amount -1
		// 	</div>
		// ) : (
		// 	<div>
		// 		delete line
		// 	</div>
		// )}

		//1. copie du state
		const cartsCopy = [...cart];
	
		//2. manipulation sur la copie du state
		const cartsCopyUpdated = cartsCopy.filter((cart) => cart.name !== name);
	
		//3. modifier le state avec le setter
		updateCart(cartsCopyUpdated);
	  };

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} handleDelete={handleDelete}/>
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App