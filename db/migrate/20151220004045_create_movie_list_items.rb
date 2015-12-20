class CreateMovieListItems < ActiveRecord::Migration
  def change
    create_table :movie_list_items do |t|
    	t.string :imdbID, null: false
    	t.integer :movie_list_id, null: false

      t.timestamps null: false
    end
    	add_index :movie_list_items, :movie_list_id
  end
end
