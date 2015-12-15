# Phase 3: Flux Architecture and TVShow/TVShowList/Comment CRUD

## Rails
### Models


### Controllers
* UsersController
* TVShowsController
* TVShowsListsController
* CommentsController

### Views

## Flux
### Views (React Components)
* TVShowsIndex
  - TVShowsIndexItem
* TVShowLists Index
  - TVShowLists IndexItem



### Stores

### Actions
* ApiActions.receiveAllTVShows -> triggered by ApiUtil
* ApiActions.receiveALLTVShowLists
* ApiActions.receiveSingleTVShow
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.deleteComment
* ApiActions.deleteTVShowList
* TVShowActions.fetchAllTVShows -> triggers ApiUtil
* TVShowListActions.fetchAllTVShowLists -> triggers ApiUtil
* TVShow.fetchSingleTVShow
* TVShowList.fetchSingleTVShowList
* TVShowListActions.createTVShowList
* TVShowListActions.editTVShowList
* TVShowListActions.destroyTVShowList
* CommentActions.createComment
* CommentActions.destroyComment
* CommentACtions.editComment

### ApiUtil
* ApiUtil.fetchAllTVShows
* ApiUtil.fetchSingleTVShow
* ApiUtil.fetchAllComments
* ApiUtil.fetchAllTVShowLists
* ApiUtil.fetchSingleTVShowList
* ApiUtil.createTVShowList
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment
* ApiUtil.editTVShowList
* ApiUtil.destroyTVShowList

## Gems/Libraries
* Flux Dispatcher (npm)
