// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// 此文件将在测试之前执行，可以用于设置一些全局配置

// jest-dom 为 jest 添加了一些自定义的 matchers，用于断言 dom 节点
import '@testing-library/jest-dom';

// import '@testing-library/jest-dom/extend-expect';
// 配置 react 的适配器，这样才能根据 react 的虚拟 dom 生成 dom 节点树
import Enzyme from 'enzyme';
// import Adaptor from 'enzyme-adapter-react-16'; // enzyme 兼容 react-16
import Adaptor from '@wojtekmaj/enzyme-adapter-react-17' // enzyme 兼容 react-17
Enzyme.configure({ adapter: new Adaptor() });