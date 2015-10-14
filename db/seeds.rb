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

Professor.create!({name: 'Albus Dumbledore', house_id: 1})
Professor.create!({name: 'Minerva McGonagall', house_id: 1})
Professor.create!({name: 'Severus Snape', house_id: 4})
Professor.create!({name: 'Pomona Sprout', house_id: 3})
Professor.create!({name: 'Rolanda Hooch', house_id: 2})
Professor.create!({name: 'Quirinus Quirrel', house_id: 2})
Professor.create!({name: 'Filius Flitwick', house_id: 2})
Professor.create!({name: 'Gilderoy Lockhart', house_id: 2})
Professor.create!({name: 'Remus Lupin', house_id: 1})
Professor.create!({name: 'Alastor Moody', house_id: 3})
Professor.create!({name: 'Argus Filch', house_id: 3})
Professor.create!({name: 'Dolores Umbridge', house_id: 4})
Professor.create!({name: 'Horace Slughorn', house_id: 4})
Professor.create!({name: 'Sybill Trelawny', house_id: 2})
Professor.create!({name: 'Rubeus Hagrid', house_id: 1})
Professor.create!({name: 'Charity Burbage', house_id: 3})
Professor.create!({name: 'Poppy Pomfrey', house_id: 3})
Professor.create!({name: 'Septima Vector', house_id: 2})
Professor.create!({name: 'Irma Pince', house_id: 2})
