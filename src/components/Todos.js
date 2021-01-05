import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
	getTodos,
	markComplete,
	deleteTodo
} from '../store/actions/todoActions'
import TodoForm from './TodoForm'

const Todos = ({ todos, getTodos, markComplete, deleteTodo }) => {
	// Get todos
	useEffect(() => {
		getTodos()
	}, [])

	return (
		<div className='todo-list'>
			<TodoForm />
			<ul>
				{todos.map(todo => (
					<li key={todo.id} className={todo.completed ? 'completed' : ''}>
						{todo.title}
						<input
							type='checkbox'
							onChange={markComplete.bind(this, todo.id)}
						/>
						<button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	getTodos: PropTypes.func.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	todos: state.myTodos.todos
})

export default connect(mapStateToProps, { getTodos, markComplete, deleteTodo })(
	Todos
)
