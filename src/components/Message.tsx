const Message = (props: {message: string}) => {
  return <>
    <li className="list-item">{props.message}</li>
  </>
}

export default Message