import Message from './Message'

const MessageList = (props: {messages: {content: string}[]}) => {
  return <ul>
    {props.messages.map((item, index) => <Message message={item.content} key={index} />)}
  </ul>
}

export default MessageList