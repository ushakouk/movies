import axios from 'axios';
import { GENRES, API } from '../store/constants/constants';

export function getMoviesRequest(search, filter, sortBy, loadIterator) {
   return new Promise((resolve, reject) =>
      axios.get(`http://localhost:4000/movies`, {
         params: {
            search,
            searchBy: search ? API.SEARCH_BY : null,
            filter: (!filter || filter === GENRES.ALL) ? [] : filter,
            sortBy,
            sortOrder: API.SORT_ORDER,
            limit: API.LOAD_LIMIT,
            offset: loadIterator ? loadIterator * API.LOAD_LIMIT : 0
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
