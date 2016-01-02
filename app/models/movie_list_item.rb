class MovieListItem < ActiveRecord::Base
	belongs_to :movie_list,
	class_name: "MovieList",
	primary_key: :id,
	foreign_key: :movie_list_id
end
