import React from 'react'
import { mount, shallow } from 'enzyme'
import { sleep } from '../../../jest.utils'
import toJson from 'enzyme-to-json'
import Checkbox from '../index'

describe('Checkbox', () => {
  it('render basically', () => {
    const wrapper = shallow(<Checkbox checked={true}>checked</Checkbox>);

    expect(toJson(wrapper.render())).toMatchSnapshot()

    expect(wrapper.contains('checked')).toEqual(true)
  })

  it('onChange', async () => {
    const testState = { checked: true }
    const onChange = () => {
      testState.checked = !testState.checked
    }
    const mountWrapper = mount(<Checkbox checked={testState.checked} onChange={onChange} beforeClick={() => true}>checked</Checkbox>)

    expect(
      mountWrapper
        .find('.ant-checkbox-input')
        .at(0)
        .prop('checked'),
    ).toBe(true)

    mountWrapper
      .find('.ant-checkbox-input')
      .at(0)
      .simulate('change')

    await sleep(100)

    expect(testState.checked).toEqual(false)
  })

  it('beforeClick', async () => {
    const testState = { checked: true }
    const onChange = () => {
      testState.checked = !testState.checked
    }
    const mountWrapper = mount(<Checkbox checked={true} onChange={onChange} beforeClick={() => false}/>)
    mountWrapper
      .find('.ant-checkbox-input')
      .at(0)
      .simulate('change')

    await sleep(100)

    expect(testState.checked).toEqual(true)
  })

  it('disabled and indeterminate', () => {
    const wrapper = mount(<Checkbox checked={false} disabled indeterminate/>)

    expect(toJson(wrapper.render())).toMatchSnapshot()

    expect(wrapper.find('.ant-checkbox-input').at(0).prop('disabled')).toEqual(true)
    expect(wrapper.exists('.ant-checkbox-indeterminate')).toEqual(true)
  })

  it('stopClickPropagation', () => {
    const onClick = jest.fn()
    const wrapper = mount(<div onClick={onClick}><Checkbox checked={false} stopClickPropagation/></div>)
    wrapper.find('.ant-checkbox-input').at(0).simulate('click')
    expect(onClick).not.toHaveBeenCalled()
  })
})