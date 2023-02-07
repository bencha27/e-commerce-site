# E-Commerce Site Back-End

## Description

This is a basic back-end for an e-commerce site using an Express server and a MySQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

- Clone the repository to your device.
- Install Node.js to your device if it is not already installed.
- Open the repository in Terminal and run `npm i` to install the required packages.

## Usage

[Demo Video](https://drive.google.com/file/d/1GBm7V4xstzeNRoWaoae15BU8TzU3vu60/view)

- Create an .env file in the repository and add the database name and your MySQL username and password:

```
DB_NAME=ecommerce_db
DB_USER=username
DB_PW=password
```

- Open the repository in Terminal. Run `mysql -u root -p` to initialize the MySQL server.
- Run `SOURCE db/schema.sql;` to create the database. Then exit the MySQL server.
- To seed data, run `npm run seed`.
- Run `npm start` to start the application server.

## Questions

If you have any questions, please contact me at [mrbenjamincha@gmail.com](mailto:mrbenjamincha@gmail.com).\
[GitHub](https://github.com/bencha27)
