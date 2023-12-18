Welcome to R8MyTalk, the premier speaker and audience interaction web application. This user manual will guide you through the features and functionalities of our application, ensuring a seamless experience for both speakers and audience members.


Introduction
R8MyTalk is a web application that facilitates meaningful interaction between speakers and their audience. Speakers can create events, generate unique QR codes, and collect valuable feedback, while audience members can easily provide feedback and access presentation materials.
Deployment
Node
R8MyTalk is using Node.js for a runtime environment. If not present on your local machine download and install node from https://nodejs.org/en.
Dependencies and Launch
After node is installed use command “npm i” in your environment terminal to install all dependencies needed for R8MyTalk functionality. 
To add changes that are hosted on render, simply merge your feature branch to main.
To run and host on your local machine, use command “nodemon index.js” OR “nodemon start”.
Upon success R8MyTalk will be hosted on your local machine and can be viewed using a browser at address http://localhost:3000/.


Render
R8MyTalk is currently deployed using render as a hosting service. It is currently enrolled in the free plan which is slow when initially loading (approximately 1 min).
URL: https://r8mytalk.onrender.com/

Render is set up to deploy what is in the main branch of the associated github project which is currently https://github.com/Gulloje/CS510Project. When changes are pushed to main they will show on the hosted website. 
Firebase
Google Firebase services are being used to store information. https://console.firebase.google.com/project/r8mytalk/storage/r8mytalk.appspot.com/files
FireBase Sign-In credentials:


R8MyTalk is using Authentication for authentication, FireStore Database for user account information, and Storage for user files (QR codes, presentation files). For help regarding Firebase refer to the R8MyTalk source code or documentation within Firebase.
 Functionalities.
 
Speaker Features User Registration and Login

To access the full functionality of R8MyTalk, users must register and log in to the application. This ensures a secure and personalized experience for both speakers and audience members.
Creating an Event. Speakers can initiate their events by using the 'Create Event' button on the home page. Here, they provide essential details such as the event name, organization, event type, date, expected attendees, custom question and the speaker's earnings.
Upon creating an event, speakers can view and edit event details, including a custom question, via the action button. This allows for seamless event management.
Speakers have the option to add a custom question that aligns with their presentation content. This feature enhances audience engagement by tailoring the feedback process to the speaker's specific needs.

QR Code Generation

Each event is assigned a unique QR code that simplifies audience access. Speakers can effortlessly generate and download QR codes for distribution.
Event Management
The action button also provides options to edit or delete an event, ensuring speakers have complete control over their event details.
Feedback and Testimonials
Speakers can access a comprehensive feedback overview by clicking on an event name. This includes feedback represented in a doughnut form, offering a visual summary. Testimonials from audience members are also available, providing valuable insights into the impact of the presentation.
Audience Features
Scanning QR Code
Audience members can effortlessly join an event by scanning the QR code provided by the speaker. This launches the web page, initiating the feedback process.
Feedback Questions
Audience members are presented with a set of fixed questions assessing the speaker's presentation, along with a custom question and an open-ended query about the event description. This ensures a comprehensive understanding of the audience's perspective.

Contact Information

At the end of the survey, audience members are prompted to provide contact information, including name, phone number, email, and role. This helps speakers connect with their audience more effectively.
Presentation Download
Audience members have the option to download the presentation materials, providing a convenient resource for future reference.
Functionality Walkthroughs
Scenario: Create New Event
Navigate to https://r8temytalk-nkqs.onrender.com
Click Log In on navigation bar

Log in OR create account


To create your first speaking event click “Create Event”



Fill out information for your new event. When finished click “Create Event”.




Click the “Download QR” button next to your new event. The QR code will now be located in your downloads folder.

Add the QR code image to the end of your presentation.
To upload your presentation for your event, click the action arrow next to your event. 
Click “Upload FIles to Share”

Click “Choose File”
Find your presentation on your computer. Verify it is the file you want to upload. Click “Submit”.


Scenario: Audience Feedback
Scan QR code presented by speaker that links to the survey
Answer emoji questions.
 
Answer written feedback questions..

 
Fill out contact information if you want to keep in communication with the speaker.


Click “Download Presentation Now!!!” to download presentation files to your device
 
 
Scenario: Speaker’s Event Review
Go to https://r8temytalk-nkqs.onrender.com and log in.
Click on the event name in the table that you wish to review.
Hover over a specific color on a wheel to see how many votes you received in that category.

Scroll down to see written feedback responses to the unique question as well as testimonials.
Scenario: Speaker’s Contacts Review
Go to https://r8temytalk-nkqs.onrender.com and log in.
Click on “Contacts” in the navigation bar.

Click on the event name to go to specific event feedback


Click “Download Contacts” button
A .csv file file will now be in your downloads folder containing all contact information.

