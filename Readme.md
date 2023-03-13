<h1>
<br>
<div align="center">
    <!-- <img src="images/contribute.png" height="90"> -->
    <p >Authentication and Security with Nodejs</p>
</div>

  
  
</h1>

<br>

## Introduction 
This is a repository to help understand steps of authentication and security with help of Nodejs.

<br>

<hr>
<br>

### <p align="center">Level 1: Add email and Password fields</p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.

<br>

<hr>

<br>

### <p align="center">Level 2: Add Database encryption</p>

- Add mongoose-encryption package
- Add string secret-key to encrypt and decrypt password
- Add .env file to hide secret-key which used for encryption.

<br>

<hr>

<br>

### <p align="center">Level 3: Add Hashing</p>

- In hashing we don't need any SECRET_KEY to encrypt and decrypt
- In hasing it's easy to encrypt but almost impossible to decrypt.
- Install md5 package : `npm i md5` , and you can hash whatever you want like this : `md5(password)`
- Hash function turn a string to a specific thing , for example md5 function always  turn "123" to the same hash. 

<br>

<hr>
<br>

### <p align="center">Level 4: Salting and Hashing</p>

- Append a random string to your password to make the passowrd longer and harder for hackers to hack with hash tables.
- The salt string will save into database with the hashed password
- The package we are using in Node is `bcrypt` and you can set how many rounds you want to salt the password. 
- require the package : `const bcrypt = require('bcrypt');`
- You can hash password with this function : `bcrypt.hash`
```
  bcrypt.hash(req.body.password , saltRounds, function(err, hash){
        // make your object and save it to DB
    });
```
<br>

<hr>
<br>

### <p align="center">Level 5: Cookie and Session</p>

- Cookie is small text file saved on user's computer
- Session is the overall amount of time spent on an activity.
- We used `Session` , ` Passport` , ` Passport-local-mongoose` packages to implement session and coockie for the login.
-

<br>

<hr>
<br>

### <p align="center">Level 6: OAuth and sign in with google</p>

- OAuth 
    - Granular Access Levels : Developer can determine what kind of data need from user facebook or gmail or whatever login system he's using.
    - Read/ Read+Write Access : Developer can ask for read only to retrive data or to read and write access, for example getting access to post something into facebook. 
    - Revoke Access : Let users to deauthorized the access that they granted to your website from facebook, they don't actually
    have to go onto your website where maybe you're less keen to give up this access.

<br>

- Implementation
    
    - Step 1 : Setup your app : : Tell facebook that we need your authorization system to authorize our users, and facebook gives you `App ID` or `Client ID`.
    - Step 2 : Redirect to Authenticate : : Give users the option to Authenticate with facebook ( like a button)
    - Step 3 : User logs in
    - Step 4 : User grants permissions
    - Step 5 : Recieve Authorization code : : After loggin in ad granting permissions then our website will recieve authorization code from facebook
    - Step 6 : Exchange authCode with AccessToken :: we can save it into our DB and use it to request for pieces of information subsequently.

In this project we using Google OAuth and the packages we're using is `passport-google-oauth20` and here is the [ link ](https://www.passportjs.org/packages/passport-google-oauth20/).

<br>

<hr>