import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('detal page component', () => {
  afterEach(() => cleanup());
  it ('renders detal page', () => {
    const { asFragment } = render(
      <DetailPage 
        character={{
          name: 'someName',
          image: 'some image',
          gender: 'some Gender',
          species: 'some Species'
        }}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
