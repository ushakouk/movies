import { modal } from "../../../../src/store/reducer/parts";
import { createOrEditMovie, deleteMovie, closeModal } from '../../../../src/store/actions/modal';
import { MODALS } from "../../../../src/store/constants/constants";

describe('Modal reducer', () => {
  const EXPECTED_INITIAL_STATE = {
    modal: null,
    movie: null
  }

  let state;

  test('init', () => {
    state = modal()
    expect(state).toEqual(EXPECTED_INITIAL_STATE);
  })

  test('create / edit movie', () => {
    state = modal(state, createOrEditMovie("movie object"))

    expect(state.modal).toEqual(MODALS.CREATE_OR_EDIT_MOVIE)
    expect(state.movie).toEqual("movie object")
  })

  test('delete movie', () => {
    state = modal(state, deleteMovie(1))

    expect(state.modal).toEqual(MODALS.CONFIRM_DELETE_MOVIE)
    expect(state.movie).toEqual({ id: 1 })
  })

  test('close modal', () => {
    state = modal(state, closeModal())

    expect(state).toEqual(EXPECTED_INITIAL_STATE)
  })
})