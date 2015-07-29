# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

users_info = [
	{name: 'Maegan', username: "maebo", home_location: 'BCN', email: 'maegan@gmail.com', password: '1234'},
]

users_info.each do |user_info|
	User.create!(user_info)
end

admins_info =[
	{email: 'maegan.burke@gmail.com', password: 'admin'}
]

admins_info.each do |admin_info|
	Admin.create!(admin_info)
end
