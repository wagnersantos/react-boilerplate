import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFound from '..';

afterEach(cleanup);

it('Should render NotFound', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  expect(getByTestId('notFound')).toBeInTheDocument();
  // expect(getByTestId('app')).toMatchSnapshot();
});
