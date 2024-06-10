# text-editor-pwa (progressive web application)

## Introduction

The purpose of this project is to develop JATE (Just Another Text Editor), a single-page progressive web application that functions as a text editor and enables users to take notes that can be saved and accessed at a later. The program can be installed on a user's desktop and use it as they would on a website. A PWA's function overall is to allow an individual to use the application both online or offline.

## Success Criteria

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application

## Installation

- Run `npm i` in the command line after cloning or downloading the repository
- Run `npm run dev` in the command line to start the application
- The command line should return a messag to say that it is listening on 'port 3000'

## How to use the application

- Access JATE using `localhost:3000` in your web browser.
- Once on the application, you can add text straight away.
- The text will be saved to your browser. Just like any other text editor, you will be able to add and remove your text
- JATE will be operational offline also.
- Using the 'Install' button on the top left of the page will install the application to your device

## Images



(Link to deployed application on Render)[https://text-editor-pwa-7z6y.onrender.com]
(Link to deployed application on Github)[https://github.com/isazafeer/text-editor-pwa]