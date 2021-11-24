describe('Movies', () => {
  const SEARCHABLE_MOVIE = 'Transformers 7';
  const SEARCHABLE_MOVIE_URL = SEARCHABLE_MOVIE.replace(' ', '%20');
  const SEARCHABLE_MOVIE_ID = '424785';
  const MOVIES_LOAD_LIMIT = 25;

  it('End-to-end', async () => {
    await browser.url('http://localhost:8081/')

    await expect(browser).toHaveUrl('http://localhost:8081/search')
    await expect($('#search-input')).toHaveValue("")
    await expect($('.genre.selected')).toHaveText("ALL")
    await expect($('.sort .select__selected')).toHaveText("RELEASE DATE")
    await expect($('.movies_container')).toHaveChildren(MOVIES_LOAD_LIMIT)
    

    await $('#search-input').setValue(SEARCHABLE_MOVIE)
    await $('#submit-search').click()
    
    await expect(browser).toHaveUrl(`http://localhost:8081/search/${SEARCHABLE_MOVIE_URL}`)
    await expect($('#search-input')).toHaveValue(SEARCHABLE_MOVIE)
    await expect($('.movies_container')).toHaveChildren(1)
    await expect($('.movies_container [role="movie"] .name')).toHaveText(SEARCHABLE_MOVIE)
    

    await $('.movies_container [role="movie"]').click()

    await expect(browser).toHaveUrl(`http://localhost:8081/search/${SEARCHABLE_MOVIE_URL}?movie=${SEARCHABLE_MOVIE_ID}`)
    await expect($('.header .movie-details .details_title')).toHaveText(SEARCHABLE_MOVIE, { ignoreCase: true })
    await expect($('.header .search-block')).not.toExist()
  });
});

