import * as actionTypes from '../actions/actionTypes';

const initialState = {
	students: [],
	loading: false,
	error: false,
	message: '',
	message2: 'hello from Redux student store',
	teachers: [
		{ id: 1, firstname: 'None', lastname: 'None', email: 'none@music.com' },
		{ id: 2, firstname: 'John', lastname: 'Coltrane', email: 'trane@music.com' },
		{ id: 3, firstname: 'Art', lastname: 'Tatum', email: 'artful@music.com' },
		{ id: 4, firstname: 'Jimi', lastname: 'Hendrix', email: 'jimi@music.com' },
		{ id: 5, firstname: 'James', lastname: 'Brown', email: 'jb@getfunky1.com' },
		{ id: 6, firstname: 'Sonny', lastname: 'Stitt', email: 'sonny@swing.com' },
		{ id: 7, firstname: 'Lester', lastname: 'Parker', email: 'lester@swing.com' },
		{ id: 8, firstname: 'Charlie', lastname: 'Banacos', email: 'cb@swing.com' }
	]
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE STUDENT-----------------------------
		case actionTypes.CREATE_STUDENT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_STUDENT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_STUDENT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_STUDENT:
			const newStudent = action.studentData
			return Object.assign({}, state, {
				students: state.students.concat(newStudent)
			})


		//-----FETCH STUDENTS-----------------------------
		case actionTypes.FETCH_STUDENTS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_STUDENTS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_STUDENTS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_STUDENTS:
			const students = action.studentsList
			return Object.assign({}, state, {
				students: students
			})


		//-----UPDATE STUDENT-----------------------------
		case actionTypes.UPDATE_STUDENT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_STUDENT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_STUDENT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_STUDENT:
			//const studentData = action.updatedStudentData
			//debugger
			//const studentIndex = state.students.findIndex(student => student.id === studentData.id);
			// const stateTemp = {
			//   ...state,
			//   students: [
			//     ...state.students.slice(0, studentIndex),
			//     ...state.students.slice(studentIndex + 1, state.students.length)
			//   ]
			// };
			const updatedStudentsArray = state.students.map(student => student.id === action.updatedStudentData.id ? action.updatedStudentData : student)
			return Object.assign({}, state, { students: updatedStudentsArray })


		//-----DELETE STUDENT-----------------------------
		case actionTypes.DELETE_STUDENT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_STUDENT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_STUDENT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_STUDENT:
			const updatedStudents = state.students.filter(student => student.id !== action.id);
			return Object.assign({}, state, {
				students: updatedStudents
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
