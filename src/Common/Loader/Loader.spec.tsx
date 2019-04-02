import * as React from 'react';
import Loader from './Loader'


describe('Loader', () => {
  it('should match the snapshot when isFetching is false', () => {
    const wrapper = shallow(<Loader isFetching={false}/>)
  })
  it('should match the snapshot when fetching', () => {
    const wrapper = shallow(<Loader isFetching={true}/>)
  })
})