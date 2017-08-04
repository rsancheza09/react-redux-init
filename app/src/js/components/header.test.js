import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const expect = global.expect;

describe('Header component', () => {
  it('should check the render', () => {
    const actual = shallow(<Header />);
    const expected = <h1>Leaflet and GeoJSON Spike | Challenge</h1>;
    expect(actual.equals(expected));
  });
});
