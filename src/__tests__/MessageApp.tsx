import MessageApp from '../components/MessageApp'
import { mount } from 'enzyme'
import MessageList from '../components/MessageList'
import MessageForm from '../components/MessageForm'

// 1，测试元素是否正常生成
// 2. 测试组件的初始状态是否正确
// 3. 测试组件向子组件传递的状态是否正确
// 4. 测试自身交互之后，ui 或者状态是否正确
// 5. 测试其他组件交互后，当前组件的 ui 或者状态是否正确
describe('测试 MessageApp', () => {
  test('测试 MessageList 和 MessageForm 组件是否生成', () => {
    const wrapper = mount(<MessageApp />)
    const messageList = wrapper.find(MessageList)
    const messageForm = wrapper.find(MessageForm)

    expect(messageList).toHaveLength(1)
    expect(messageForm).toHaveLength(1)
  })

  test('测试 MessageApp 的初始状态是否正确', () => {
    const wrapper = mount(<MessageApp />)
    expect(wrapper.state()).toEqual({messages: []})
  })

  test('测试初始传递给 MessageList 和 MessageForm 的值是否正确', () => {
    // 传递给 MessageList 的参数是否正确
    const wrapper = mount(<MessageApp />)
    const messages = (wrapper.state() as any).messages
    const ListMessages = wrapper.find(MessageList).prop('messages')
    expect(messages).toBe(ListMessages)

    // 传递给 MessageForm 的参数是否正确
    const instance = wrapper.instance()
    const addMessage = (instance as any).addMessage
    const formAddMessage = wrapper.find(MessageForm).prop('addMessage')
    expect(addMessage).toBe(formAddMessage)
  })

  test('测试 MessageForm 提交之后，MessageApp 和 MessageList 的状态是否正确', () => {
    const wrapper = mount(<MessageApp />)
    const messageForm = wrapper.find(MessageForm)

    const newContent = 'aaa'
    const input = messageForm.find('input')
    input.simulate('change', {target: {value: newContent}})
    const btn = messageForm.find('button')
    btn.simulate('click')

    expect((wrapper.state() as any).messages).toEqual([{content: newContent}])

    // 更新玩状态之后需要重新取实例
    expect(wrapper.find(MessageList).prop('messages')).toEqual([{content: newContent}])
    
    const li = wrapper.find(MessageList).find('li')
    expect(li).toHaveLength(1)
  })
})
