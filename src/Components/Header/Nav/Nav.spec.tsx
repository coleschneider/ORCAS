import * as React from 'react'
import Nav from './Nav';




describe('Nav', () => {
  it('should render the link given in the to property', () => {
    const wrapper = shallow(<Nav to="test-link" handleSetActive={jest.fn()}/>)
    expect(wrapper.find('Link').childAt(0).text()).toBe('test-link')
  })
  it('should call the function with the id and element', () => {
    const handleSetActive = jest.fn()
    document.body.innerHTML = "<div id='test-link'>sads</div>"
    
    const wrapper = mount(<Nav to="test-link" handleSetActive={handleSetActive}/>)

    wrapper.find('Link').props().onSetActive()
    expect(handleSetActive).toBeCalled()
    
  })
})