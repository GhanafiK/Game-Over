# Game Over 🎮
“Game Over” is a web application that allows users to explore and discover free-to-play games across various genres.The app utilizes the Free-to-Play Games Database API to fetch game data.
Users can browse games by different categories and view detailed information about each game.

## Features
1. Navigation Bar
   - The navigation bar contains links to different game categories:
        - MMORPG.
        - Shooter.
        - Sailing.
        - Permadeath.
        - Superhero.
        - Pixel.
   - Clicking on a category link takes the user to a collection of games within that genre.
2. Game Cards
   - Games within each category are displayed using a responsive grid system (built with Bootstrap’s flex).
   - Each game card includes:
        - Game title.
        - Thumbnail image.
        - Brief description
        - Category.
        - Platform(s).
3. Game Details Page
   - When a user clicks on a game card, they are taken to a details page for that game.
   - The details page includes additional information about the game:
        - Thumbnail image.
        - Title.
        - Platform(s).
        - Category.
        - Status.
        - Full description.
        - "Show Game" button.
4. "Show Game" Button
   - Clicking this button takes the user to the actual game (e.g., the game’s official website).
5. Responsive Design
   - The CSS ensures that the app looks great on various devices, from desktops to mobile phones.

## Technologies Used
- HTML, CSS (Bootstrap), and JavaScript
- Fetch API to retrieve data from the Free-to-Play Games Database API


## Project Structure
   - UI File (ui.module.js)
        - Contains classes responsible for rendering UI components (used on both home and details pages).
        - Methods for displaying game cards.
        - Methods for displaying details page.
   - Games File (games.module.js)
        - Handles communication with the API for fetching game data.
        - Includes a class for making API requests related to games category.
        - Handles Event when user click on card to take it to details page.
   - Details File (details.module.js):
        - Specialized for fetching detailed information about individual games.
        - Contains a class for interacting with the API to retrieve specific game details.
    
## API Usage
1. The Free-to-Play Games Database API provides endpoints for retrieving game data. Make sure to read their API documentation for details on how to use it.
2. API Keys
   - Get a free API Key at [Free-to-Play Games Database](https://rapidapi.com/digiwalls/api/free-to-play-games-database)

## Contact
Gamal Hanafi - [LinkedIn](https://www.linkedin.com/in/gamal-khalil-56993a268/) - (gamalhanafi26@gmail.com) <br />
Demo: (https://ghanafik.github.io/Game-Over/)
    
     
