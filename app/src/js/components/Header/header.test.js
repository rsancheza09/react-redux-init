import React from 'react';
import { shallow } from 'enzyme';

import Header from './';

const expect = global.expect;

describe('Header component', () => {
  it('should check the render', () => {
    const actual = shallow(<Header />);
    const expected = <h1>Cloud Cover</h1>;
    expect(actual.equals(expected));
  });
});
