# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
	username: "Dustin",
  password_digest: "$2a$10$DlZPHqK7DPFTMqNEOK6cnuS1x2XO/JGDP6z8VGiq495wKCJ8xxQyO")

User.create!(
	username: "Guest",
  password_digest: "$2a$10$GBzvpk5HL4fPC4W9LQRp8OhVXbIzg.NhZCM2hT98LoYDndSgZDZq6")