document.addEventListener('DOMContentLoaded', (event) => {

  let info = ""
  let monster
  let link
  let table = document.getElementById("monsterTable")

  for (let num = 1; num <= 15; num++) {

    link = `http://www.dnd5eapi.co/api/monsters/${num}`

    axios.get(link)
      .then((response) => {

        monster = response.data

        // if (monster["alignment"] === "chaotic evil") {
        info = `<tr><td>${monster['name']}</td><td>${monster['size']}</td>
        <td>${monster['type']}</td><td>${monster['alignment']}</td>
        <td>${monster['languages']}</td><td>${monster['armor_class']}</td>
        <td>${monster['hit_points']}</td></tr>`

        table.innerHTML += info
        // }

      })
  }
});
