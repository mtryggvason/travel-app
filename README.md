# Travel App

Hi there, this app was built using Create React App. 

## How to use it 

In order to get an app like experience please open the [webpage](https://sc-travel-app.herokuapp.com/)
and add it to your home screens. Instructions for doing so on apple and android devices can be found [here](https://natomasunified.org/kb/add-website-to-mobile-device-home-screen/).

If you want to run the app locally, clone or download it as a zip file. Make sure you have [node.js](https://nodejs.org/) installed. Go into the directory using a terminal and type

`npm install` to install dependicies and then type

`npm run start` to start the app

## Interactions

Tab on a destination card to view open it in the detail view.
There was no back button in the mockups so when in a destination detail view, simply double tab anywhere to go back, it would be easy to add more gestures using e.g. HammerJS but my time was scarse and I wanted to focus on the transitions between the views.


## Transitions

The app has 2 views, an overview and a detail view and there is a transition between them. I had different 3 transitions ideas when toggling between the views.

1. Move all cards to the left and move the detail view in from the rights, do the reverse transition when moving from detail view to overview.
2. Break the transtion from overview to detail into 3 steps
    1. Fade out all cards except the selected one
    2. Move the selected card to the top
    3. Transform the selected card into the detail view.
    
    When transitioning back from detail view to the overview content moves out to the top and the cards appear from the top one by one
3. Break the transtion from overview to detail into 3 steps
    1. Move all cards above the selected one up and move all cards below it down
    2. Move the selected card to the top
    3. Transform the selected card into the detail view.
    
    When transitioning back, the detail view would transform into the card it was before go to its right place and all card before it would appear from the top
    and the ones after it would appear from the bottom.
    
I ended up implementing the second idea, since it was more feasible than version 3 but more interesting than version 1.

## Data

The app contains duplicate entries, since I wanted the list to be scrollable. The first three destinations contains different details such as yearly visitors since I thought it might be usefule for user testing.


## Next Steps

Since I only had 3 hours to do finish task, I did not manage to implement everything I wanted.

* First thing I would do would be to add swipe to go back. 
* Iron out the details of the transition in order to make them smoother evt. link it with Framer. 
* Come up with more data or use an API for destinations

  
