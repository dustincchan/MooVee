class AddTitleToMovieList < ActiveRecord::Migration
  def change
  	add_column :movie_lists, :title, :string
  	change_column :movie_lists, :title, :string, :null => false
  end
end
