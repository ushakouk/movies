import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "../../../../src/components/error/pages/ErrorPage";

describe('ErrorPage', () => {

  test('ErrorPage snapshot', () => {
    const { asFragment } = render(<ErrorPage />);

    expect(asFragment(<ErrorPage />)).toMatchSnapshot();
  })
})
