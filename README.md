# auv-hub
Static site generated using [Hugo](https://gohugo.io/) for the McGill Robotics AUV team. Meant to be a central hub containing all relevant links 
and resources to be used internally within the team

## Install

Clone the project files using git (ssh):

```
  git clone git@github.com:mcgill-robotics/auv-hub.git
  cd auv-hub
````
  
Install hugo static site generator

```  
  sudo apt-get update && sudo apt-get install hugo
```

## Self-Hosting

Start hugo server, `-D` to serve draft files

```
  hugo server -D
```
  
Site is by default served on [http://localhost:1313/](http://localhost:1313/)
