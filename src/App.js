import Banner from './Components/Banner'
import logo from './assets/logo.png'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import ShoppingList from './Components/ShoppingList'
import './styles/Layout.css'
import { useState } from 'react'

function App() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App