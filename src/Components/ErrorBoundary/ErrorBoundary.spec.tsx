import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

const BuggyComponent = () => null;

describe('ErrorBoundary', () => {
  let wrapper;
  const mountErrorBoundary = () =>
    (wrapper = mount(
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>,
    ));
  it('should match the snapshot', () => {
    mountErrorBoundary();
    expect(wrapper).toMatchSnapshot();
  });
  it('should display an error if the child component throws', () => {
    mountErrorBoundary();
    const error = new Error('test error');
    wrapper.find(BuggyComponent).simulateError(error);
    expect(wrapper.find('[test-id="text-error"]').text()).toBe(error.toString());
  });
});
