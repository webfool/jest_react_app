### 测试 react 组件的步骤详解
1. 安装相应的包
```js
npm install -D enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16
```

2. 在 src/setupTests.ts 中配置适配器
```js
import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16'; // enzyme 兼容 react-16
// import Adaptor from '@wojtekmaj/enzyme-adapter-react-17' // enzyme 兼容 react-17
Enzyme.configure({ adapter: new Adaptor() });
```

3. 在 __tests__ 下生成测试文件，文件内部形如：
```js
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
```

### enzyme 中 shallow、mount、render 的区别
shallow 生成的是 react 树，它只能对当前组件进行断言
mount 生成的是 react 树，它能对当前组件及其子组件进行断言
render 生成的是普通 html 结构

mount 对比 shallow 耗时更长、占用的内存也更多，所以当 shallow 能满足需求时，优先选用 shallow

### 测试组件的角度
1. 测试元素是否正常生成
2. 测试组件的初始状态是否正确
3. 测试组件向子组件传递的状态是否正确
4. 测试自身交互之后，ui 或者状态是否正确
5. 测试其他组件交互后，当前组件的 ui 或者状态是否正确