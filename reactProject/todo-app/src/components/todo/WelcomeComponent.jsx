import React, { Component } from "react";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.state = {
      welcomeMessage: ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    this.handleError = this.handleError.bind(this)

  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>

        {/* <div className = "container">
        {this.state.error}
      </div> */}

        <div className="container">
          Welcome {this.props.params.name}.
          You can manage your todos <a href="/todos">here</a>.
        </div>
        <div className="container">
          Click here to get a customized welcome message.
          <button onClick={this.retrieveWelcomeMessage}
            className="btn btn-success">Get Welcome Message</button>
        </div>
        <div className="container">
          {this.state.welcomeMessage}
        </div>

      </>
    )
  }

  retrieveWelcomeMessage() {
    // HelloWorldService.executeHelloWorldService()
    // .then( response => this.handleSuccessfulResponse(response) )

    //   HelloWorldService.executeHelloWorldBeanService()
    //       .then( response => this.handleSuccessfulResponse(response) )
    //       //.catch()
    // }

    HelloWorldService.executeHelloWorlPathVariableService(this.props.params.name)
      .then(response => this.handleSuccessfulResponse(response))
      .catch(error => this.handleError(error))
  }

  handleSuccessfulResponse(response) {
    console.log(response)
    this.setState({ welcomeMessage: response.data.message })
  }


  handleError(error) {
    //sometimes you might not even get a response back when there is an error.

    console.log(error.response)
    let errorMessage = ""
    if (errorMessage) {
      errorMessage += error.errorMessage
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message
    }
    this.setState({ welcomeMessage: errorMessage })
  }

}

export default WelcomeComponent