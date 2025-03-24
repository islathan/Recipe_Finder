# Recipe Finder

Recipe Finder is a simple web application that allows users to search for recipes using the [TheMealDB API](https://www.themealdb.com/). Users can view recipe details and mark their favorite meals for quick access.

## Features
- Search for recipes by name
- View basic recipe details including name, category, cuisine, and image
- Favorite/unfavorite meals using local storage
- Responsive UI with a clean design

## Installation

1. Clone recipe finder:
   ```sh 
   git clone https://github.com/islathan/recipe-finder.git
   cd recipe-finder
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Technologies Used
- React.js
- Tailwind CSS
- TheMealDB API
- Local Storage for favorites management

## How It Works
1. Users enter a search term and submit the form.
2. The app fetches matching recipes from TheMealDB API.
3. Users can view basic details of meals, including name, category, cuisine, and image.
4. Users can mark/unmark meals as favorites by clicking the star icon.
5. Favorite meals are stored in local storage and persist across sessions.

## Disclaimer
Styling was partially created with the help of Generative AI.