import React from "react";
import Home from "../../../src/components/home/Home";
import { renderWithStoreProvider, routerWrapper } from "../../testUtil";
import { getMovieRequest, getMoviesRequest } from "../../../src/api/requests";
import { MOVIES } from "../../__mocks__/dataMock";
import { GENRES, SORTES } from "../../../src/store/constants/constants";
import { screen, waitForElementToBeRemoved, getByRole, getByText, getAllByRole } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import "regenerator-runtime";
jest.mock("../../../src/api/requests");

describe('Home', () => {
  initMocks();
  afterEach(() => jest.clearAllMocks())

  test('Init verify', async () => {
    //init
    const { asFragment } = await renderWithStoreProvider(routerWrapper(<Home />, ""));
    expect(asFragment()).toMatchSnapshot();

    //requests verify
    expect(getMoviesRequest).toHaveBeenCalledTimes(1)
    expect(getMoviesRequest).toHaveBeenCalledWith(undefined, GENRES.ALL, SORTES.RELEASE_DATE.value)

    //header verify: empty search input, only search button is visible
    const searchBlock = screen.getByRole('search-block')
    expect(searchBlock).toBeInTheDocument()
    expect(getByRole(searchBlock, 'textbox').value).toEqual("")
    expect(getAllByRole(searchBlock, 'button').length).toEqual(2)
    expect(getByText(searchBlock, 'SEARCH').classList.contains('hidden')).not.toBeTruthy();
    expect(getByText(searchBlock, 'RESET').classList.contains('hidden')).toBeTruthy();

    //content navigation verify
    expect(screen.getByText(GENRES.ALL).classList.contains('selected')).toBeTruthy();
    expect(screen.getByText(SORTES.RELEASE_DATE.name)).toBeInTheDocument();

    //content movies container verify
    expect(screen.getAllByRole('movie')).toHaveLength(MOVIES.length)

    //footer verify
    expect(screen.getByRole('footer')).toBeInTheDocument()
  })

  test('Change genre verify', async () => {
    await renderWithStoreProvider(routerWrapper(<Home />, ""));

    const horrorSelector = await screen.getByText('HORROR', { exact: true, selector: '.genre.selector' })
    await userEvent.click(horrorSelector)

    //content navigation verify
    await expect(horrorSelector.classList.contains('selected')).toBeTruthy()

    //requests verify
    expect(getMoviesRequest).toHaveBeenCalledTimes(2)
    expect(getMoviesRequest).toHaveBeenCalledWith(undefined, GENRES.HORROR, SORTES.RELEASE_DATE.value)

    //content movies container verify
    expect(screen.getAllByRole('movie')).toHaveLength(1)
  })

  test('Change sort verify', async () => {
    await renderWithStoreProvider(routerWrapper(<Home />, ""));

    //expand dropdown and click on rating sort
    const sortSelector = await screen.getByText('RELEASE DATE')
    await userEvent.click(sortSelector)
    const ratingSort = await screen.getByText('RATING')
    await userEvent.click(ratingSort)

    //content navigation verify
    expect(screen.getByText('RATING')).toBeInTheDocument()

    //requests verify
    expect(getMoviesRequest).toHaveBeenCalledTimes(2)
    expect(getMoviesRequest).toHaveBeenCalledWith(undefined, GENRES.ALL, SORTES.RATING.value)

    //content movies container verify
    expect(screen.getAllByRole('movie')).toHaveLength(MOVIES.length)
  })

  test('Search movie verify', async () => {
    await renderWithStoreProvider(routerWrapper(<Home />, ""));

    //do search
    await userEvent.type(screen.getByRole('textbox'), MOVIES[0].title)
    await userEvent.click(screen.getByText(/SEARCH/i))

    //requests verify
    expect(getMoviesRequest).toHaveBeenCalledTimes(2)
    expect(getMoviesRequest).toHaveBeenCalledWith(MOVIES[0].title, GENRES.ALL, SORTES.RELEASE_DATE.value)

    //header verify: typed value still in search input, reset button is visible
    const searchBlock = screen.getByRole('search-block')
    expect(searchBlock).toBeInTheDocument()
    const searchValue = getByRole(searchBlock, 'textbox').value
    expect(searchValue).toEqual(MOVIES[0].title)
    expect(getByText(searchBlock, 'RESET').classList.contains('hidden')).not.toBeTruthy();

    //movies container verify: only found movie is displayed and name is equal with search value
    expect(screen.getAllByRole('movie')).toHaveLength(1)
    const movieTitle = screen.getByRole('movie').getElementsByClassName('name')[0].innerHTML;
    expect(searchValue).toEqual(movieTitle)
  })

  test('Click on movie verify', async () => {
    await renderWithStoreProvider(routerWrapper(<Home />, ""));

    //header verify: search block is visible
    const searchBlock = screen.getByRole('search-block')
    expect(searchBlock).toBeInTheDocument()

    //click on movie
    const firstMovieInContainer = screen.getAllByRole('movie')[0];
    userEvent.click(firstMovieInContainer)
    await waitForElementToBeRemoved(() => screen.getByRole('search-block'))

    //request verify
    expect(getMovieRequest).toHaveBeenCalledTimes(1)
    expect(getMovieRequest).toHaveBeenCalledWith(MOVIES[0].id.toString())

    //header verify: Movie details is displayed and refers to clicked movie
    expect(screen.getByRole('movie-details')).toBeInTheDocument()
    const movieDetailsTitle = screen.getByRole('movie-details').getElementsByClassName('details_title')[0].innerHTML
    const movieTitle = firstMovieInContainer.getElementsByClassName('name')[0].innerHTML;
    expect(movieDetailsTitle).toEqual(movieTitle.toUpperCase())
  })

  test('Open dialogs verify', async () => {
    await renderWithStoreProvider(routerWrapper(<Home />, ""));

    //verify no modal on page
    expect(screen.queryByRole('modal')).toBeNull()

    const firstMovieInContainer = await screen.getAllByRole('movie')[0];

    //open movie context and chose edit
    await userEvent.click(firstMovieInContainer.getElementsByClassName('context_menu__button')[0])
    await userEvent.click(screen.getByText('Edit'))

    //verify edit modal
    const editDialog = screen.getByRole('modal')
    expect(editDialog).toBeInTheDocument()
    expect(screen.getByText('EDIT MOVIE')).toBeInTheDocument()

    //close edit dialog and verify
    await userEvent.click(editDialog.getElementsByClassName('close-dialog-icon')[0])
    expect(screen.queryByRole('modal')).toBeNull()


    //open movie context and chose delete
    await userEvent.click(firstMovieInContainer.getElementsByClassName('context_menu__button')[0])
    await userEvent.click(screen.getByText('Delete'))

    //verify delete modal
    const deleteDialog = screen.getByRole('modal')
    expect(deleteDialog).toBeInTheDocument()
    expect(screen.getByText('DELETE MOVIE')).toBeInTheDocument()

    //close delete dialog and verify
    await userEvent.click(deleteDialog.getElementsByClassName('close-dialog-icon')[0])
    expect(screen.queryByRole('modal')).toBeNull()
  })
})

function initMocks() {
  getMoviesRequest.mockImplementation(mockedGetMovies)
  getMovieRequest.mockImplementation((id) => Promise.resolve(MOVIES[0]))
}

function mockedGetMovies(search, genre, sort) {
  return (search || genre != GENRES.ALL)
    ? Promise.resolve({ data: [MOVIES[0]], totalAmount: 1 })
    : Promise.resolve({ data: MOVIES, totalAmount: MOVIES.length })
}