/* 
Button
tests:{
  should show title
  should handle click callback
  should not handle click callback while disabled
  should show spinner while loading and not handle click
}
*/

import React from 'react';
import { mount } from 'enzyme';
import Button from './index';
import {IButtonProps, IButtonLoadingProps} from '../../types/Button';

interface IProps extends IButtonProps, IButtonLoadingProps {}
describe('Button', () => {
  const onClick = jest.fn();
  const Proxy = (props: IProps) => (<Button {...props}/>);

  it('should show title', () => {
    const props = {
      onClick,
      children: 'Start'
    };

    const element = mount(<Proxy {...props}/>);

    const title = element.find('span');
    expect(title.childAt(0).text()).toEqual(props.children);
  });

  it('should handle click callback', () => {
    const onClick = jest.fn();

    const props = {
      onClick,
      children: 'Start'
    };

    const element = mount(<Proxy {...props}/>);
    element.simulate('click');;
    expect(onClick).toHaveBeenCalled();
  });

  it('should not handle click callback while disabled', () => {
    const onClick = jest.fn();

    const props = {
      onClick,
      children: 'Start',
      disabled: true
    };

    const element = mount(<Proxy {...props}/>);
    element.simulate('click');;
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should show spinner while loading and not handle click', () => {
    const props = {
      onClick,
      children: 'Start',
      loading: true
    };

    const element = mount(<Proxy {...props}/>);

    const spinner = element.find('Spinner');
    expect(spinner.exists()).toEqual(true);
    element.simulate('click');;
    expect(onClick).not.toHaveBeenCalled();
  });
});