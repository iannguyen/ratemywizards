# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users

User.create!({
  username: 'HarryP',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888741/harry1_xfr8pn.jpg'})
User.create!({
  username: 'HermioneJeanGranger',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888742/hermione_iwo0w5.jpg'})
User.create!({
  username: 'ron',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888743/ron_ppfegk.jpg'})
User.create!({
  username: 'dmalfoy',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888740/draco_csbjtv.jpg'})
User.create!({
  username: 'neville',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888742/neville_zu0ljw.jpg'})
User.create!({
  username: 'FREDW',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888740/Fred_smmml4.jpg'})
User.create!({
  username: 'Georgey',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888740/george_s1ftd0.jpg'})
User.create!({
  username: 'lovegood',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888743/luna_duftfy.png'})
User.create!({
  username: 'ginnyw',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888741/ginny_x9p423.jpg'})
User.create!({
  username: 'sfinnigan',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888743/seamus_vzqn00.gif'})
User.create!({
  username: 'Pansy',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888742/pansy_ola0xy.jpg'})
User.create!({
  username: 'dthomas',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888740/dean_vuzftt.jpg'})
User.create!({
  username: 'Crabbe',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888740/crabbe_fdqhho.jpg'})
User.create!({
  username: 'Goyle',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888741/goyle_yufetg.jpg'})
User.create!({
  username: 'Cho',
  password: 'pusheen',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444888740/cho_kzcluy.png'})
User.create!({
  username: 'ian',
  password: 'password'})

# House

Gryffindor = House.create!({
  name: 'Gryffindor',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444846401/Gryffindor_crest_jafkkr.png'
  })
Ravenclaw = House.create!({
  name: 'Ravenclaw',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_299/v1444846401/Ravenclaw_Crest_1_qj108p.png'
  })
Hufflepuff = House.create!({
  name: 'Hufflepuff',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444846401/Hufflepuff_crest_vdbtt9.png'
  })
Slytherin = House.create!({
  name: 'Slytherin',
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444846401/Slytherin_Crest_hlz4yr.png'
  })

# Professors

Professor.create!({
  name: 'Albus Dumbledore',
  house_id: 1,
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785684/ratemywizards/dumbledore_h2z9vq.jpg'
  })
Professor.create!({
  name: 'Minerva McGonagall',
  house_id: 1, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785685/ratemywizards/mcgonagall_wgdx67.jpg'
  })
Professor.create!({
  name: 'Severus Snape',
   house_id: 4, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785689/ratemywizards/snape_tgccxm.jpg'
   })
Professor.create!({
  name: 'Pomona Sprout',
   house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785692/ratemywizards/sprout_ubjjhe.png'
   })
Professor.create!({
  name: 'Rolanda Hooch',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785689/ratemywizards/hooch_giydvl.jpg'
  })
Professor.create!({
  name: 'Quirinus Quirrel',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785687/ratemywizards/quirrel_hlu1sd.jpg'
  })
Professor.create!({
  name: 'Filius Flitwick',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785684/ratemywizards/flitwick_xn9seq.jpg'
  })
Professor.create!({
  name: 'Gilderoy Lockhart',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785685/ratemywizards/lockhart_tpaxhh.jpg'
  })
Professor.create!({
  name: 'Remus Lupin',
  house_id: 1, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785685/ratemywizards/lupin_ykdwii.jpg'
  })
Professor.create!({
  name: 'Alastor Moody',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785686/ratemywizards/moody_msbs9x.jpg'
  })
Professor.create!({
  name: 'Argus Filch',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785687/ratemywizards/filch_kicepz.jpg'
  })
Professor.create!({
  name: 'Dolores Umbridge',
  house_id: 4, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785684/ratemywizards/umbridge_n0w6lo.jpg'
  })
Professor.create!({
  name: 'Horace Slughorn',
  house_id: 4, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_472/v1444785696/ratemywizards/slughorn_i9kdj2.jpg'
  })
Professor.create!({
  name: 'Sybill Trelawny',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_460/v1444785684/ratemywizards/trelawny_fn9iol.jpg'
  })
Professor.create!({
  name: 'Rubeus Hagrid',
  house_id: 1, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785685/ratemywizards/hagrid_mhu1j5.png'
  })
Professor.create!({
  name: 'Charity Burbage',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785374/ratemywizards/Burbage_cxndnh.jpg'
  })
Professor.create!({
  name: 'Poppy Pomfrey',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_562/v1444785699/ratemywizards/pomfrey_tf0pxf.png'
  })
Professor.create!({
  name: 'Septima Vector',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785684/ratemywizards/vector_clpxz9.jpg'
  })
Professor.create!({
  name: 'Irma Pince',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/v1444785687/ratemywizards/pince_pmci4e.png'
  })

# Reviews

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 1,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Professor Dumbledore is the greatest sorcerer in the world, and I am lucky to call him my friend. Although he did ignore me during my 5th year. Oh and he told me to destroy horcruxes but didn't tell me how or where they were. Might have to reconsider his helpfulness..."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 1,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Professor Dumbledore is highly intelligent and one of the greatest wizards of our time. He has fought for equality of all students and ensured the safety of our school."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 1,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Awarded 50 points to Gryffindor for my chest skills during our first year. Shot Gryffindor up to first place. Awesome headmaster!"
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 1,
  ability: 5,
  easiness: 1,
  helpfulness: 1,
  body: "Father's always said that Dumbledore was the worst thing that's ever happened to this place."
  })

Review.create!({
  anonymous: false,
  user_id: 5,
  professor_id: 1,
  ability: 5,
  easiness: 2,
  helpfulness: 5,
  body: "He's very friendly and patient. He's saved me a couple times from Professor Snape, although he's very hard to get a hold of - doesn't have office hours."
  })

Review.create!({
  anonymous: false,
  user_id: 6,
  professor_id: 1,
  ability: 5,
  easiness: 2,
  helpfulness: 5,
  body: "Great man, Dumbledore"
  })

Review.create!({
  anonymous: false,
  user_id: 7,
  professor_id: 1,
  ability: 5,
  easiness: 1,
  helpfulness: 4,
  body: "I thought help will always be given at Hogwarts to those who ask for it? Can't even find his office."
  })

Review.create!({
  anonymous: false,
  user_id: 8,
  professor_id: 1,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "I am giving Professor Dumbledore a 5 for ability, easiness, and helpfulness. He has abilities that most of us can only dream of. He is very easy-going as well, and is always available to help."
  })

Review.create!({
  anonymous: false,
  user_id: 10,
  professor_id: 1,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "The only one You-Know-Who ever feared, so five stars."
  })


Review.create!({
  anonymous: false,
  user_id: 13,
  professor_id: 1,
  ability: 4,
  easiness: 1,
  helpfulness: 1,
  body: "vary biased headmastr n im pretty shur his abilitys are exaggerated. favors u if ur friends wit potter."
  })

Review.create!({
  anonymous: false,
  user_id: 14,
  professor_id: 1,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "sux"
  })
