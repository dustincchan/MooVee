# Phase 3: Flux Architecture and Movie/MovieList CRUD

## Rails
### Models


### Controllers
* UsersController
* MoviesController
* MoviesListsController
* CommentsController

### Views

## Flux
### Views (React Components)
* MoviesIndex
  - MoviesIndexItem
* MovieLists Index
  - MovieLists IndexItem



### Stores

### Actions
* ApiActions.receiveAllMovies -> triggered by ApiUtil
* ApiActions.receiveALLMovieLists
* ApiActions.receiveSingleMovie
* ApiActions.deleteMovieList
* MovieActions.fetchAllMovies -> triggers ApiUtil
* MovieListActions.fetchAllMovieLists -> triggers ApiUtil
* Movie.fetchSingleMovie
* MovieList.fetchSingleMovieList
* MovieListActions.createMovieList
* MovieListActions.editMovieList
* MovieListActions.destroyMovieList

### ApiUtil
* ApiUtil.fetchAllMovies
* ApiUtil.fetchSingleMovie
* ApiUtil.fetchAllMovieLists
* ApiUtil.fetchSingleMovieList
* ApiUtil.createMovieList
* ApiUtil.editMovieList
* ApiUtil.destroyMovieList

## Gems/Libraries
* Flux Dispatcher (npm)
