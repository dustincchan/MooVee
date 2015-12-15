# Phase 1: Rails Stuff: User Authentication, TVShow Setup
## Rails
### Models
* User
* TVShow

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::TVShowsController (index, show)

### Views
* application.html.erb

## Flux Setup
### Views (React Components)
* /tvshows/index.jsx
* /tvshows/show.jsx

### Stores
tvshow.js

### Actions
* tvshowActions.js

### ApiUtil
* ApiUtil.fetchAllTVShows
* ApiUtil.fetchSingleTVShow

## Gems/Libraries
* BCrypt (Gem)
* React
* React-DOM