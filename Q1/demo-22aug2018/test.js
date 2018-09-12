/* Write a function named tellFortune:

- It should have no parameters defined, use arguments object
- Return a fortune as a string: "You will be a X, and living in Z city with N kids."
- Invoke it with 4 parameters:
age, number of children, zodiac sign, city of birth
- Take the return from the function, and log it to the console
- Call that function 3 times with different values for the arguments.
- How you generate the fortune is up to you. Hint: life is random */

function tellFortune(){
  let arr = []
  result = ""

  let zodiacSigns = ["Aquarius", "Pices", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"]
  let cityArray = ["Denver", "Seattle", "San Franisco", "Boulder", "New York", "Chicago", "Bakersfield", "Dubai", "Dublin", "Santa Fe", "Bejing", "Night"]
  let zodiacholder = Math.floor(Math.random() * 12)
  let cityholder = Math.floor(Math.random() * 12)

  let zodiac = zodiacSigns[zodiacholder]
  let city = cityArray[cityholder]
  let age = Math.floor(Math.random() * 61) + 18
  let kids = Math.floor(Math.random() * 5)

  result = `You will be ${age}, and living in ${city} city with ${kids} kids.`

  return result
}

console.log(tellFortune())
console.log(tellFortune())
console.log(tellFortune())

function tellFortuneAdv () {
  let result = ""
  let arr = []

  for(let i = 0; i < arguments.length; i++){
    arr[i] = arguments[i]
  }

  result = `You will be ${arguments[0]}, and living in ${arguments[3]} city with ${arguments[1]} kids.`

  return result
}

console.log(tellFortuneAdv(22, 1, "Capircorn", "Nederland"))
