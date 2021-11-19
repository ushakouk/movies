import React from "react";
import Header from "../../../../src/components/home/header/Header";
import { renderWithStoreProvider } from "../../../testUtil";
import { getMovieRequest } from "../../../../src/api/requests";
import { screen, fireEvent, waitForElementToBeRemoved, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import "regenerator-runtime";
jest.mock("../../../../src/api/requests");

describe('Header', () => {
  const SEARCH_VAL = 'hey';
  const MOVIE_ID = 1;
  const movie = { id: MOVIE_ID, genres: [], title: 'Yeah', release_date: '1999-12-12', runtime: '120' }
  
  afterEach(cleanup)

  test('Header init snapshot', () => {
    const { asFragment } = renderWithStoreProvider(<Header />);

    expect(asFragment()).toMatchSnapshot();
  })

  test('Header input, search, reset', () => {
    const onSearch = jest.fn();

    renderWithStoreProvider(<Header setSearchValue={onSearch} />);

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

  test('Header show and close movie details', async () => {
    getMovieRequest.mockImplementation((id) => Promise.resolve(movie))
    const onClose = jest.fn();

    const { rerender } = renderWithStoreProvider(<Header closeMovieDetails={onClose} movieId={MOVIE_ID}/>);
    
    await waitForElementToBeRemoved(() => screen.getByText(/SEARCH/i))

    expect(getMovieRequest).toHaveBeenCalledTimes(1)
    expect(getMovieRequest).toHaveBeenCalledWith(MOVIE_ID)

    const toSearchModeButton = screen.getByRole('toSearchMode')
    expect(toSearchModeButton).toBeInTheDocument()
    expect(screen.getByRole('movie-details')).toBeInTheDocument()

    
    fireEvent.click(toSearchModeButton)
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(<Header />)
    
    expect(screen.getByRole('search-block')).toBeInTheDocument()    
  })
})
