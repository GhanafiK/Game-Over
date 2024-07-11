import { details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games{
  constructor() {
    this.getGames("mmorpg");
    let links=document.querySelectorAll('.nav-link')
    for(let link of links){
      link.addEventListener('click', (e)=> {
        document.querySelector('.nav-link.active').classList.remove('active')
        e.target.classList.add('active')
        this.getGames(e.target.innerHTML.toLowerCase())

      })
    }
    this.ui=new Ui();
  }
  async getGames(category){
    document.querySelector(".loading-screen").classList.remove('d-none')
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '72a1763bd5msh063ae9712018e44p1b1364jsn1eaf352036a9',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

      const myApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await myApi.json();
      this.ui.displayGameData(response);
      this.detailsEvent()
      document.querySelector(".loading-screen").classList.add('d-none')
      

  }

  detailsEvent(){
    let cards=document.querySelectorAll('.card')
    for(let card of cards){
      card.addEventListener('click', ()=>{
        this.showDetails(card.getAttribute('id'))
      })
    }
  }

  showDetails(id){
    document.querySelector('.navbar').classList.add('d-none')
    document.querySelector('.upper-img').classList.add('d-none')
    document.querySelector('.game').classList.add('d-none')
    document.querySelector('.details').classList.remove('d-none')
    const gameDetails=new details(id)

  }
}


