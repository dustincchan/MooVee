class CreateWatchedMovieLists < ActiveRecord::Migration
  def change
    create_table :watched_movie_lists do |t|
    	t.string :imdbID, null: false
    	t.integer :user_id, null: false

      t.timestamps null: false
    end
    	add_index :watched_movie_lists, :user_id
  end
end
