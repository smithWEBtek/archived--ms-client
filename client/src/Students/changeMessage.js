import React, { Component } from 'react'

class ChangeMessage extends Component {
	state = {
		message: 'enter new message'
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		e.preventDefault()
	}

	handleSubmit(event) {
		let msg = this.state.message
		this.props.updateMessage(msg)
		event.preventDefault()
	}

	render() {
		const changeMessageForm = (
			<form onSubmit={(event) => this.handleSubmit(event)}>
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