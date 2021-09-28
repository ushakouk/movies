import React, { useEffect, useState } from 'react';
import Dialog from '../../common/dialog/Dialog';
import Title from '../../common/title/Title';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import TextArea from '../../common/textarea/TextArea';
import MultiSelect from '../../common/multiselect/MultiSelect';

const DEFAULT_STATE = {
  title: "",
  release_date: "",
  poster_path: "",
  vote_average: "",
  genres: [],
  runtime: "",
  overview: ""
}

const GENRES = ["Drama", "Romance", "Fantasy", "Adventure", "Science Fiction"]

function EditMovie({ movie, close, submit }) {
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    if (movie.id) {
      setState({ ...movie, runtime: parseTime(movie.runtime) })
    }
  }, [])

  function parseTime(minutes) {
    return Math.trunc(minutes/60) + "h " + minutes%60 + "min"
  }

  return (
    <Dialog close={() => close()}>
      <Title>{(movie.id ? 'EDIT' : 'ADD') + ' MOVIE'}</Title>
      <div className="row">
        <Input label="TITLE" size="wide" value={state.title} type="text" placeholder="Title" onChange={e => setState({ ...state, title: e.target.value })} />
        <Input label="RELEASE DATE" size="small" value={state.release_date} type="date" placeholder="Select Date" onChange={e => setState({ ...state, release_date: e.target.value })} />
      </div>
      <div className="row">
        <Input label="MOVIE URL" size="wide" value={state.poster_path} type="url" placeholder="https://" onChange={e => setState({ ...state, poster_path: e.target.value })} />
        <Input label="RATING" size="small" value={state.vote_average} type="number" placeholder="7.8" onChange={e => setState({ ...state, vote_average: e.target.value })} />
      </div>
      <div className="row">
        <MultiSelect label="GENRE" values={state.genres} options={GENRES} placeholder="Select Genre" onChange={values => setState({ ...state, genres: values })} />
        <Input label="RUNTIME" size="small" value={state.runtime} type="text" placeholder="minutes" onChange={e => setState({ ...state, runtime: e.target.value })} />
      </div>
      <TextArea label="OVERVIEW" value={state.overview} placeholder="Movie description" rows="7" onChange={e => setState({ ...state, overview: e.target.value })} />

      <Button style="primary" onClick={() => submit()}>SUBMIT</Button>
      <Button style="negative" onClick={() => setState(movie.id ? movie : DEFAULT_STATE)}>RESET</Button>
    </Dialog>
  )
}

export default EditMovie;