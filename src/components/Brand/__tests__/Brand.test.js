import React from 'react';
import { render, cleanup } from '@testing-library/react';
import logo from 'core/assets/images/logo.svg';

import Brand from '..';

afterEach(cleanup);

describe('Brand component', () => {
  it('Should render Brand', () => {
    const { container, getByTestId } = render(<Brand brandImage={logo} />);
    // debug()

    expect(getByTestId('brand')).toContainElement(container.querySelector('img'));
    // expect(getByTestId('brand')).toMatchSnapshot();
  });
});
