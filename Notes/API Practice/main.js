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
    //   let ol = document.createElement('ol')
    //   let li
    //
    //   for (var i = 0; i < monster.length; i++) {
    //     // create li
    //     li = document.createElement('li')
    //     li.innerText = `${monster[i].name} (${monster[i].type})`
    //     ol.appendChild(li)
    //   }
    //
    //   name.appendChild(ol)
    //
    })

});

// ANOTHER WAY TO DO IT
// document.addEventListener('DOMContentLoaded', (event) => {
//
//   let link = "http://www.dnd5eapi.co/api/monsters/3/"
//   axios.get(link)
//     .then(myfunc)
//
// });
//
// let myfunc = (response) => {
//
//   console.log(response.data);
//   console.log(response.status);
//
// }
