// Regex Objectives:
// know what a regex is used for/ compare to not using it
// know common ways to use them
// know how to make a range of characters
// know some of the special characters
// use pattern groupings to pull out specific pieces of a string
// how to use test, match and replace with regex

let email = 'foobar@galvanize.com'

// not emails..
'@'
'@foobar.com'
'foobar.com@'
'@@'
'craig@quincy@galvanize.com'
// -+_ ...these are ok
'-craig@gmail.com'
// a-z 0-9 some characters

if (email.includes('@')) {
  console.log('gonna spam you')
}

let emailPattern = /^([\w+-]+)@([\w+-]+\.[\w+-]+)$/i

let matches = email.match(emailPattern)
if (matches) {
  console.log('It is an email', matches)
  console.log(`username: ${matches[1]}`)
  console.log(`domain: ${matches[2]}`)
}

console.log(email.replace(emailPattern, '######'))

let str = 'g103'

let regex = new RegExp('g103$', 'i')

if (regex.test('G103')) { console.log("is g103")}

if (regex.test(str)) { console.log("is g103")}
