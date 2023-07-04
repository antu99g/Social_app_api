// All categories
const Categories = [
  {
    categoryId: 1,
    title: "Headphones",
    image: "/assets/cat-1.jpg",
  },
  {
    categoryId: 2,
    title: "Bluetooth Speakers",
    image: "/assets/cat-2.jpg",
  },
  {
    categoryId: 3,
    title: "Smart Watches",
    image: "/assets/cat-3.jpg",
  },
  {
    categoryId: 4,
    title: "Wireless Earbuds",
    image: "/assets/cat-4.jpg",
  },
];

// All Products data
const Products = [
  {
    id: 1,
    title: "boAt Rockerz 450 DC edition",
    price: 1999,
    image: "/assets/headphone-prod-1.webp",
    category: "Headphones",
    config: "Wireless Headphone with 40mm Dynamic Driver",
    description:
      "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou.",
  },
  {
    id: 2,
    title: "Rockerz 550",
    price: 1799,
    image: "/assets/headphone-prod-2.webp",
    category: "Headphones",
    config: "Over Ear Bluetooth Headphone",
    description:
      "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
  },
  {
    id: 10,
    title: "Stone 1500F",
    price: 3999,
    image: "/assets/speaker-prod-1.webp",
    category: "Bluetooth Speakers",
    config: "14W boAt Signature Sound with Passive Bass Radiator",
    description:
      "Add life to all your parties with the ultimate jukebox - Stone 1200F bluetooth speaker. It’s powered by 14W boAt Signature Sound with Passive Bass Radiator that’s built to add spark to all your plans. The RGB LED lights are perfect to set the perfect vibe for a casual chilling session with your best buds. You can take it along everywhere you go with its 360-degree ergonomic design, shoulder strap and IPX7 Water & Splash Resistance that protects it even when outdoors.",
  },
  {
    id: 3,
    title: "boAt Rockerz 518",
    price: 1599,
    image: "/assets/headphone-prod-3.webp",
    category: "Headphones",
    config: "Wireless Headphone",
    description:
      "Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Don't just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana.",
  },
  {
    id: 5,
    title: "Trebel Rockerz 550",
    price: 1999,
    image: "/assets/headphone-prod-5.webp",
    category: "Headphones",
    config: "Wireless Bluetooth Headphones",
    description:
      "Ladies, the time hath come to reach the wall of fame. Make your hustle shine like a diamond with TRebel Rockerz 550 — an audio partner that’s made to suit your vibe. Let your hustle never stop with its 20 hours of powerful playback and never settle for less with the sheer audio power of 50mm Dynamic Drivers. Block the voices that don’t matter with its physical noise isolation. With a 500mAh battery, TRebel Rockerz 550 will be your cheerleader through thick & thin. There’s no point in waiting — match your mood with the best wireless headphones for women.",
  },
  {
    id: 15,
    title: "TRebel Airdopes 141",
    price: 1499,
    image: "/assets/earbuds-prod-1.webp",
    category: "Wireless Earbuds",
    config:
      "8mm drivers, Upto 42 Hours Total Playback, ENxTM Technology, ASAPTM Charge",
    description:
      "Hello sassy and fierce ladies! We see you soaring high for your dreams, and we want to support them. Let TRebel Airdopes 141 be your biggest cheerleader while you win the world with your go-getter attitude! Shun their opinions by indulging in your rhythm with the 8mm Dynamic Drivers. Ace those business calls with its ENx™ Technology that makes you heard every time. ASAP™ Charge empowers you with 75 minutes of playback with just 5 minutes of charging. IPX4 makes it easier to roll in the good times as you rock that sweat, changing your lifestyle. Connect instantly with its IWP™ Technology & keep everything under control with its Quick Response Touch.",
  },
  {
    id: 6,
    title: "Rockerz 450 Superman DC Edition",
    price: 1999,
    image: "/assets/headphone-prod-6.webp",
    category: "Headphones",
    config: "DC Edition - Wireless Bluetooth Headphone",
    description:
      "Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display – Watch Wave Neo will make your world better & brighter.",
  },
  {
    id: 7,
    title: "boAt Iris",
    price: 1299,
    image: "/assets/watch-prod-1.webp",
    category: "Smart Watches",
    config: "1.69 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
    description:
      "There is no better justice to your playlist than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins, just like the sun powers the Man of Steel, as you indulge in your playlist with its 40mm dynamic drivers. Be your own hero as you get ready to rule with #DCYOU.",
  },
  {
    id: 8,
    title: "boAt Wave Neo",
    price: 1999,
    image: "/assets/watch-prod-2.webp",
    category: "Smart Watches",
    config:
      "Round Dial Smart Watch with 1.39 AMOLED Display, Multiple Watch Faces",
    description:
      "Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!",
  },
  {
    id: 9,
    title: "boAt Vertex",
    price: 1799,
    image: "/assets/watch-prod-3.webp",
    category: "Smart Watches",
    config:
      "Smartwatch with Fitness Trackers, 1.69 HD Display, Sleep Tracking, 100+ Watch Faces",
    description:
      "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
  },
  {
    id: 11,
    title: "Stone 352",
    price: 1699,
    image: "/assets/speaker-prod-2.webp",
    category: "Bluetooth Speakers",
    config: "Wireless Portable Bluetooth Speaker",
    description:
      "Be the life of every party as you carry the ultra-portable Stone 352 with you, wherever you go. Its 10W Stereo boAt Signature Sound will make you vibe with full force as every beat becomes clear. Too bored partying within four walls? No problem! Shield your good times as the dynamic Stone 352 is equipped with IPX7 Splash & Water Shield— rain or poolside we got you covered! Party from dusk till dawn with its 12H nonstop playtime & double the impact as you connect 2 Stone 352s via the TWS feature. So get your gang & set to groove!",
  },
  {
    id: 12,
    title: "Stone 1000v2",
    price: 2999,
    image: "/assets/speaker-prod-3.webp",
    category: "Bluetooth Speakers",
    config: "Wireless Portable Bluetooth Speaker",
    description:
      "Powerful and Precise. Stone 1000v2 is the premier wireless speaker that provides the best audio in the business. With its 14W stereo sound, get a boogie on and party all night. Stone 1000v2 also comes packed with state-of-the-art specs to keep you engrossed and engaged through it all!.",
  },
  {
    id: 13,
    title: "boAt stone 500",
    price: 1999,
    image: "/assets/speaker-prod-4.webp",
    category: "Bluetooth Speakers",
    config: "Portable Bluetooth Speaker",
    description:
      "Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together. The dynamic RGB lights will add to the vibe of your party as you get transported to a club setting. Its universal connectivity with multiple connectivity modes —Bluetooth v5.0, AUX, USB and FM mode. With a Type-C charging interface & instant voice assistant, this wireless speaker will make your life easier as you enjoy the sound of your choice. With Stone 500, it is time to #BeTheLimelight.",
  },
  {
    id: 14,
    title: "boAt Party Pal 50",
    price: 3799,
    image: "/assets/speaker-prod-5.webp",
    category: "Bluetooth Speakers",
    config: "Portable Bluetooth Speaker",
    description:
      "Immerse in the 20W RMS Stereo Sound with the powerful Party Pal 50 bluetooth speaker. Set the vibes of the party just right with the RGB LEDs. Keep worries at bay and party poolside with IPX5 splash resistant! Get, set, grooving as Party Pal 50 comes with a powerful playback of 4.5 Hrs. Access Instant Voice Assistant and enjoy the multiple connectivity modes- USB, AUX, Bluetooth v5.1, and FM. Coming with Type-C interface, Party Pal 50 is all you need to set the mood just about right. So, where y’all partying at?",
  },
  {
    id: 16,
    title: "Airdopes 131 DC Edition",
    price: 1399,
    image: "/assets/earbuds-prod-2.webp",
    category: "Wireless Earbuds",
    config: "13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
    description:
      "Sleek. Comfortable. Stylish. And a splash of amazing acoustic powers. Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound. Keep going on for long like the DC heroes with its 12 hours of capacity. Plug-in be prepared to be awe struck",
  },
  {
    id: 17,
    title: "boAt Airdopes 141 Pro",
    price: 1499,
    image: "/assets/earbuds-prod-3.webp",
    category: "Wireless Earbuds",
    config:
      "12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology",
    description:
      "Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours. Never miss a beat with boAt Signature Sound on our all-new boAt Airdopes so that every song that you listen to shines through. Plug-in and live the sound.",
  },
  {
    id: 18,
    title: "boAt Airdopes 441",
    price: 2499,
    image: "/assets/earbuds-prod-4.webp",
    category: "Wireless Earbuds",
    config: "Wireless Earbuds with 6mm Driver For Immersive Sound",
    description:
      "Plug Into Nirvana with boAt Airdopes 441 TWS earbuds to enjoy your music in a truly wireless way. It has the IWP (Insta Wake N’ Pair) Technology, meaning as soon as one opens the charging case lid, the best earbuds power on and enter connection mode. The TWS Airdopes 441 come equipped with 6mm drivers for immersive sound. It offers a seamless user experience via its capacitive touch controls",
  },
  {
    id: 19,
    title: "boAt TRebel Airdopes 402",
    price: 1999,
    image: "/assets/earbuds-prod-5.webp",
    category: "Wireless Earbuds",
    config: "In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
    description:
      "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time.",
  },
  {
    id: 4,
    title: "Rockerz 400",
    price: 1299,
    image: "/assets/headphone-prod-4.webp",
    category: "Headphones",
    config: "Wireless Headphone",
    description:
      "Let's put an end to your worries about wires hanging and getting tangled with BoAt Rockerz 400 and connect with any Bluetooth device, connect and play. Dead batteries can kill your vibe. boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Don't just be loud, be loud and clear. We guarantee you have not heard such powerful bass and vocal clarity from a wireless headphone. The boAt Super Bass Rockerz 400 wireless headphones will make your listening experience personal and for real. Plug it in and Plug into Nirvana.",
  },
];

module.exports = {
  Categories,
  Products,
};
