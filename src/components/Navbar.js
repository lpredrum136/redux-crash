import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Navbar = ({ todos }) => {
	const length = todos.length
	return (
		<div className='navbar'>
			<h1>My Redux Todos App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Total todos: {length}</li>
			</ul>
		</div>
	)
}

Navbar.propTypes = {
	todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	todos: state.myTodos.todos
})

export default connect(mapStateToProps, {})(Navbar)
