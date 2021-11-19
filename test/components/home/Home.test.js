import React from "react";
import Home from "../../../src/components/home/Home";
import { renderWithStoreProvider, routerWrapper } from "../../testUtil";
import { getMovieRequest, getMoviesRequest } from "../../../src/api/requests";
import { MOVIES } from "../../__mocks__/dataMock";
import { GENRES, SORTES } from "../../../src/store/constants/constants";

import { screen, waitForElementToBeRemoved, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import "regenerator-runtime";
jest.mock("../../../src/api/requests");

describe('Home', () => {

  afterEach(cleanup)

  test('Home init snapshot', async () => {
    getMoviesRequest.mockImplementation(mockedGetMovies)
    const routeWrappedHome = routerWrapper(<Home />, "")
    let { asFragment } = renderWithStoreProvider(routeWrappedHome);

    await waitForElementToBeRemoved(() => screen.getByRole('loader'))

    expect(asFragment(routeWrappedHome)).toMatchSnapshot();
  })


  test('Home component init, search, select movie', async () => {
    getMoviesRequest.mockImplementation(mockedGetMovies)
    getMovieRequest.mockImplementation((id) => Promise.resolve(MOVIES[0]))

    //init
    renderWithStoreProvider(routerWrapper(<Home />, ""));
    await waitForElementToBeRemoved(() => screen.getByRole('loader'))

    expect(getMoviesRequest).toHaveBeenCalledTimes(2)
    expect(getMoviesRequest).toHaveBeenCalledWith(undefined, GENRES.ALL, SORTES.RELEASE_DATE.value)

    const search = screen.getByRole('textbox');
    expect(screen.getByRole('search-block')).toBeInTheDocument()
    expect(search.value).toEqual("")

    expect(screen.getByText(GENRES.ALL)).toBeInTheDocument();
    expect(screen.getByText(SORTES.RELEASE_DATE.name)).toBeInTheDocument();

    expect(screen.getAllByRole('movie')).toHaveLength(MOVIES.length)

    //search
    userEvent.type(search, MOVIES[0].title)
    userEvent.click(screen.getByText(/SEARCH/i))
    await waitForElementToBeRemoved(() => screen.getByRole('loader'))

    expect(getMoviesRequest).toHaveBeenCalledTimes(3)
    expect(getMoviesRequest).toHaveBeenCalledWith(MOVIES[0].title, GENRES.ALL, SORTES.RELEASE_DATE.value)

    expect(screen.getAllByRole('movie')).toHaveLength(1)
    expect(search.value).toEqual(screen.getByRole('movie').getElementsByClassName('name')[0].innerHTML)

    //select movie
    userEvent.click(screen.getByRole('movie'))
    await waitForElementToBeRemoved(() => screen.getByRole('loader'))

    expect(screen.getByRole('movie-details')).toBeInTheDocument()
    expect(screen.getByRole('movie-details').getElementsByClassName('details_title')[0].innerHTML)
      .toEqual(screen.getByRole('movie').getElementsByClassName('name')[0].innerHTML.toUpperCase())
  })
})

function mockedGetMovies(search) {
  return search
    ? Promise.resolve({ data: [MOVIES[0]], totalAmount: 1 })
    : Promise.resolve({ data: MOVIES, totalAmount: MOVIES.length })
}