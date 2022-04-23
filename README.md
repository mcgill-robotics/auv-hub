# auv-hub
Static site generated using [Astro](https://astro.build/) for the McGill Robotics AUV team. 
Meant to be a central hub containing all relevant links and resources to be used internally 
within the team.

## Dependencies
- nodejs v14+
- npm v8+

```  
  sudo apt-get update && sudo apt-get install npm nodejs
```

## Install

Clone the project files using git (ssh):

```
  git clone git@github.com:mcgill-robotics/auv-hub.git
  cd auv-hub
````
  
Install the npm dependencies described in package.json

```  
  npm install
```

## Build 

Builds static site assets and outputs them into `dist/`

```  
  npm run build
```

## Preview Locally

```
  npm run preview
```
  
Site is by default served on [http://localhost:3000/](http://localhost:3000/)
