export class Ui{
  displayGameData(data){
    let gameData=``
    for(let i=0;i<data.length;i++){
      gameData+=`
        <div class="col-md-6 col-lg-3">
          <div class="card h-100" id=${data[i].id}>
            <div class="p-3 card-content">
              <img src="${data[i].thumbnail}" class="card-img-top w-100" alt="..." />
              <div class="card-body px-0">
                <div
                  class="header d-flex justify-content-between align-items-center text-white"
                >
                  <h3 class="mb-0">${data[i].title}</h3>
                  <span class="p-2">Free</span>
                </div>
                <div class="description text-center">
                  ${data[i].short_description.split(" ", 8)}
                </div>
              </div>
            </div>
            <div
              class="card-footer d-flex justify-content-between align-items-center text-white"
            >
              <span>${data[i].genre}</span>
              <span>${data[i].platform}</span>
            </div>
          </div>
        </div>
      `
    }
    document.getElementById('gameData').innerHTML=gameData;
  }

  displayGameDetails(data){
    const gameDetails=`
      <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="" />
      </div>
      <div class="col-md-8">
        <h2>Title: ${data.title}</h2>
        <p>Category: <span class="badge">${data.genre}</span></p>
        <p>Platform: <span class="badge">${data.platform}</span></p>
        <p>Status: <span class="badge">${data.status}</span></p>
        <p class="description">
          ${data.description}
        </p>

        <button class="btn btn-outline-warning close-btn">
          <a href="${data.game_url}" target="_blank">Show Game</a>
        </button>
      </div>
    `
    document.getElementById('gameDetails').innerHTML=gameDetails
  }
}
