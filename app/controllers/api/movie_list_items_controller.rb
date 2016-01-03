class Api::MovieListItemsController < ApplicationController
	def new
		@movie_list_item = MovieListItem.new
	end

	def create
		@movie_list_item = MovieListItem.new(movie_list_item_params)
		if @movie_list_item.save
			render json: @movie_list_item
		else
			render json: @movie_list_item.errors.full_messages[0], status: 401
		end
	end

	private
	def movie_list_item_params
		params.require(:movie_list_item).permit(:movie_list_id, :imdbID)
	end
end
