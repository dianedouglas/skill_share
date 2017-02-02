# _Skill Swap_

#### _A social networking app for users to share and learn skills together. Built with Angular 2 and Firebase database._

![screenshot of project main page](./src/assets/img/web-app.png)

## Description

A social networking app built to let users find each other based on shared skills, or a shared desire to learn a particular skill such as yoga, basketweaving or a particular programming language. It was created in Angular 2 using a Firebase database.

It features:

* User Authentication with Firebase
* The ability to search for users based on a skill or a username
* A Many-to-Many relationship between users and skills
* User profile page to display each user's username, email, occupation, photo and skills.

## Setup/Installation

To load this site locally (Mac):

1. Clone or download this repository, and in Terminal change directory into the top level of this folder.
2. Make sure you have node.js 6 or higher installed. 
3. Install the Angular2 CLI globally with this command in any directory: `npm install -g angular-cli`. If you run into permissions errors, use sudo: `sudo npm install -g angular-cli`.
4. Install local dependencies by running: `npm install`
5. Install the TypeScript definitions manager globally: `npm install typings --global`, again use sudo if you run into permissions errors: `sudo npm install typings --global`
6. Load the app by running `ng serve`.
7. In your browser, navigate to `http://localhost:4200`. 

There you can click Community to view existing users and search by skill name or user name. Or you can sign up for an account, create your own user profile and add skills to it describing your level of experience with each one.

## Known Issues

This app is still in development. Remaining features to be added to the MVP:

* Ability to edit and delete users and skills
* Store user location data and allow searching for users within a given proximity to you
* Store login status in a session cookie and block off certain pages to unauthenticated users.
* Finalize front-end styling

## Support and contact details

Please feel free to fork this repository and submit pull requests back. You can also contact me here:

* Email: diane.douglas1@gmail.com
* My Website: [www.MelodicCode.com](http://www.melodiccode.com)

## Technologies Used

* Drupal, PHP.
* Feeds module, Feeds Tamper module and dependencies.
* CSV files.
* External HTML document parsing.
