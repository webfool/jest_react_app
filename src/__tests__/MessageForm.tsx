import MessageForm from '../components/MessageForm'
import { shallow } from 'enzyme'

describe('测试 MessageForm', () => {
  test('应该渲染出一个 input 框和一个 button', () => {
    const addMessage = jest.fn()
    const wrapper = shallow(<MessageForm addMessage={addMessage} />)
    const input = wrapper.find('input')
    const button = wrapper.find('button')
    expect(input).toHaveLength(1)
    expect(button).toHaveLength(1)
  })

  test('不输入内容，点击提交，函数不被调用', () => {
    const addMessage = jest.fn()
    const wrapper = shallow(<MessageForm addMessage={addMessage} />)
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: ''}})
    const button = wrapper.find('button')
    button.simulate('click')
    expect(addMessage).not.toHaveBeenCalled()
  })

  test('输入内容不为空，然后提交', () => {
    const addMessage = jest.fn()
    const wrapper = shallow(<MessageForm addMessage={addMessage} />)
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'aaa'}})
    const btn = wrapper.find('button')
    btn.simulate('click')
    expect(addMessage).toBeCalled()
    // expect(addMessage.mock.calls[0][0]).toBe('aaa')
    expect(addMessage).toHaveBeenLastCalledWith('aaa')
  })

})
