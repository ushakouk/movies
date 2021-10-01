import React, { useState } from 'react';
import Dialog from '../../common/dialog/Dialog';
import Title from '../../common/title/Title';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import TextArea from '../../common/textarea/TextArea';
import MultiSelect from '../../common/multiselect/MultiSelect';
import { parseTime } from '../../../util/util';

const GENRES = ["Drama", "Romance", "Fantasy", "Adventure", "Science Fiction"]
const DEFAULT_MOVIE_STATE = {
  title: "",
  release_date: "",
  poster_path: "",
  vote_average: "",
  genres: [],
  runtime: "",
  overview: ""
}

function EditMovie(props) {
  const [movie, setMovie] = useState(prepareMovie());

  function prepareMovie() {
    return props.movie
      ? { ...props.movie, runtime: parseTime(props.movie.runtime) }
      : DEFAULT_MOVIE_STATE
  }

  return (
    <Dialog close={() => props.close()}>
      <Title>{(props.movie ? 'EDIT' : 'ADD') + ' MOVIE'}</Title>
      <div className="row">
        <Input
          label="TITLE"
          size="wide"
          value={movie.title}
          type="text"
          placeholder="Title"
          onChange={e => setMovie({ ...movie, title: e.target.value })}
        />
        <Input
          label="RELEASE DATE"
          size="small"
          value={movie.release_date}
          type="date"
          placeholder="Select Date"
          onChange={e => setMovie({ ...movie, release_date: e.target.value })}
        />
      </div>
      <div className="row">
        <Input
          label="MOVIE URL"
          size="wide"
          value={movie.poster_path}
          type="url"
          placeholder="https://"
          onChange={e => setMovie({ ...movie, poster_path: e.target.value })}
        />
        <Input
          label="RATING"
          size="small"
          value={movie.vote_average}
          type="number"
          placeholder="7.8"
          onChange={e => setMovie({ ...movie, vote_average: e.target.value })}
        />
      </div>
      <div className="row">
        <MultiSelect
          label="GENRE"
          values={movie.genres}
          options={GENRES}
          placeholder="Select Genre"
          onChange={values => setMovie({ ...movie, genres: values })}
        />
        <Input
          label="RUNTIME"
          size="small"
          value={movie.runtime}
          type="text"
          placeholder="minutes"
          onChange={e => setMovie({ ...movie, runtime: e.target.value })}
        />
      </div>
      <TextArea
        label="OVERVIEW"
        value={movie.overview}
        placeholder="Movie description"
        rows="7"
        onChange={e => setMovie({ ...movie, overview: e.target.value })}
      />

      <Button style="primary" onClick={() => props.submit(movie)}>SUBMIT</Button>
      <Button style="negative" onClick={() => setMovie(prepareMovie())}>RESET</Button>
    </Dialog>
  )
}

export default EditMovie;