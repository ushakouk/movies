import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "../../../../src/components/error/pages/ErrorPage";
import NotFound from "../../../../src/components/error/pages/NotFound";

describe('Error pages', () => {

  test('ErrorPage snapshot', () => {
    const { asFragment } = render(<ErrorPage />);

    expect(asFragment(<ErrorPage />)).toMatchSnapshot();
  })

  test('NotFound snapshot', () => {
    const { asFragment } = render(<NotFound />);

    expect(asFragment(<NotFound />)).toMatchSnapshot();
  })
})
