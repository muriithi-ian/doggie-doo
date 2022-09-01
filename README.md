# doggie-doo

- [doggie-doo](#doggie-doo)
  - [Preview](#preview)
  - [Description](#description)
  - [link](#link)
  - [Authors(dog lovers)](#authorsdog-lovers)
  - [Setup](#setup)
    - [Running directly on browser(option 1)](#running-directly-on-browseroption-1)
    - [Live server on vscode(option 2)](#live-server-on-vscodeoption-2)
  - [Licenses](#licenses)


## Preview
![alt text][preview]

## Description
This is doggie-doo, a simple web  app that allows you to view random images of **man's best friend**. For the carefree, get some completely random pictures or exercise some control by filtering the breed.

## link
You can view the live page from [here](https://muriithi-ian.github.io/muriithi-ian/doggie-doo/)

## Authors(dog lovers)
- Ian Muriithi 🐕

## Setup
- clone the repo
  - open './js/app.js' and change the value of `LIVEENV` to `false` to use json server to persist the data or `true` to use the online endpoints 
    - open the terminal and navigate to the root folder of the project and run the following commands
    - `npm i -g json-server `
    - `json-server --watch db.json`
- Proceed with the steps below
### Running directly on browser(option 1)
- open the index.html file with your browser
### Live server on vscode(option 2)
- open the folder with vscode
- (optional) if you do not have the live server extension installed, install it
  - installation instructions can be found here: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Open the index.html file in the folder and start the server by pressing the **Go Live** button in the bottom right corner
- You can now view the app in the browser at [Doggie Doo](http://localhost:5500)

## Licenses
This project is licensed under the [BSD 2-Clause License ](./LICENSE)

Copyright (c) 2020 Ian Muriithi

[preview]: ./images/doggie-doo.gif "preview"
