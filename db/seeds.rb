# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Gryffindor = House.create!(name: 'Gryffindor')
Ravenclaw = House.create!(name: 'Ravenclaw')
Hufflepuff = House.create!(name: 'Hufflepuff')
Slytherin = House.create!(name: 'Slytherin')

dumbledore = Professor.create!({name: 'dumbledore', house_id: 1})
