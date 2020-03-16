# Chat-Bacc

#### Chat-Bacc is an app that allows you to record reminders or set todos with Speech to Text implementation. You can play back reminders at a customized pitch/rate/voice of your choosing. A quick and easy reminder app that you can use at any time.

## Tech Stack

[Node.js](https://nodejs.org/en/)
[Firebase](https://firebase.google.com/)
[React](https://facebook.github.io/react/)
[Redux](https://redux.js.org/)
[Material CSS](https://materializecss.com/)
[Bootstrap 4](https://getbootstrap.com/)

Either visit our deployed website at https://chat-bacc.firebaseapp.com/ or….
Local Setup
Run “git clone https://github.com/speechRecorder/speechrecorder.git”, then cd into that directory.
Run “npm install”
Run “npm start” to view the app at http://localhost:3000/

## Features

- Create an account and begin signing up to set some todos or reminders!
- Create some text by clicking the “Click me to record” button. You can also re-record to replace the to do if you don’t like what you currently have. You can also simply replace the text by typing it in as well.
- You can playback your todos at a different rate - 0.5x, 1.0x, 1.5x, or 2.0x the speed.
- You can also playback your todos at a different pitch - 0, 1 or 2.
- Automatically add changes to your list of todos when you add or delete them.
- Users can see all of their todos, or none at all.

#### Demo recording todo
![](DEMO_record.gif)
#### Demo playback of todo
![](DEMO_playback.gif)

## Learning Takeaways

Incorporating the Cloud Firestore with React/Redux was initially a challenge, but after some thorough configuration, we were able to compose the three technologies seamlessly.
We had a fun learning experience with converting “old” promise syntax into more modern code with try/catch and async/await
We experimented between using dom manipulation and react state

#### Future implementation and functionality

Have the playback include different languages as well as accents.
Be able to check off your todos/reminders when you are done.
You can then filter your list by todos that are done or not.
Have Google OAuth implemented and have the app allow you to sync up your todos with your google calendar.
It should also sync with our Firebase - Cloud Firestore so that if you do delete a todo, it should also delete it from your google calendar.
The app will be able to automatically categorize and filter a user's todos depending on key words and phrases.
Make it a PWA. We would want the functionality to be a PWA so that a user can access it offline but also make changes if they have no internet connection.
