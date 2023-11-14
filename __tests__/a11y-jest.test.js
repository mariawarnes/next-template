/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import RootLayout from '../app/layout'; // Import your top-level RootLayout component

expect.extend(toHaveNoViolations);

test('accessibility test for the whole application', async () => {
  const { container } = render(<RootLayout />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
