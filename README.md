
# Basicfit Assessment 

This project has been developed to assess the coding skills for Senior Software Engineer position at [BasicFit](https://www.basic-fit.com/nl-nl/home)

## Features

- NestJS

## Demo

You can play around the application online or on your own machine

- cloud  -->   [http://65.21.150.157:3000](http://65.21.150.157:3000/docs)
- local machine -->  [http://0.0.0.0:3000](http://0.0.0.0:3000/docs)




## How to deploy on docker ?

- clone the project or open up the tar file which has been sent :

```bash
  git clone https://github.com/alirezakhosraviyan/sendcloud.git
```  
then 
```bash
  cd sendcloud
```
- Install docker and docker-compose ( ignore if you already have the docker-compose ):
```bash
   curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
```bash
   chmod +x /usr/local/bin/docker-compose
```

- run the application using docker-compose (recommended):

```bash
   docker-compose -f docker-compose.yaml up
```
```bash
   docker-compose -f docker-compose.yaml down --volume
```
- open on your local machine on port **3000**

   [http://0.0.0.0:3000/docs](http://0.0.0.0:3000/docs)

## 🚀 About Me
I'm a Senior Software Engineer, you can fine more about me [here](https://www.linkedin.com/in/alirezakhosravian/)

