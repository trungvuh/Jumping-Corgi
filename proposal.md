# Jumping Corgi

## Background and Overview:

Jumping Corgi is a minigame where user will control 2 Corgis, trying to grab "energy" items (i.e. bones, cakes, sausages, etc.) to keep their health bar from depreciated.

Game play is fairly simple:

  * Game starts with 1 Corgi on the top standing bar, while the other one staying down at the seasaw.
  * User will control 1 Corgi at a time, using mouse movement.
  * User can toggle between Corgis, using defined key (tab?)
  * Energy items will appear randomly from either side of the screen, moving horizontally and disappear into the other side.
  * When ready to grab energy items, user will perform a click (or press spacebar) and the top Corgi will jump down. Landing on the seasaw will result in the other Corgi jumping back up, landing on the top standing bar.
  * Note: when the top Corgi lands on the seasaw, user will gain instant control over the other (jumping-up) Corgi.
  * Any energy item grabbed during the jumping up and down process, will contribute to Corgis team health bar, as well as the overall score.
  * The health bar will deplete over time.
  * Bonus items (optional): full health bar energy, double speed, etc.

## Wireframe:

  ![](https://github.com/trungvuh/Jumping-Corgi/raw/master/assets/Jumping%20Corgi%20Wireframe.png)

## Architecture and Technologies:

This project will be implemented with the following technologies:

  * Vanilla JavaScript for overall structure and game logic,
  * HTML5 Canvas for DOM manipulation and rendering,
  * Webpack to bundle and serve up the various scripts.

Beside webpack entry file, there will be other main script files involved:

  * `canvas.js`: handle drawing of main canvas, background image, etc.
  * `layout.js`: handle populating items on canvas, including seasaw, top standing bar, health bar, and score.
  * `corgi.js`: handle sprite animation and mouse movements of both Corgis.
  * `items.js`: handle different items and movements accross the canvas.
  * `collision.js`: handle the collison between Corgi and seasaw, and Corgi and items.
  * `game.js`: handle game play.
  * `audio.js`: handle background music and collision sound.

## Timeline:

### Weekend:

  * Initial setup. Go over Asteroid and Drunken Circle projects in class.
  * Basic setup for canvas (background), sprite-sheet for Corgi and items.

## Day 1:

  * Setup done.
  * Try to populate static items on canvas.
  * Moving items across canvas.

## Day 2:

  * Create fake Corgi. Handle Corgi's movement based on mouse movement.
  * Handle collision between Corgi and seasaw, and Corgi and items.

## Day 3:

  * Handle updating score and health bar.
  * Animation for Corgi from sprite sheet.

## Day 4:

  * Continue working on animation.
  * Adding background music and audio.

## Day 5:

  * Welcome page, introduction and game play/ control.
  * Finishing up.
