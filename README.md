# Welcome to my second project

## SUPER MARIO - THE MEMORY GAME

![picture of the mockup of the website](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/mockup-supermario.webp)

### PURPOSE

---

 My first thought when starting this project was to make a fun and easy game for my two toddler boys who love Super Mario at the moment. And what game can be better then a memory game that includes pictures of different creatures from the Super Mario game. A memory game fits everyone who wants to train their memory and speed skill. Both kids and adults can play due to its easy design and mecanics. The user need to find two pictures of the same creature to score a point. The game got a timer that starts as soon as you press "play". The user can also pause the game at the same button that says "play" at the beginning of entering the page. As soon as you press "play" the button changes to "stop game" and the user can deside to pause the game when they need to. The timer continues to count until the user have found all the matching cards. The game also got a "moves" tracker who shows how many moves a user has taken during the game.  

### UX DESIGN

---

#### USER STORIES

- #### As a first time user

  - I want to be intriged to play the game
  - I want to feel amused by the game
  - I want to feel exited when playing the game
  - I want a break from everything else around me and get a quick brain workout
  
- #### As a returning and frequent user

  - I want to get a break and get a quick brain workout
  
#### All users are enabled to play both on the computer and on their mobile phones

### STRUCTURE

---

#### STARTING PAGE

- The first page a user enters is the starting page. It has the heading text "Super Mario Memomry Game" and a picture of Mario riding on Yoshis back with a little star friend next to them.

![picture of the starting page](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/start-page.webp)

#### GAME AREA PAGE

- The game area contains the memory game. It got 12 different cards that the user can click on and pair them in order to continue and win the game.

![picture of the game area page](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/game-page.webp)

#### WINNING PAGE

- When the user wins the game a window pops up that says congratulations. The user can then choose to click on a "play again" button to play again.

![picture of the winning page](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/win-result-page.webp)


### FEATURES

---

#### STARTING PAGE

- #### HEADING

  - The heading text is at the top of the website and contains the text "Super Mario - Memory Game". Its purpose is to make the user understand what type of game it is that they are going to play.

![picture of the heading on the starting page](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/heading.webp)

- #### IMAGE
  
  - The image of Super Mario on Yoshi is under the heading to make the user understand that the game is about Super Mario

![picture of the image with Super Mario and Yoshi on the starting page](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/image-startpage.webp)

- #### "LETS GO" BUTTON
  
  - Under Super Mario and Yoshi is a button that says "Lets go!". If the user click on the button it takes them to the game page.

![picture of the "lets go" button on the starting page](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/letsgo-button.webp)

#### GAME AREA PAGE

- #### MOVES SECTION

  - The memory game has a section that counts how many moves the user does during the game

![picture of the moves section](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/moves.webp)

- #### TIMER SECTION

  - The timer starts as soon as the user press "play" and stops when the player completes or pause the game.

![picture of the timer section](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/timer.webp)

- #### MEMORY CARDS

  - The memory cards is used to play the game. The user click on one to switch the card and then chooses another one in hope that they are the matching pair.
  - The front of the cards is the question block from the Super Mario game.

![picture of the front memory cards](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/memorycards.webp)

  - When a user click on one card a creature from the Super Mario game appears.

![picture of a clicked memory card](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/memorycards-clicked.webp)

- #### RESTART BUTTON

  - At the bottom of the game area is a restart" button which the user can click on to restart the game.

![picture of the "play/pause" button](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/restart-button.webp)

- #### WINNING DIV
  
  - When a user wins the game a div pops up with the text "You made it! Congratulations!"
  - A button appears below the text that says "Play One More Time" which the user can press to restart the game and play again

![picture of the content that pops up when the user wins the game](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/winning-div.webp)

### COLOR SCHEME

---

- The color scheme through both pages is a #red background and #white text with a #black border around the text. The buttons to start/pause the game got a grey background color.

### TECHNOLOGIES

---

- [https://validator.w3.org/nu/] to validate html code
- [https://jigsaw.w3.org/css-validator/] to validate css code
- [https://freepngimg.com/] for images
- favicon from [https://fontawesome.com/icons/block-question?f=classic&s=duotone&pc=%23dcb218&sc=%23dcb218]
- used [https://favicon.io/favicon-converter/] to generate the favicon
- [https://www.remove.bg/] to remove background from favicon

### WIREFRAMES

---

#### STARTING PAGE

![Starting page made in wireframes](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/wireframes/start-page-wireframe.webp)

#### GAME PAGE

![Game page made in wireframes](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/wireframes/game-area-wireframe.webp)

#### WINNING PAGE

![Winning page made in wireframes](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/wireframes/win-result-wireframe.webp)

### TESTING

---

- I tested the website in Chrome, Firefox and Edge browser to see that all pages loaded and that every button and function was working correctly.
- The site is also responsive which I tested in google chromes devtools by selecting different screensizes and test each function
- I tested that all text is easy to read and to understand
- The code got valified through both HTML, CSS and JS validators

#### BUGS

- when I was finishing the page i noticed that the content on the index page wasnt centered on all devices. To  fix the issue i added min-height to both the html and body, and then the index-body which solved the issue because the body height tas stuck to the center of the page before that.

#### LIGHTHOUSE

#### I also tested the website in Lighthouse with the result below

- #### Starting Page - Mobile version

![lighthouse result for starting page, mobile version](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/lighthouse/lighthouse-startpage-mobile.webp)

- #### Starting Page - Desktop version

![lighthouse result for starting page, desktop version](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/lighthouse/lighthouse-startpage-desktop.webp)

- #### Game Page - Mobile version

![lighthouse result for game page, mobile version](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/lighthouse/lighthouse-gamepage-mobile.webp)

- #### Game Page - Desktop version

![lighthouse result for game page, desktop version](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/lighthouse/lighthouse-gamepage-desktop.webp)

### DEPLOYMENT

---
    This project was deployed to Github.com. The following steps shows how you do it:

1. Log in to your Github.
2. Go to the Super Mario repository in Github: [https://github.com/Kimskogfelter/Super-Mario]
3. Select Settings in the repository navigation menu at the top.
4. Select Pages at the left handside of the website.
5. Choose: Deploy from a branch as Source.
6. Choose: Main as branch and /root as folder and press save.
7. Wait a few minutes and press the Code menu to the top left.
8. At the right handside go to Deployment.
9. Then press the ![picture of the deployment icon on github](https://raw.githubusercontent.com/Kimskogfelter/Super-Mario/main/assets/images/readme/deployment-icon.webp) to go to the live website.

### ISSUES

- The form in the Booking page looks squished together in the firefox browser only. All the other pages looks like they should in firefox, edge and chrome
- The IDE i was working with (Code Anywhere) have been very buggy during this time ive been working with this project. The last two weeks I couldnt see any changes I made unless I commited and pushed to Git. Which have made the project get many commits

### CREDITS

---

#### MEDIA

- [https://freepngimg.com/] for images

#### CODE

- I looked on this tutorial on youtube to help me make the memory game [https://www.youtube.com/watch?v=t3cydTwfEnM]
- The media querys comments in css are taken from Safari Retreat project. [https://github.com/Kimskogfelter/Safari-Retreat]
- Code for the meta tags for the search engines results are from the Safari Retreat project [https://github.com/Kimskogfelter/Safari-Retreat]

#### All the thanks to the lovely students on slack for helping out when needed and my mentor Ronan for being so supportive and helpfull
