# Fantasy Football Backend Server

## Overview

Welcome to the Fantasy Football API! This API is designed to serve a Fantasy Football blog and provide functionalities for a trade calculator. It offers CRUD operations for NFL players and allows you to manage player profiles including names, teams, positions, and a custom value for fantasy football trading calculations.

## Features

`Create Players: Add new NFL players to the database.`
`Read Players: Retrieve a list of all players or filter by specific fields like team or position.`
`Update Players: Modify player details individually or in bulk.`
`Delete Players: Remove players from the database.`

### Clone the Repository
`git clone https://github.com/your-repo/fantasy-football-api.git`

### Install Dependencies
Navigate to your project folder and run:
`npm install`

### Authentication
To use the secured endpoints, you will need a JWT token. Obtain it by logging in and use it in the Authorization header for subsequent requests.

### Example
Here's an example of creating a player:

`curl -X POST -H "Authorization: Bearer YOUR_JWT_TOKEN" -d '{"firstName": "John", "lastName": "Doe", "team": "XYZ", "position": "QB", "value": 10}' http://localhost:3000/players`

## Data

Got this data from: https://github.com/bendominguez0111/fantasy-csv-data/blob/master/yearly/2021.csv

## Contributing

Feel free to open issues and pull requests.

License

This project is licensed under the MIT License.

For more information, please refer to the documentation. Happy coding!
