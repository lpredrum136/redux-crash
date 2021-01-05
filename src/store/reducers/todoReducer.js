const initialState = {
	todos: [
		{
			id: 1,
			title: 'Viec 1',
			completed: false
		},
		{
			id: 2,
			title: 'Viec 2',
			completed: false
		}
	]
}

const todoReducer = (state = initialState, action) => {
	return state
}

export default todoReducer
