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
User.create!({
  username: 'Guest',
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
  image_url: 'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785684/ratemywizards/dumbledore_h2z9vq.jpg',
  description: "Professor Albus Percival Wulfric Brian Dumbledore began as a transfiguration professor at Hogwarts School of Witchcraft and Wizardry, and later became headmaster. He was considered to be the most powerful wizard of his time, and is most famous for his defeat of Gellert Grindelwald, the discovery of the twelve uses of dragon's blood, and his work on alchemy with Nicolas Flamel."
  })
Professor.create!({
  name: 'Minerva McGonagall',
  house_id: 1, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785685/ratemywizards/mcgonagall_wgdx67.jpg',
  description: "Professor Minerva McGonagall is a registered animagus and worked for the Ministry of Magic for two years before becoming a transfiguration professor at Hogwarts School of Witchcraft and Wizardry. She is also the head of Gryffindor house and Deputy Headmistress at Hogwarts."
  })
Professor.create!({
  name: 'Severus Snape',
   house_id: 4, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785689/ratemywizards/snape_tgccxm.jpg',
   description: "During his time at Hogwarts Witchcraft and Wizardry, Professor Severus Snape was a Potions Master, Defense Against the Dark Arts professor, and head of Slytherin house. He played a very important role in the First and Second Wizarding Wars against Lord Voldemort."
   })
Professor.create!({
  name: 'Pomona Sprout',
   house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785692/ratemywizards/sprout_ubjjhe.png',
   description: "Professor Pomona Sprout returned to Hogwarts School of Witchcraft and Wizardry after graduation to pursue her love of herbology. She is now head of Hufflepuff house and the herbology department."
   })
Professor.create!({
  name: 'Rolanda Hooch',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785689/ratemywizards/hooch_giydvl.jpg',
  description: "Madam Rolanda Hooch works as the flying instructor and quidditch referee and coach at Hogwarts School of Witchcraft and Wizardry. She was a member of her House's quidditch team during her years at school."
  })
Professor.create!({
  name: 'Quirinus Quirrel',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785687/ratemywizards/quirrel_hlu1sd.jpg',
  description: "Quirinus Quirrell was a muggle studies professor at Hogwarts School of Witchcraft and Wizardry and later taught Defense Against the Dark Arts."
  })
Professor.create!({
  name: 'Filius Flitwick',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785684/ratemywizards/flitwick_xn9seq.jpg',
  description: "Professor Filius Flitwick is Charms Master and head of Ravenclaw house at Hogwarts School of Witchcraft and Wizardry. He is part-goblin."
  })
Professor.create!({
  name: 'Gilderoy Lockhart',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785685/ratemywizards/lockhart_tpaxhh.jpg',
  description: "Gilderoy Lockhart was a professor of Defense Against the Dark Arts at Hogwarts School of Witchcraft and Wizardry. He has authored many books, most of which are autobiographies. Lockhart has also received many prestigious awards, such as Order of Merlin: Third Class, Honorary Member of the Dark Force Defense League, and five-time winner of Witch Weekly's Most Charming Smile Award. His favorite color is lilac."
  })
Professor.create!({
  name: 'Remus Lupin',
  house_id: 1, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785685/ratemywizards/lupin_ykdwii.jpg',
  description: "Professor Remus John Lupin taught Defense Against the Darks Arts at Hogwarts School of Witchcraft and Wizardry. He was afflicted with lycanthropy during his childhood, and is one of the creators of the Marauder's Map."
  })
Professor.create!({
  name: 'Alastor Moody',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785686/ratemywizards/moody_msbs9x.jpg',
  description: "Alastor 'Mad-Eye' Moody is considered to be the most famous Auror of modern time. He is a member of the Order of the Phoenix and taught Defense Against the Dark Arts at Hogwarts School of Witchcraft and Wizardry in 1994."
  })
Professor.create!({
  name: 'Argus Filch',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785687/ratemywizards/filch_kicepz.jpg',
  description: "Argus Filch has been the caretaker of Hogwarts School of Witchcraft and Wizardry since 1973. He is a squib."
  })
Professor.create!({
  name: 'Dolores Umbridge',
  house_id: 4, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785684/ratemywizards/umbridge_n0w6lo.jpg',
  description: "Dolores Jane Umbridge became profesor of Defense Against the Dark Arts at Hogwarts School of Witchcraft and Wizardry in 1995 by order of the Ministry of Magic. Prior, she served as Senior Undersecretary to Minister for Magic under Ministers Cornelius Fudge, Rufus Scrimgeour, and Pius Thicknesse."
  })
Professor.create!({
  name: 'Horace Slughorn',
  house_id: 4, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/c_scale,w_472/v1444785696/ratemywizards/slughorn_i9kdj2.jpg',
  description: "Professor Horace Slughorn was the Potions Master and head of Slytherin house at Hogwarts School of Witchcraft and Wizardry for 50 years before retiring in 1981. He was convinced to return to his post in 1996 by Albus Dumbledore."
  })
Professor.create!({
  name: 'Sybill Trelawny',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/c_scale,w_460/v1444785684/ratemywizards/trelawny_fn9iol.jpg',
  description: "Sybill Trelawney is a seer and professor of divination at Hogwarts School of Witchcraft and Wizardry. She accurately predicted the escape of Peter Pettigrew and return of Lord Voldemort during the 1993-1994 school year."
  })
Professor.create!({
  name: 'Rubeus Hagrid',
  house_id: 1, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785685/ratemywizards/hagrid_mhu1j5.png',
  description: "Rubeus Hagrid is the gamekeeper at Hogwarts School of Witchcraft and Wizardry, and later assumed the post of Care of Magical Creatures professor in 1993. He is a half-giant."
  })
Professor.create!({
  name: 'Charity Burbage',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785374/ratemywizards/Burbage_cxndnh.jpg',
  description: "Charity Burbage was the professor of muggle studies at Hogwarts School of Witchcraft and Wizardry. She was murdered for her views during the Second Wizarding War."
  })
Professor.create!({
  name: 'Poppy Pomfrey',
  house_id: 3, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/c_scale,w_562/v1444785699/ratemywizards/pomfrey_tf0pxf.png',
  description: "Madam Pomfrey is the matron at Hogwarts School of Witchcraft and Wizardry and has been helping students for over 25 years."
  })
Professor.create!({
  name: 'Septima Vector',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785684/ratemywizards/vector_clpxz9.jpg',
  description: "Professor Vector is the Arithmancy professor at Hogwarts School of Witchcraft and Wizardry."
  })
Professor.create!({
  name: 'Aurora Sinistra',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785687/ratemywizards/sinistra_tc4vrs.jpg',
  description: "Professor Sinistra teaches Astronomy at Hogwarts School of Witchcraft and Wizardry. Her classes are held on Wednesday nights."
  })
Professor.create!({
  name: 'Irma Pince',
  house_id: 2, image_url:'http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_400/v1444785687/ratemywizards/pince_pmci4e.png',
  description: "Madam Pince is the librarian at Hogwarts School of Witchcraft and Wizardry."
  })

# Reviews

#Dumbledore ID1 11

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
  body: "Awarded 50 points to Gryffindor for my chess skills during our first year. Shot Gryffindor up to first place. Awesome headmaster!"
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

# McGonagall ID2 12

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 2,
  ability: 5,
  easiness: 4,
  helpfulness: 4,
  body: "She is very strict, but you will learn a lot in her class. Took off a point for helpfulness because she wouldn't sign my Hogsmeade permission form during my third year."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 2,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Professor McGonagall goes above and beyond to make sure her students succeed. She gave me a time-turner during my third year so that I could take extra classes."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 2,
  ability: 5,
  easiness: 4,
  helpfulness: 4,
  body: "A word of advice to first years: don't mess around just because she's not in the classroom. She transforms into a cat and watches you."
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 2,
  ability: 4,
  easiness: 2,
  helpfulness: 3,
  body: "Gave me detention just because I reported Potter and his friends for vising that great oaf after hours. Wait till my father hears about this."
  })

Review.create!({
  anonymous: false,
  user_id: 5,
  professor_id: 2,
  ability: 5,
  easiness: 1,
  helpfulness: 4,
  body: "Be prepared to put in many hours a week for this class. She does not curve. She won't show any mercy even if you go to office hours."
  })

Review.create!({
  anonymous: false,
  user_id: 6,
  professor_id: 2,
  ability: 5,
  easiness: 4,
  helpfulness: 5,
  body: "Brilliant"
  })

Review.create!({
  anonymous: false,
  user_id: 7,
  professor_id: 2,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "She intimidates first years but all the older kids know that she's a softy."
  })

Review.create!({
  anonymous: false,
  user_id: 8,
  professor_id: 2,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Very interesting class. First years start out with simple transfiguration, like transforming animals into water goblets."
  })

Review.create!({
  anonymous: false,
  user_id: 9,
  professor_id: 2,
  ability: 5,
  easiness: 3,
  helpfulness: 5,
  body: "A lot of people get the wrong impression of McGonagall because she is very tough, but she really cares about her students."
  })

Review.create!({
  anonymous: false,
  user_id: 10,
  professor_id: 2,
  ability: 5,
  easiness: 2,
  helpfulness: 4,
  body: "Watch out she deducts points from her own house."
  })

Review.create!({
  anonymous: false,
  user_id: 14,
  professor_id: 2,
  ability: 3,
  easiness: 1,
  helpfulness: 1,
  body: "failed her class my first year cuz i didn't know how to read"
  })

Review.create!({
  anonymous: false,
  user_id: 15,
  professor_id: 2,
  ability: 5,
  easiness: 3,
  helpfulness: 5,
  body: "This class is very hard, you must purchase the textbook. But she is very helpful and very smart."
  })

#Snape ID3 9

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 3,
  ability: 4,
  easiness: 1,
  helpfulness: 1,
  body: "Wow where do I even start. Snape has been giving me dirty looks since he first laid eyes on me. He singled me out in class and embarassed me my first year, tried to frame me for killing Filtch's cat my second year, stuck his nose where it didn't belong in my 3rd year, accused me of stealing from his storage in my 4th year, and called me lazy and arrogant and insulted my father in my 5th year."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 3,
  ability: 5,
  easiness: 4,
  helpfulness: 3,
  body: "I'm sure Professor Snape is very brilliant, but I struggle to get an A in his class. I always try to participate in his class by raising my hand but he doesn't call on me for some reason."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 3,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "Page three hundred and ninety-four"
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 3,
  ability: 5,
  easiness: 4,
  helpfulness: 5,
  body: "Snape is one of the few decent professors in this school."
  })

Review.create!({
  anonymous: false,
  user_id: 5,
  professor_id: 3,
  ability: 3,
  easiness: 1,
  helpfulness: 1,
  body: "Professor Snape really scares me. Instead of helping me when my potion burned, he punishes me by making me drink it and then takes points from Gryffindor."
  })

Review.create!({
  anonymous: false,
  user_id: 6,
  professor_id: 3,
  ability: 3,
  easiness: 2,
  helpfulness: 1,
  body: "There is no foolish wand-waving or silly incantations in this class."
  })

Review.create!({
  anonymous: false,
  user_id: 10,
  professor_id: 3,
  ability: 4,
  easiness: 1,
  helpfulness: 1,
  body: "Favors his own students. You pretty much have no chance of scoring higher than a C on your exams if you aren't in Slytherin."
  })

Review.create!({
  anonymous: false,
  user_id: 13,
  professor_id: 3,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "snapes awesum! tryed 2 kill potter durin qidich one yr"
  })

Review.create!({
  anonymous: false,
  user_id: 14,
  professor_id: 3,
  ability: 5,
  easiness: 4,
  helpfulness: 5,
  body: "Prof Snape is pretty cool... I was about to fail Potions my second year but he gave me extra credit and let me pass."
  })


# Sprout ID4 3

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 4,
  ability: 4,
  easiness: 5,
  helpfulness: 4,
  body: "Professor Sprout is very talented and puts together an enjoyable curriculum. She contributed to the mandrake draught that saved many students during our second year."
  })

Review.create!({
  anonymous: false,
  user_id: 5,
  professor_id: 4,
  ability: 4,
  easiness: 2,
  helpfulness: 3,
  body: "Herbology is my favorite subject, but Professor Sprout's class is not easy. I fainted during our first lecture and missed the entire lesson."
  })

Review.create!({
  anonymous: false,
  user_id: 10,
  professor_id: 4,
  ability: 3,
  easiness: 4,
  helpfulness: 3,
  body: "She's quite loud and bubbly, but not sure about helpfulness. Longbottom fainted because of her mandrakes and she told me to just leave him there."
  })


#Hooch ID 5 2

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 5,
  ability: 4,
  easiness: 5,
  helpfulness: 4,
  body: "I'll always remember my first day in Madame Hooch's class - it was the first time I ever rode a broomstick. She's a great teacher and Quidditch instructor."
  })

Review.create!({
  anonymous: false,
  user_id: 5,
  professor_id: 5,
  ability: 4,
  easiness: 1,
  helpfulness: 3,
  body: "Lost control of my broom on our first day of class. I felt like she could have rode her own broomstick up to save me rather than just standing on the ground yelling."
  })


#quirrel id6 3

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 6,
  ability: 1,
  easiness: 3,
  helpfulness: 1,
  body: "Professor Quirrel jumps when you approach his desk and stutters a lot... I don't understand how he got a Defense Against the Dark Arts position."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 6,
  ability: 1,
  easiness: 2,
  helpfulness: 1,
  body: "Guess we all know who the real troll is."
  })

Review.create!({
  anonymous: false,
  user_id: 6,
  professor_id: 6,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "Not sure what holding an iguana did for a Defense Against the Dark Arts lesson."
  })



#flitwick id7 3

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 7,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Professor Flitwick is very smart and very nice. First years start off with levitation."
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 7,
  ability: 4,
  easiness: 3,
  helpfulness: 4,
  body: "Let's just say you won't see me wasting my time in Charms class next year."
  })

Review.create!({
  anonymous: false,
  user_id: 14,
  professor_id: 7,
  ability: 4,
  easiness: 4,
  helpfulness: 4,
  body: "Can't see him if u sit in the back"
  })

#lockhart id8 4

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 8,
  ability: 1,
  easiness: 4,
  helpfulness: 1,
  body: "Professor Lockhart is full of himself. All of his textbooks and exam questions are about himself. I did not learn a thing about Defense Against the Dark Arts in his class."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 8,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Professor Lockhart is brilliant - he has multiple publications and is winner of Witch Weekly's Most Charming Smile award. His autobiography 'Magical Me' is a best seller and is a required reading for this class."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 8,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "useless git"
  })

Review.create!({
  anonymous: false,
  user_id: 9,
  professor_id: 8,
  ability: 5,
  easiness: 4,
  helpfulness: 5,
  body: "Easy on the eyes. Even when his lectures are boring (which they rarely are), I enjoy staring at the countless paintings of him in his classroom. Really knows his stuff!"
  })

#lupin id9 3

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 9,
  ability: 4,
  easiness: 3,
  helpfulness: 5,
  body: "Professor Lupin is by far one of the best Defense Against the Dark Arts teachers we've had. He has put together a fantastic curiculum that is not only fun, but very educational."
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 9,
  ability: 4,
  easiness: 3,
  helpfulness: 4,
  body: "This class is riddikulus"
  })

Review.create!({
  anonymous: false,
  user_id: 5,
  professor_id: 9,
  ability: 5,
  easiness: 3,
  helpfulness: 5,
  body: "I actually enjoyed third year DADA because of Professor Lupin. I'm not much for dark arts, but Lupin helped me face my fears with a fantastic lesson on Boggarts."
  })

#Moody ID10 6

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 10,
  ability: 4,
  easiness: 5,
  helpfulness: 5,
  body: "Moody is an ex-auror, so he knows his stuff. He is very helpful and made sure I passed the Triwizard Tournament. Oh wait that was Barty Crouch, Jr."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 10,
  ability: 4,
  easiness: 4,
  helpfulness: 4,
  body: "Completely mad, but brilliant. You can tell that he's been there - looked evil in the eye."
  })

Review.create!({
  anonymous: false,
  user_id: 10,
  professor_id: 10,
  ability: 5,
  easiness: 4,
  helpfulness: 4,
  body: "Has eyes on the back of his head or something. Saw me put gum under my desk while he had his back turned. Also has a temper, threw stuff at me."
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 10,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "My father will hear about this."
  })

Review.create!({
  anonymous: false,
  user_id: 13,
  professor_id: 10,
  ability: 2,
  easiness: 1,
  helpfulness: 1,
  body: "dis guy is bloody mad. turned ma best friend to a ferret and put him in ma pants"
  })

Review.create!({
  anonymous: false,
  user_id: 5,
  professor_id: 10,
  ability: 4,
  easiness: 3,
  helpfulness: 5,
  body: "Professor Moody is scary but he's alright once you get to know him. He really inspired me to pursue my interest in herbology."
  })

#filch id11 2

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 11,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "Mr. Filch always catches me at the wrong place at the wrong time. He also has an annoying cat that spies on students for him."
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 11,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "Filthy squib"
  })

#umbridge id12 3

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 12,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "Avoid at all cost. She does not care about the safety or education of students, and is only at Hogwarts for her own selfish agenda. She will not hesitate to give out detentions."
  })

Review.create!({
  anonymous: false,
  user_id: 7,
  professor_id: 12,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "Absolutely vile woman"
  })

Review.create!({
  anonymous: false,
  user_id: 13,
  professor_id: 12,
  ability: 2,
  easiness: 1,
  helpfulness: 1,
  body: "her class is hard but she aight cuz i got picked 2 b on da inqisitorial squad"
  })



#slughorn id13 2

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 13,
  ability: 4,
  easiness: 5,
  helpfulness: 3,
  body: "Professor Slughorn favors students, but is one of the few teachers that does not just favor students in his own house. He selects students that stand out to him to be in his Slug Club. Overall, he is very nice and does not have a negative view on muggles that most Slytherins have."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 13,
  ability: 4,
  easiness: 3,
  helpfulness: 2,
  body: "He won't pay any attention to you unless you are 1. rich, 2. famous, or 3. brilliant. Didn't get into the Slug Club and he called me Wallenby once."
  })

#trelawny id14 3

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 14,
  ability: 2,
  easiness: 5,
  helpfulness: 1,
  body: "Her class is actually not that hard. Most students struggle because they cannot 'read' her tea leaves. The trick is to just make up something absurd and she will be impressed. I gave her an extra point for ability as she did predict the return of the dark lord."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 14,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "What a load of rubbish."
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 14,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "What a pathetic excuse for a teacher. I'd pitch myself off the Astronomy Tower if I had to continue for another 2 years."
  })

#hagrid id15 3

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 15,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "There's no Hogwarts without Hagrid."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 15,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "Hagrid's passion is magical creatures, so he is perfect for this class. He has a ton of experience in taking care of and training dragons, three-headed dogs, and hippogriffs, just to name a few."
  })

Review.create!({
  anonymous: false,
  user_id: 4,
  professor_id: 15,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "God this place has gone to the dogs. Wait until Father hears that Dumbledore's got this oaf teaching classes."
  })

#burbage 16 1


Review.create!({
  anonymous: false,
  user_id: 12,
  professor_id: 16,
  ability: 3,
  easiness: 5,
  helpfulness: 5,
  body: "Has anyone actually seen a Slytherin take this class?"
  })


#pomfrety17 3

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 17,
  ability: 5,
  easiness: 4,
  helpfulness: 5,
  body: "Madame Pomfrey is a life saver. She's helped me get better after several Quidditch accidents, and also helped me grow my bones back."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 17,
  ability: 5,
  easiness: 5,
  helpfulness: 5,
  body: "I love Madame Pomfrey, she really cares about all students. I recovered very well after I accidentally turned myself into a cat from a badly brewed polyjuice potion. She also took great care of me when I got petrified."
  })

Review.create!({
  anonymous: false,
  user_id: 3,
  professor_id: 17,
  ability: 5,
  easiness: 2,
  helpfulness: 4,
  body: "Quite stubborn... wouldn't let me visit Harry when he was in the hospital wing."
  })

#vector18 1

Review.create!({
  anonymous: false,
  user_id: 15,
  professor_id: 18,
  ability: 3,
  easiness: 4,
  helpfulness: 4,
  body: "This professor makes math less boring. Not a lot of people take her class."
  })

#sinistra19 1

Review.create!({
  anonymous: false,
  user_id: 13,
  professor_id: 19,
  ability: 1,
  easiness: 1,
  helpfulness: 1,
  body: "who is dis?"
  })

#pince20 2

Review.create!({
  anonymous: false,
  user_id: 1,
  professor_id: 20,
  ability: 2,
  easiness: 3,
  helpfulness: 3,
  body: "Not very helpful. She wouldn't let me access the restricted section without a note."
  })

Review.create!({
  anonymous: false,
  user_id: 2,
  professor_id: 20,
  ability: 4,
  easiness: 5,
  helpfulness: 5,
  body: "Madame Pince is very helpful whenever I need to find books for research."
  })

Review.create!({
anonymous: false,
user_id: 17,
professor_id: 18,
ability: 3,
easiness: 3,
helpfulness: 3,
body: "I mean I guess she's alright."
})

Review.create!({
anonymous: false,
user_id: 17,
professor_id: 19,
ability: 3,
easiness: 3,
helpfulness: 3,
body: "Yeah seriously, who is this?"
})

Review.create!({
anonymous: false,
user_id: 17,
professor_id: 20,
ability: 3,
easiness: 3,
helpfulness: 3,
body: "Great librarian, I just wish I knew how to read."
})
