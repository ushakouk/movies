import React from "react";
import Header from "../../../../src/components/home/header/Header";
import { storeProviderRender } from "../../../testUtil";
import { screen, fireEvent } from "@testing-library/react";
import { getMovieRequest } from "../../../../src/api/requests";
jest.mock("../../../../src/api/requests");

describe('Header', () => {
  const SEARCH_VAL = 'hey';
  const DETAILS = { genres: [] }
  
  test('Header snapshot', () => {
    getMovieRequest.mockImplementation((id) => Promise.resolve({ movie: { id, ...DETAILS }}))
    const onSearch = jest.fn();
    const onClose = jest.fn();
    
    const header = <Header closeMovieDetails={onClose} setSearchValue={onSearch} />;

    const { asFragment } = storeProviderRender(header);
    expect(asFragment(header)).toMatchSnapshot();
    
    const input = screen.getByRole('textbox');
    expect(input.value).toEqual("")

    fireEvent.change(input, { target: { value: SEARCH_VAL } })
    expect(input.value).toEqual(SEARCH_VAL)

    fireEvent.click(screen.getByText(/SEARCH/i))
    expect(onSearch).toHaveBeenCalledTimes(1)
    expect(onSearch).toHaveBeenCalledWith(SEARCH_VAL)

    fireEvent.click(screen.getByText(/RESET/i))
    expect(onSearch).toHaveBeenCalledTimes(2)
    expect(onSearch).toHaveBeenCalledWith(null)
  })
})
