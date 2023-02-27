const images = document.getElementById("heroImg")
const heroImageDiv = document.getElementById("heroData")
const search = document.getElementById("seachButton")
const searchInput = document.getElementById("searchInput")

const getSuperhero = (id,name) => {
  fetch('https://superheroapi.com/api.php/1413225932784857/' + id)
    .then(response => response.json())
    .then(json => {
       const superHero = json
      showHeroInfo(superHero) 
    })
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src="${character.image.url}" height=200 width=200/>`
  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  
  heroImageDiv.innerHTML = `${name}${img}${stats}`
}

const randomHero = () => {
  let limit = 731
  return random = Math.floor(Math.random() * limit) + 1
}
const btn = document.getElementById("next")
btn.onclick = () => {
  getSuperhero(randomHero())

}

const getSearchHero = (name) => {
  fetch('https://superheroapi.com/api.php/1413225932784857/search/' + name)
    .then(response => response.json())
    .then(json => {
      let hero = json.results[0]
      showHeroInfo(hero)
    })
}
search.onclick = () => getSearchHero(searchInput.value)

