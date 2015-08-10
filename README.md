# Dame-Agua

Dame Agua is my final project for the summer 2015 cohort of Ironhack in Barcelona, Spain. The mission is to decrease the consumption of plastic water bottles by making it easier for Barcelonians to use reusable water bottles with an interactive map for locating free and public water sources.

I created the single page webapp using Ruby on Rails, JavaScript with jQuery, HTML5, CSS3 and Twitter's Bootstrap. For the mapping portion, I used the Google Maps JavaScript, Directions and Fusion Tables APIs. Given we only had two weeks to complete the project, there is an endless list of features that I plan on adding including fountain comments, rating and favoriting. The comments especially will make it easier for me to vet the list of almost 2000 water fountains.

Here is a walk thru! Feel free to login as a guest.
<p><b>username: guest</b></p>
<p><b>password: guest</b></p>

The user is greeted with a pretty Bootstrap carousel featuring the sites "pages":
![Alt text](https://github.com/maeganburke/Dame-Agua/blob/master/app/assets/images/screenhome.png)

The first page spits some quick facts about global water bottle consumption relative to Spain:
![Alt text](https://github.com/maeganburke/Dame-Agua/blob/master/app/assets/images/screenthedeal.png)

The map allows users to use their current location (which is grabbed once the page is loaded) or enter an alternative address to find fountains. They can get walking, biking, transit or driving directions to their chosen fountains. The info displayed when clicking the marker is pulled from a Google Fusion table, allowing for easy updating of the fountain info:
![Alt text](https://github.com/maeganburke/Dame-Agua/blob/master/app/assets/images/screenmap.png)

The final page lists simple tips on staying hydrated and a calculator for determining how much the user should drink a day. I am particularly diligent about my water intake and after trying a series of different mobile apps, this calculator features my favorite method for determining my daily intake.
![Alt text](https://github.com/maeganburke/Dame-Agua/blob/master/app/assets/images/screentapout.png)

While I love the functionality of the site, I am particularly proud of the site's aesthetic. Below is a screenshot of what the site looked like Thursday morning, less than 24 hours before I presented it as it is now.
![Alt text](https://github.com/maeganburke/Dame-Agua/blob/master/app/assets/images/screenog.jpg)

If you'd like to clone the app and make it your own...

clone the project:
```
git clone https://github.com/maeganburke/Dame-Agua.git
```
install the ruby dependencies:
```
bundle install
```
run the migrations:
```
rake db:migrate
```
run the server
```
rails s
```

Have fun!
