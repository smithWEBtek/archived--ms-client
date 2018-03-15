import * as actionTypes from './actionTypes'
import LogService from '../services/LogService'

//-----FETCH LOGS ACTIONS-----------------------------
export const fetchLogsStart = () => {
	return { type: actionTypes.FETCH_LOGS_START }
}
export const fetchLogsSuccess = (logs) => {
	return { type: actionTypes.FETCH_LOGS_SUCCESS, logsList: logs }
}
export const fetchLogsFail = (error) => {
	return { type: actionTypes.FETCH_LOGS_FAIL, error: error }
}
export const fetchLogs = () => {
	return dispatch => {
		dispatch(fetchLogsStart())
		LogService.fetchLogs()
			.then(response => {
				dispatch({ type: actionTypes.FETCH_LOGS, logsList: response })
				dispatch(fetchLogsSuccess())
			})
			.catch(error => {
				dispatch(fetchLogsFail(error))
			})
	}
}


//-----CREATE LOG ACTIONS-----------------------------
export const createLogStart = () => {
	return { type: actionTypes.CREATE_LOG_START }
}
export const createLogSuccess = () => {
	return { type: actionTypes.CREATE_LOG_SUCCESS }
}
export const createLogFail = (error) => {
	return { type: actionTypes.CREATE_LOG_FAIL, error: error }
}
export const createLog = (data) => {
	return dispatch => {
		dispatch(createLogStart())
		LogService.createLog(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_LOG, payload: response })
				// history.push(`/logs/${response.id}`)
				dispatch(createLogSuccess())
			})
			.catch(error => {
				dispatch(createLogFail(error))
			})
	}
}
