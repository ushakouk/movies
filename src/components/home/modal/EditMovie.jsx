import React from 'react';
import { Formik, Form } from 'formik';
import Dialog from '../../common/dialog/Dialog';
import Title from '../../common/title/Title';
import FieldInput from '../../common/fields/input/FieldInput';
import Button from '../../common/button/Button';
import FieldTextArea from '../../common/fields/textarea/FieldTextArea';
import FieldMultiSelect from '../../common/fields/multiselect/FieldMultiSelect';
import * as Yup from 'yup';

const GENRES = ['Action', 'Adventure', 'Science Fiction', 'Fantasy', 'Thriller', 'Drama',
  'Family', 'Comedy', 'Horror', 'TV Movie', 'Documentary', 'History', 'Mystery', 'Crime', 'Romance', 'Music']
const DEFAULT_MOVIE_STATE = {
  title: "",
  release_date: "",
  poster_path: "",
  vote_average: "",
  genres: [],
  runtime: "",
  overview: "",
  tagline: "empty"
}

function EditMovie(props) {

  function initMovie() {
    return props.movie
      ? prepareMovie(props.movie)
      : DEFAULT_MOVIE_STATE
  }

  function prepareMovie(movie) {
    if (!movie.tagline) {
      movie.tagline = "empty"
    }
    if (!movie.runtime) {
      movie.runtime = 0;
    }
    return movie;
  }

  return (
    <Dialog close={props.close}>
      <Title>{(props.movie ? 'EDIT' : 'ADD') + ' MOVIE'}</Title>
      <Formik
        initialValues={initMovie()}
        validationSchema={EditMovieSchema}
        onSubmit={props.submit}
      >
        <Form>
          <div className="row">
            <FieldInput
              name="title"
              label="TITLE"
              size="wide"
              type="text"
              placeholder="Title"
            />
            <FieldInput
              name="release_date"
              label="RELEASE DATE"
              size="small"
              type="date"
              placeholder="Select Date"
            />
          </div>
          <div className="row">
            <FieldInput
              name="poster_path"
              label="MOVIE URL"
              size="wide"
              type="url"
              placeholder="https://"
            />
            <FieldInput
              name="vote_average"
              label="RATING"
              size="small"
              type="number"
              placeholder="7.8"
            />
          </div>
          <div className="row">
            <FieldMultiSelect
              label="GENRE"
              options={GENRES}
              placeholder="Select Genre"
            />
            <FieldInput
              name="runtime"
              label="RUNTIME"
              size="small"
              type="number"
              placeholder="minutes"
            />
          </div>
          <div className="row">
            <FieldTextArea
              name="overview"
              label="OVERVIEW"
              placeholder="Movie description"
              rows="7"
            />
          </div>
          <Button style="primary" type="submit">SUBMIT</Button>
          <Button style="negative" type="reset">RESET</Button>
        </Form>
      </Formik>
    </Dialog>
  )
}

export default EditMovie;

const EditMovieSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'Length must be less than 51')
    .required('Required'),
  release_date: Yup.string()
    .required('Required'),
  poster_path: Yup.string()
    .url('Must be valid url')
    .required('Required'),
  vote_average: Yup.number()
    .positive('Must be more than 0')
    .max(10, 'Must be less or equal than 10')
    .required('Required'),
  genres: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one genre to proceed')
    .required('Required'),
  runtime: Yup.number()
    .integer('Must be an integer')
    .min(1, 'Must be greater than 0')
    .max(9999, 'Must be less than 10000')
    .required('Required'),
  overview: Yup.string()
    .min(11, 'Length must be more than 10 symbols')
    .required('Required'),
});