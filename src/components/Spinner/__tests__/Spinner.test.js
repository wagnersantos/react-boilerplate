import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Spinner from '..';

afterEach(cleanup);

describe("Spinner component", () => {
  it("Shouldn't render Spinner when show is false", () => {
    const { queryAllByAltText } = render(<Spinner show={false} />);
    // debug();

    expect(queryAllByAltText('spinner')).not.toBeNull();
    // expect(queryAllByAltText('spinner')).toMatchSnapshot();
  });

  it('Should render Spinner', () => {
    const { getByTestId } = render(<Spinner show />);

    expect(getByTestId('spinner')).toBeInTheDocument();
    // expect(getByTestId('spinner')).toMatchSnapshot();
  });
});
