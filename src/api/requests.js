import axios from 'axios';
import { GENRES } from '../store/constants/constants';

export function getMoviesRequest(filter, sortBy) {
   return new Promise((resolve, reject) =>
      axios.get(`http://localhost:4000/movies`, {
         params: {
            filter: filter === GENRES.ALL ? [] : filter,
            sortBy,
            sortOrder: 'desc',
            limit: 25
         }
      }).then(resp => resolve(resp.data))
         .catch(err => reject(err))
   );
}

export function createMoviesRequest(movie) {
   return new Promise((resolve, reject) =>
      axios.post(`http://localhost:4000/movies`, movie)
         .then(resp => resolve(resp.data))
         .catch(err => reject(err))
   );
}

export function updateMoviesRequest(movie) {
   return new Promise((resolve, reject) =>
      axios.put(`http://localhost:4000/movies`, movie)
         .then(resp => resolve(resp.data))
         .catch(err => reject(err))
   );
}

export function removeMovieRequest(id) {
   return new Promise((resolve, reject) =>
      axios.delete(`http://localhost:4000/movies/${id}`)
         .then((resp) => resolve())
         .catch((err) => reject(err))
   );
}
