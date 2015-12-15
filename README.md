# TeeVee.me

[Heroku link][heroku] 



## Minimum Viable Product

TeeVee.me is inspired by the beautiful movie-suggestion website Movieo.me.
TeeVee.me is built using Rails and React.js. Users are able to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, edit, delete, upvote, and read tv show lists
- [ ] Blacklist TV Shows, Favorite TV Shows, and Hide Shows already watched
- [ ] Search for TV Shows using an autocomplete search bar
- [ ] Search for TV Shows based on IMDB/Metacritic/RottenTomatoes rating
- [ ] Search for TV Shows based on other criteria (pg/pg13/R/etc rating, genre)

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Rails Stuff: User Authentication, TVShow Setup (1.5 Days)

Phase 1 is going will implement all of the sign in sign up front end web pages,
and back end security and database management. BCrypt will be used to encrypt
passwords. After that, I will set up the stores, actions and basic ApiUtil 
commands to query the database. I will be using IMDB's database integration

[Details][phase-one]

### Phase 2: TVShowLists/Comments Setup (2 days)

Phase 2 will somewhat mimic phase 1 but instead I will be setting up for
TVShow lists and their comments. This will be a major part of the user
interactivity of the website. Users will be able to write their own lists,
comment on other lists, and view an index of all lists by all users. 
Not only will I be doing the rails stuff, but also start implementing 
Flux views (through components) and finishing up all the initial ApiUtil 
commands.

[Details][phase-two]

### # Phase 3: Flux Architecture and TVShow/TVShowList/Comment CRUD (2.5 days)

Most of phase 3 will be spent working on getting all the flux set up and
then after that, the meat of the CRUD backend will be taken care of. 
This will be a juggernaut because I have to take care of setting up
creating, editing and destroying lists and comments, as well as fetching
TV shows, TV show lists and comment lists. There will be a lot of debug-
ging done during this time.

[Details][phase-three]

### Phase 4: Seeding and CSS For Everything! (2 days)

I will have two whole days spent for CSSing up the webpage. The original
movieo.me is gorgeous and I have a lot of ambition to make my site
to make it look as good as I can. I am considerably slow and inexperienced 
with CSS so I've allotted the right amount of time for that. I will also be 
seeding around 5 TV show lists with comments to fill up the TVShowList index 
page. Also a good deal of time may be spent figuring out how to fetch an image/
movie poster for every movie from IMDB. I sincerely hope that is automated.

[Details][phase-four]

### Phase 5: Sliders & Other Database Filters), Sorting buttons (1 day)

By now I will have the css set up for the sliders to filter by show
ratings, but now I need to go back and update the react/flux backend
so that the visual list of movies will change every time I move a slider.
I assume this will be a little tricky but it will probably be along the
lines of listening for a mouse up on the slider and then checking its value. 
And if it's different than before, the page of TV Show list items will be
updated before the user's eyes. I will also add filters for movie age rating
and genres.

[Details][phase-five]

### Bonus Features
- [ ] Make the CSS even nicer
- [ ] Optimize speed of website
- [ ] Add loading animations
- [ ] Refactor code and make it more efficient
- [ ] Allow users to upvote and downvote movie lists
- [ ] Add a filter for availability by Netflix/Redbox (if that info is available)
- [ ] Add comments to TVShowLists

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
