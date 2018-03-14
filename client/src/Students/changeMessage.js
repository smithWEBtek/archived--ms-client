import React, { Component } from 'react'

class ChangeMessage extends Component {
	state = {
		message: 'enter new message'
	}

	handleChange = (e) => {
		// console.log(e.target.value);
		const { name, value } = e.target;
		this.setState({ [name]: value });
		e.preventDefault()
	}

	handleSubmit(event) {
		let msg = this.state.message
		console.log('[handleSubmit msg: ]', msg);

		this.props.updateMessage(msg)
		event.preventDefault()
	}

	render() {
		const changeMessageForm = (
			<form onSubmit={(data) => this.handleSubmit(data)}>
				<input
					type="text"
					name="message"
					value={this.state.message}
					onChange={(event) => this.handleChange(event)}
				/><br />
				<button>ChangeTheMessage</button>
			</form>
		)

		return (
			<div>
				{changeMessageForm}
			</div>
		)
	}
}

export default ChangeMessage