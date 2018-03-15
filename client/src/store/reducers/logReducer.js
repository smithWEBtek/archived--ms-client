import * as actionTypes from '../actions/actionTypes';

const initialState = {
	logs: [{
		student_id: 1,
		teacher_id: 1,
		resource_id: 1,
		lessons_id: 1,
		content: 'initial state log placeholder'
	}],
	loading: false,
	error: false,
	message: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case actionTypes.CREATE_LOG:
			return Object.assign({}, state, {
				logs: state.logs.concat(action.payload)
			})

		//-----FETCH LOGS-----------------------------
		case actionTypes.FETCH_LOGS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_LOGS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_LOGS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_LOGS:
			const logs = action.logsList
			return Object.assign({}, state, {
				logs: logs
			})

		default: return state
	}
}


export default reducer;