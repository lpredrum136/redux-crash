import { ADD_TODO, MARK_COMPLETE, DELETE_TODO, GET_TODOS } from '../types'

const initialState = {
	todos: []
}

/*
Todos.js: import {v4 as uuidv4} from 'uuid'
{
	id: uuidv4(),
	title: ....
	completed: false
}

todoReducer:
case 'ADD_TODO':
	them cong viec vao state.todos 

todoActions:
export const addTodo = newTodo 
*/

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.payload
			}

		case MARK_COMPLETE:
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.payload) todo.completed = !todo.completed
					return todo
				})
			}

		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload]
			}

		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			}

		default:
			return state
	}
}

export default todoReducer
