# PATH Application

## Getting Started


### Prerequisites

####Install below listed Softwares
```
  -Git
  -npm
```
####Few setups in installed softwares


### Install Dependencies

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Directory Layout

```
app/                    --> all of the source files for the application
  css/                  --> stylesheet folder
      app-theme.css               --> bootstrap over write stylesheet
      bootstrap.css               --> bootstrap stylesheet
      resume.css                  --> Application stylesheet

  js/           --> all app specific javascript files
    controllers/         --> application controller 
      displayList.js              --> resumeStack controller
    modules/             --> application modules 
      displayList.js              --> resumeStack mapping module
    resources/           --> framework libraries
      angular-resources.js        --> angular resource library
      angular-route.js            --> angular route resource
      angular.js                  --> bootstrap library
      bootstrap.js                --> resumeStack mapping module
    services/            --> Web services folder
      resumeServices.js           --> Related ajax call services registered

  template/              --> Templates and Logic
    addProfile.html            --> Template for add resume page
  index.html             --> The main html template file of the app
```