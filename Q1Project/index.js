document.addEventListener('DOMContentLoaded', () => {

  // Background JS (The CircuitBoard)
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems);

  let corpBS = "Place Holder to not tax server."

  // Temporary Functions
  let firstName = ['Ben', 'Jen', 'Garrison', 'Leonard', 'Bud', 'Draco', 'Leeno', 'Alex', 'Henry', 'Marco']
  let lastName = ['Remington', 'Smith', 'Banana', 'Greep', 'Johnson', 'Greenswade', 'Mechner', 'Mitsoda', 'Herrick', 'Preston']
  let location = ['London', 'Elysium', 'The Moon', 'San Francisco', 'The Crater', 'the Great Garbage Pit', 'Chicago', 'Pandora', 'Mega City One', 'Detroit']
  let pets = ['rats', 'dogs', 'cats', 'bunnies', 'ferrets', 'goldfish', 'humans (humans!?)', 'sea turtles', 'mice', 'geese']
  let petName = ['Greeno', 'Fluffy', 'Mr. Whiskers', 'Tucker', 'Leeno', 'Bandit', 'Barkus', 'THE EVIL ONE', 'Friskers', 'Doogal']
  let wrongDoers = ['bandits', 'marauders', 'killers', 'gangers', 'circus clowns', 'pogo stick gansters', 'mobsters', 'genetically mutated crab men']
  let victims = ['women', 'children', 'house pets', 'random homeless people', 'old ladies', 'freemasons', 'men', 'people who talk in movie theaters']
  let company = ['Exodar', 'Tellux', 'Unicron Mining Corporation', 'Wri-X', 'Harcrow Cyberdynamics', 'U&K Polyservices']
  let hobbies = ['Golfing', 'Slaying my Enemies', 'Vigilante Justice', 'Skiing', 'Board Games', 'Hiking', 'Jogging', 'Fighting the MAN']
  let type = ['mining', 'cloning', 'accounting', 'weapons', 'private contracting', 'baking']
  let size = ['large', 'small', 'pathetic', 'medium', 'unknown']
  let zodiac = ['Aquarius', 'Taurus', 'Cancer', 'Zeegoop?']
  let nationality = ['American', 'British', 'Scottish']
  let color = ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple', 'Black', 'White']
  let animal = ['Bear', 'Sloth', 'Red Tailed Fox', 'Naruto']

  //Link to get corp BS
  // let link1 = `https://corporatebs-generator.sameerkumar.website/`
  // let corpAxios1 = axios.get(link1)
  //   .then((response) => {
  //     let corp1 = response.data
  //     let corpBS1 = corp1['phrase']
  //
  //     let link2 = `https://corporatebs-generator.sameerkumar.website/`
  //     let corpAxios2 = axios.get(link2)
  //       .then((response) => {
  //         let corp2 = response.data
  //         let corpBS2 = corp2['phrase']
  //
  //         let link3 = `https://corporatebs-generator.sameerkumar.website/`
  //         let corpAxios3 = axios.get(link3)
  //           .then((response) => {
  //             let corp3 = response.data
  //             let corpBS3 = corp3['phrase']


  document.getElementById("agentName").innerText = `Name: ${randomElement(firstName)} ${randomElement(lastName)}`
  document.getElementById("bio").innerText = `You grew up in ${randomElement(location)}, with your two pet ${randomElement(pets)}, ${randomElement(petName)} and ${randomElement(petName)}. Everything was going well for you until tragedy struck. A group of ${randomElement(wrongDoers)} from ${randomElement(location)} invaded. They were ruthless, killing ${randomElement(victims)} and ${randomElement(victims)} alike. Once the flames settled, you fled, moving to ${randomElement(location)}. Here, you have made a new name for yourself, and are looking to get back at those who wronged you.  You believe working at ${randomElement(company)} will further this goal.`

  document.getElementById("age").innerText = "Age: " + (random1(50) + 10)
  document.getElementById("weight").innerText = `Weight: ${random1(120) + 100}lbs`
  document.getElementById("height").innerText = `Height: ${random1(2) + 4}ft, ${random1(12)}in`
  document.getElementById("nationality").innerText = `Nationality: ${randomElement(nationality)}`
  document.getElementById("zodiac").innerText = `Zodiac Sign: ${randomElement(zodiac)}`
  document.getElementById("favCol").innerText = `Favorite Color: ${randomElement(color)}`
  document.getElementById("favAnimal").innerText = `Favorite Animal: ${randomElement(animal)}`
  document.getElementById("bFF").innerText = `Best Friend: ${randomElement(firstName)} ${randomElement(lastName)}`

  document.getElementById("pet1").innerText = randomElement(petName)
  document.getElementById("pet2").innerText = randomElement(petName)

  document.getElementById("oldjob").innerText = randomElement(company)
  document.getElementById("companyinfo").innerText = `A ${randomElement(size)} company based in ${randomElement(location)} that specializes in ${randomElement(type)}. The company was known for a lot of things, but most people know about us because of our ability to:

  - ${corpBS}
  - ${corpBS}
  - ${corpBS}

  I worked at this company for ${random1(10) + 1} years.`

  document.getElementById("red1").innerText = randomElement(location)
  document.getElementById("red2").innerText = randomElement(location)
  document.getElementById("red3").innerText = randomElement(location)
  document.getElementById("red4").innerText = randomElement(location)

  document.getElementById("hob1").innerText = randomElement(hobbies)
  document.getElementById("hob2").innerText = randomElement(hobbies)
  document.getElementById("hob3").innerText = randomElement(hobbies)
  document.getElementById("hob4").innerText = randomElement(hobbies)

// })
// })
// })

});



// Functions for random numbers
function random0(numberRan1) {
  return Math.floor(Math.random() * numberRan1)
}
function random1(numberRan2) {
  return Math.floor(Math.random() * numberRan2) + 1
}

// Function to pull element randomly from Array
function randomElement(arr) {
  let len = arr.length
  return arr[random0(len)]
}
