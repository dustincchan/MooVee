class MovieList < ActiveRecord::Base
	validates :author, :title, presence: true

	has_many :movie_list_items,
	class_name: "MovieListItem",
	primary_key: :id,
	foreign_key: :movie_list_id

	belongs_to :author,
	class_name: "User",
	primary_key: :id,
	foreign_key: :user_id

end
