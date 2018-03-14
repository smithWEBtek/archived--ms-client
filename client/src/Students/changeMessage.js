import React from 'react'

const changeMessage = (props) => {

	return (
		<div>
			<form>
				<input
					value={props.message}
					onSubmit={props.updateMessage}
				/><br />
				<button type='button'>ChangeMessage</button>
			</form>
		</div>
	)
}

export default changeMessage