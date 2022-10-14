import Banner from './Components/Banner'
import logo from './assets/logo.png'
// import Cart from './Components/Cart'
import Footer from './Components/Footer'
import ShoppingList from './Components/ShoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			{/* <Cart /> */}
			<ShoppingList />
			<Footer />
		</div>
	)
}

export default App