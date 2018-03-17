# Generate Username Module

## How to Install

Install Package using the npm installation Link like

> npm install --save @olaakomolafe/usernamegenerator

## Usage

Using Javascript you can import Like
 ```javascript
 var username = require('@olaakomolafe/usernamegenerator');

// Note that it collect two parameters, which can be whatever you want the username to be generated from
 let myUsername = username.random('Olamide', 'Akomolafe');
 ```

Using Typescript
```typescript
import username = require('@olaakomolafe/usernamegenerator');

generateUsername() {
    const user = username.withunderscore('Olamide', 'Akomolafe');
    console.log(user);
}
```
 ---
 ##  Available Functions
 
 There are three available functions depending on the one needed to be use. There is the:

* With Underscore Function
    * Can be used as follows:

Using Javascript
```javascript
var username = require('@olaakomolafe/usernamegenerator');

let user = username.withunderscore('Olamide', 'Akomolafe');
        // Olamide_Akom35
```

Using Typescript

```typescript
import username = require('@olaakomolafe/usernamegenerator');

generateusername(){
    const user = username.withunderscore('Olamide', 'Akomolafe');
    console.log(user);
}
// Olam_Akomolafe21
```

---
* With Dot Function
    * Can be used as follows


Using Javascript
```javascript
var username = require('@olaakomolafe/usernamegenerator');

let user = username.withdot('Olamide', 'Akomolafe');
console.log(user)
    // Olam.Akom34
```

Using Typescript
```typescript
import username = require('@olaakomolafe/usernamegenerator');

generateusername(){
    const user = username.withdot('Olamide', 'Akomolafe');
    console.log(user);
}
    // Olam.Akomolafe21
```


---
* With Random Function
    * It can be used as follows: 

Using Javascript
```javascript
var username = require('@olaakomolafe/usernamegenerator');

let user = username.withunderscore('Olamide', 'Akomolafe');
    // Olamide_Akomolafe30
```

Using Typescript
```typescript
import username = require('@olaakomolafe/usernamegenerator');

generateusername(){
    const user = username.random('Olamide', 'Akomolafe');
    console.log(user);
}
    // Olam.Akom25
```
## Modifications are allowed and would be appreciated. Reach Out and lets make this better.
