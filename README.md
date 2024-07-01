# Travel-Tracker

Travel-Tracker is an application that allows users to keep track of all the countries they have visited. Users can input the country names one by one and the application will dynamically represent all the visited countries with a highlighted color on a world map. Appropriate error messages are given when a country name isn't found or it is already marked as a visited country.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Project Overview
Travel-Tracker is a basic website with a minimal frontend that uses Node.js and Express.js to create a backend server running at `localhost:3000` and renders EJS dynamically. PostgreSQL is used to store two tables: `countries` and `visited_countries`. PG Admin is used as a tool to create and manage the PostgreSQL database, and dotenv is used to manage environment variables for database connection information.

## Tech Stack
- **CSS3**: For styling the web page.
- **Node.js**: For setting up the backend server.
- **Express.js**: For managing server-side logic and routing.
- **EJS**: For rendering dynamic content on the web page.
- **PostgreSQL**: For storing data related to countries and visited countries.

## Features
- **Track Visited Countries**: Allows users to keep track of all the countries they have visited.
- **Database Management**: Uses PostgreSQL to store country codes alongside their names and visited countries data.
- **Dynamic Rendering**: Utilizes EJS to render dynamic content on the frontend.
- **User Input**: Users can input the country names of the countries they have visited.

## Getting Started
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js installed on your local machine
- PostgreSQL installed and configured
- PG Admin installed for database management
- A code editor (e.g., VSCode)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ManavNakai/Travel-Tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Travel-Tracker
   ```
3. Install the required dependencies:
   ```sh
   npm install
   ```
4. Set up the PostgreSQL database `world` locally using PG Admin and create two tables:
   
   4.1. **Open PG Admin and create a new database**:
   
   - Open PG Admin and create a new database named `world`.
    
   4.2. **Create the `countries` table**:
     
   - Create a table named `countries` with the following structure:
     ```sql
        CREATE TABLE countries (
           id SERIAL PRIMARY KEY,
           country_code VARCHAR(3) NOT NULL,
           country_name VARCHAR(255) NOT NULL
         );
     ```
     
   - Import the `countries.csv` file provided with the project files into the `countries` table. In PG Admin, go to the `countries` table, right-click and select `Import/Export`, then follow the instructions to import the CSV file.
     
   4.3. **Create the `visited_countries` table**:
     
   - Create a table named `visited_countries` with the following structure:
     
     ```sql
         CREATE TABLE visited_countries (
             id SERIAL PRIMARY KEY,
             country_code VARCHAR(3) NOT NULL
         );
     ```
     
6. Create a `.env` file in the project root and add your PostgreSQL database connection details:
   
   ```plaintext
   PG_USER=your_db_user
   PG_HOST=localhost
   PG_DATABASE=world
   PG_PASSWORD=your_db_password
   PG_PORT=5432
   ```
7. Start the server:
   ```sh
   node index.js
   ```
8. Open your web browser and go to `http://localhost:3000`.

## Usage
- Open your web browser and navigate to `http://localhost:3000`.
- Use the input fields to enter the country codes of the countries you have visited.
- The application will display the countries you have visited with a highlighted color.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Project Link: [https://github.com/ManavNakai/Travel-Tracker](https://github.com/ManavNakai/Travel-Tracker)

---

Feel free to reach out if you have any questions or need further assistance! Thank you for checking out Travel-Tracker!
