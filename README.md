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

Note: in case you require a newer version of these packages than is available though the 
official distribution repository, you may get the more recent version from the NodeSource PPA: 

[Instructions](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-installing-node-js-with-apt-using-a-nodesource-ppa)



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
