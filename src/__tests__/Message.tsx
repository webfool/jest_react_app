import Message from '../components/Message'
import { shallow } from 'enzyme'

test('测试 Message', () => {
  const message = '测试内容'
  const wrapper = shallow(<Message message={message} />)

  // 如果有一个元素，find 返回该元素；
  // 如果有多个元素，find 找到的是一个列表，可通过 at 方法获取第 n 个
  const li = wrapper.find('li')
  expect(li).toHaveLength(1)
  expect(li.at(0).text()).toBe(message)

  expect(li.prop('className')).toBe('list-item') // 获取属性值
})