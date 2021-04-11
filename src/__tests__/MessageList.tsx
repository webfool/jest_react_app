import MessageList from '../components/MessageList'
import { mount } from 'enzyme'

test('测试 MessageList', () => {
  const messages = [
    {content: 'item1'},
    {content: 'item2'}
  ]

  // 通过 shallow 只能对当前组件做断言，比如能对 Message 断言，但不能对 li 断言
  // const wrapper = shallow(<MessageList messages={messages} />)
  // const listItems = wrapper.find(Message)

  // 通过 mount 能对组件及其子组件进行断言
  const wrapper = mount(<MessageList messages={messages} />)
  const listItems = wrapper.find('li')
  expect(listItems).toHaveLength(2)
  expect(listItems.at(0).text()).toContain('item1')
  expect(listItems.at(1).text()).toContain('item2')
})