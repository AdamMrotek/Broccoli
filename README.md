# Broccoli

<img src="img/logo.png"/>

## App concept in mind:

> The idea is based on services like "Hello Fresh," "Gusto," and "grubby."
  These sites offer boxes with products measured as per recipes delivered every week.
  That system has its own limitation - restrictive recipe pull, and it is not available in many countries.

## Business solution:

### Recipe Social Media:

> A possible solution would be content curated by creators database of recipes that could help users generate a list of required ingredients. 
  This list could be later used to generate shopping carts at partnered supermarkets.


### Diet Planner:
> App can be used to compose diets and share groceries list

## [Live Link -->](https://broccoli-55235.firebaseapp.com/)



## APP Development

#### Current functionality:

  1. Creating a user account
  1. Recipe API to search for recipes
  1. Creating a groceries list
  1. Saving set of recipes


### Build using:
- React JS, (useState,useEffect,useRef,useContext)
- Firebase:
  1. Authorization,
  1. Firestore,
  1. Hosting

### Recipe JSON Structure : 
Inside "userLists" collection


```javascript
  list {
    // id number of the recipe list
    id: "dsad13esafaf",
    // user id number to be matched in query with current user id
    uid: "wafwqfwdsf24325",
    // array of recipes
    recipes: [
      {
      lable : "Recipe Name",
      ingredinets : [ {food, quantity, weight},{food, quantity, weight}],
      imgURL: "www.source-image.com/12314",
      key : "uniqueKey123"
      },
      ...
    ]
  }
```

### Testing in local enviroment:
For security reasons, .env and .firebase-config files are ignored by Git
I'm not a web security expert; my keys are free tier.
Please make sure you don't expose your Keys! :D

Requirements for testing :

  1.installing packages 
  
  ```console
    npm i
  ```
  
  1.Firebase Config file  (**firebase-config.js**) 
  
  ```javascript
  
  // adding REACT_APP lets react now these are not to be exposed (source: random post on stackOverflow !)
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_apiKey,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  
  ```
  
  1. Set add you **.env** file to .gitignore and add your firebase and https://www.edamam.com/ API keys
  
  ```
  // put you edamam keys here :
  REACT_APP_Application_ID=****
  REACT_APP_Application_Keys=****

  // put you firebase keys here :
  REACT_APP_apiKey=****
  REACT_APP_authDomain=****
  REACT_APP_projectId=****
  REACT_APP_storageBucket=****
  REACT_APP_messagingSenderId=****
  REACT_APP_appId=****
  REACT_APP_measurementId=****
  ```

### Stages of development

1. (Done)Mock-up version with general visual direction
1. (Done)Adding the functionality of adding recipes and getting groceries list
1. (Done)Building users
1. (Done)Building backend database with recipes
1. (Done)Filtering recipes by type of cuisine
1. (comming next ...) impementing multiple list assign to one user
1. Adding form to add recipes (can we trust user input/account types?)
1. Connecting users with recipes as authors and favorites


#### The challenges:
| Challange | Potential Solution | Tested | 
|  :---  | :--- | :----: |
| Accessibility on multiple devices | Using Database |:white_check_mark:|
| Adding recipes on multiple devices | Live Stream data to keep everything in sync |:white_check_mark:|
| API inconsistent measurements of ingredients | switching from cups/units/pounds to grams |:white_check_mark:|
| Heavy properties drilling for user |  rearranging the props structure not ideal but works/Update! implemented context provider for Auth|:white_check_mark:|
| live stream of data needs to stop while the app is not used | onSnapshot returns cleanup function that need to be returned in useEffect Hook|:white_check_mark:|
| Jittery experience if logged user come back to the app | delaying rendering of the page on the initial load while waiting for auth token to be checked|:white_check_mark:|
| Ability to build multiple lists | adding history functionality/ query database based on uid |:heavy_check_mark:|
| Sharing recipe list between accounts | adding an option to copy in groceries list based on list id |:heavy_check_mark:|
| Passing props(objects) that are used in useEffect and need to be listed as dependencies create an infinite loop of rerenders | useCallback for functions / useRef for other objects to stop referencing on every rerender, generally not worth it otherwise|:white_check_mark:|
| Multiplying same recipes | function that tracks recipe multiplier/ need extra property |:heavy_check_mark:|



