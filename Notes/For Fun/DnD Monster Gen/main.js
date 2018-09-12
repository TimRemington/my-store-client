document.addEventListener('DOMContentLoaded', (event) => {

  let num = Math.floor(Math.random() * 99) + 1
  let link = `http://www.dnd5eapi.co/api/monsters/${num}`
  axios.get(link)
    .then((response) => {

      let monster = response.data
      console.log(monster)

      let name = document.querySelector('#movie-list-1 p.card-text')

      name.innerText = `Name: ${monster['name']}
      Type: ${monster['type']}
      Alignment: ${monster['alignment']}
      Size: ${monster["size"]}
      Armor: ${monster["armor_class"]}
      HP: ${monster["hit_points"]}
      `
    })

});
