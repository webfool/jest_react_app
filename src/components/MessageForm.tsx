import { useState, useCallback } from "react"

const MessageForm = (props: {addMessage: Function}) => {
  const [value, setValue] = useState('')

  const {addMessage} = props
  const submit = useCallback(function() {
    if (value === '') return
    addMessage(value)
    setValue('')
  }, [value, addMessage])

  return <div>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={submit}>提交</button>
  </div>
}

export default MessageForm
