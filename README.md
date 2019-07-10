# pokewhat

Get relevant info about your favourite pokemons. This project is based on https://pokeapi.co/

[![Build Status](https://travis-ci.org/Chieze-Franklin/pokewhat.svg?branch=master)](https://travis-ci.org/Chieze-Franklin/pokewhat)
[![Coverage Status](https://coveralls.io/repos/github/Chieze-Franklin/pokewhat/badge.svg?branch=master)](https://coveralls.io/github/Chieze-Franklin/pokewhat?branch=master)
[![codecov](https://codecov.io/gh/Chieze-Franklin/pokewhat/branch/master/graph/badge.svg)](https://codecov.io/gh/Chieze-Franklin/pokewhat)
[![](https://img.shields.io/docker/pulls/franklinchieze/pokewhat.svg)](https://hub.docker.com/r/franklinchieze/pokewhat)
[![](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://houndci.com)

## Getting Started

You can get the project from Docker Hub or GitHub.

You need the following installed on your machine:
* git
* Node.js
* Docker

#### From Docker Hub

Pull the image  
`docker image pull franklinchieze/pokewhat:latest`

Run a container with the image  
`docker container run -p 3000:3000 --rm franklinchieze/pokewhat`

The server is now running at `localhost:3000`

#### From GitHub

Clone the repository  
`git clone https://github.com/Chieze-Franklin/pokewhat`

Navigate to the directory  
`cd pokewhat`

Install dependencies  
`npm install`

You can run the server either in development or production mode.

###### development mode

Run the server  
`npm run start:dev`

The server is now running at `localhost:3000`

###### production mode

Build the server for production  
`npm run build`

Run the server  
`npm start`

You can perform the building and running of the server in one step  
`npm run build-and-start`

The server is now running at `localhost:3000`

----------

## Features

#### get strongest pokemon

`GET: /top?names={comma-separated-list}`

This returns the strongest pokemon from the list of pokemons whose names were specified.

![image](https://user-images.githubusercontent.com/6097630/60984079-fecc3980-a332-11e9-929d-3ece1f2932d5.png)

----------

## Building Your Own Image

The repository comes with the Dockerfile, so you can exercise as much flexibility as you wish.

Clone the repository  
`git clone https://github.com/Chieze-Franklin/pokewhat`

Navigate to the directory  
`cd pokewhat`

Build the image  
`docker image build -t <your-tag> .`

Run a container with the image  
`docker container run -p <host-port>:<container-port(default is 3000)> --rm <your-tag>`
