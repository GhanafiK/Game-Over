import { Ui } from "./ui.module.js";

export class details{
  constructor(id){
    this.ui=new Ui;
    document.getElementById('btnClose').addEventListener('click',function(){
      document.querySelector('.navbar').classList.remove('d-none')
      document.querySelector('.upper-img').classList.remove('d-none')
      document.querySelector('.game').classList.remove('d-none')
      document.querySelector('.details').classList.add('d-none')
    })
    this.gameDetails(id)
  }

  async gameDetails(id){
    document.querySelector(".loading-screen").classList.remove('d-none')
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '72a1763bd5msh063ae9712018e44p1b1364jsn1eaf352036a9',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

      const detailsApi = await fetch(url, options);
      const response = await detailsApi.json();
      this.ui.displayGameDetails(response)
      document.querySelector(".loading-screen").classList.add('d-none')

  }
}