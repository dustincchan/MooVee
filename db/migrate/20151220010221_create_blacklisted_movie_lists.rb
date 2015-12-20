class CreateBlacklistedMovieLists < ActiveRecord::Migration
  def change
    create_table :blacklisted_movie_lists do |t|
    	t.integer :user_id, null: false
    	t.string :imdbID, null: false

      t.timestamps null: false
    end
    	add_index :blacklisted_movie_lists, :user_id
  end
end
