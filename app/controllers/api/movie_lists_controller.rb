class Api::MovieListsController < ApplicationController
	def new
		@movie_list = MovieList.new
	end

	def index
		render json: MovieList.all
	end

	def create
		@movie_list = MovieList.new(movie_list_params)
		if @movie_list.save
			render json: @movie_list
		else
			render json: @movie_list.errors.full_messages[0], status: 401
		end
	end

	def show
		@movie_list = MovieList.find(params[:id])
		render json: @movie_list.movie_list_items
	end

	def edit
		@movie_list = MovieList.find(params[:id])
		render json: @movie_list
	end

	def update
		@movie_list = MovieList.find(params[:id])
		if @movie_list.update(movie_list_params)
			render json: @movie_list
		else
			render json: @movie_list.errors.full_messages[0], status: 401
		end
	end

	private
	def movie_list_params
		params.require(:movie_list).permit(:title, :description, :author_id)
	end

	def require_user_owns_post!
		return if Post.find(params[:id]).author == current_user
		render json: "Forbidden", status: :forbidden
	end
end
