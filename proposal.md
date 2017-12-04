# Jumping Shiba

## Background and Overview:

Jumping Shiba is a minigame where user will control 2 Shibas, trying to grab "energy" items (i.e. bones, cakes, sausages, etc.) to keep their health bar from depreciated.

Game play is fairly simple:

  * Game starts with 1 Shiba on the top standing bar, while the other one staying down at the seesaw.
  * User will control 1 Shiba at a time, using mouse movement.
  * User can toggle between Shibas, using defined key (tab?)
  * Energy items will appear randomly from either side of the screen, moving horizontally and disappear into the other side.
  * When ready to grab energy items, user will perform a click (or press spacebar) and the top Shiba will jump down. Landing on the seesaw will result in the other Shiba jumping back up, landing on the top standing bar.
  * Note: when the top Shiba lands on the seesaw, user will gain instant control over the other (jumping-up) Shiba.
  * Any energy item grabbed during the jumping up and down process, will contribute to Shibas team health bar, as well as the overall score.
  * The health bar will deplete over time.
  * Bonus items (optional): full health bar energy, double speed, etc.

## Wireframe:

  ![](https://github.com/trungvuh/Jumping-Corgi/raw/master/assets/Jumping%20Corgi%20Wireframe%20(1).png)

## Architecture and Technologies:

This project will be implemented with the following technologies:

  * Vanilla JavaScript for overall structure and game logic,
  * HTML5 Canvas for DOM manipulation and rendering,
  * Webpack to bundle and serve up the various scripts.

Beside webpack entry file, there will be other main script files involved:

  * `canvas.js`: handle drawing of main canvas, background image, etc.
  * `layout.js`: handle populating items on canvas, including seesaw, top standing bar, health bar, and score.
  * `shiba.js`: handle sprite animation and mouse movements of both Shibas.
  * `items.js`: handle different items and movements accross the canvas.
  * `collision.js`: handle the collison between Shiba and seesaw, and Shiba and items.
  * `game.js`: handle game play.
  * `audio.js`: handle background music and collision sound.

## Timeline:

### Weekend:

  * Initial setup. Go over Asteroid and Drunken Circle projects in class.
  * Basic setup for canvas (background), sprite-sheet for Shiba and items.

## Day 1:

  * Setup done.
  * Try to populate static items on canvas.
  * Moving items across canvas.

## Day 2:

  * Create fake Shiba. Handle Shiba's movement based on mouse movement.
  * Handle collision between Shiba and seesaw, and Shiba and items.

## Day 3:

  * Handle updating score and health bar.
  * Animation for Shiba from sprite sheet.

## Day 4:

  * Continue working on animation.
  * Adding background music and audio.

## Day 5:

  * Welcome page, introduction and game play/ control.
  * Finishing up.
