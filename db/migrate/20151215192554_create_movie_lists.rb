class CreateMovieLists < ActiveRecord::Migration
  def change
    create_table :movie_lists do |t|
      t.integer :author_id, null: false
      t.string :description, null: false
      t.timestamps null: false
    end
  end
end
