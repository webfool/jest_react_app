import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export default class MessageApp extends React.Component<any, {messages: {content: string}[]}> {
  constructor(props: any) {
    super(props)

    this.state = {
      messages: []
    }
  }

  addMessage = (content: string) => {
    this.setState({
      messages: [...this.state.messages, {content}]
    })
  }

  render() {
    return <div>
      <MessageList messages={this.state.messages} />
      <MessageForm addMessage={this.addMessage}/>
    </div>
  }
}