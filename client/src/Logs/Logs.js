// import React, { Component } from 'react'
import React from 'react'
// import { connect } from 'react-redux'
// import * as actions from '../store/actions/index'

// class Logs extends Component {
const Logs = (props) => {

	// componentDidMount = () => {
	// 	props.onFetchLogs()
	// }


	let renderedLogs = <li> we are waiting for the logs to appear </li>

	console.log('props in Logs.js', props);

	if (props.logs) {
		renderedLogs = props.logs.map((log, index) => {
			return <li key={index}>{log.content}</li>
		})
	}

	return (
		<div>
			<ul>{renderedLogs}</ul>
		</div>
	)
}


// const mapStateToProps = state => {
// 	return {
// 		logs: state.lgs.logs
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onFetchLogs: dispatch = () => { (actions.fetchLogs()) }
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Logs)
export default Logs