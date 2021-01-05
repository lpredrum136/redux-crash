import './App.css'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

import { Provider } from 'react-redux'
import store from './store/store.js'

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Navbar />
				<Todos />
			</div>
		</Provider>
	)
}

export default App
