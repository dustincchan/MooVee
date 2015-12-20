# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151220010221) do

  create_table "blacklisted_movie_lists", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "imdbID",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "blacklisted_movie_lists", ["user_id"], name: "index_blacklisted_movie_lists_on_user_id"

  create_table "movie_list_items", force: :cascade do |t|
    t.string   "imdbID",        null: false
    t.integer  "movie_list_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "movie_list_items", ["movie_list_id"], name: "index_movie_list_items_on_movie_list_id"

  create_table "movie_lists", force: :cascade do |t|
    t.integer  "author_id",   null: false
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "watched_movie_lists", force: :cascade do |t|
    t.string   "imdbID",     null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "watched_movie_lists", ["user_id"], name: "index_watched_movie_lists_on_user_id"

end
