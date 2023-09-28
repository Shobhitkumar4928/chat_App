# Personal Details
Hello Everyone!!
My name is Shobhit Kumar. I am pre final year student at IIT(ISM)Dhanbad pursuing my bachelor of technology in Electronics and Communication Engineering.


# Messaging Service Prototype

Welcome to the Messaging Service Prototype repository. This prototype includes essential messaging features and optional enhancements like an AI chatbot and video calling. It utilizes React for the frontend, Node.js with Express.js for the backend, MongoDB as the database, and integrates external APIs for messaging and video call services (ZegoChat) and an AI chatbot (GeekBot). The design emphasizes a clean and intuitive user interface.

## Table of Contents
- [Core Features](#core-features)
- [Optional Features](#optional-features)
- [Design](#design)
- [Application Type](#application-type)
- [Backend](#backend)
  - [Database](#database)
- [External APIs](#external-apis)
- [Getting Started](#getting-started)

## Core Features

1. User Registration and Authentication
   - Users can register for an account with a unique username and password.
   - Authentication ensures secure access to the messaging service.

2. Sending and Receiving Text Messages
   - Users can send text messages to other registered users.
   - Messages are delivered in real-time for a seamless chat experience.

3. Group Chat Functionality
   - Users can create and participate in group chats.
   - Group chats allow multiple users to communicate in a single conversation.

4. Real-time Message Updates
   - Messages are updated in real-time, providing instant notifications of new messages.

## Optional Features

5. AI-Powered Chatbot
   - Integration with GeekBot provides users with an AI chatbot for assistance and engagement.

6. Video and Audio Calling
   - Integration with ZegoChat allows users to initiate video and audio calls within the messaging app, enhancing communication options.

## Design

The user interface is designed to be clean and intuitive, ensuring a user-friendly experience. It follows modern design principles and may incorporate Atomic Design practices for component modularity and reusability.

## Application Type

This messaging service prototype can be implemented as a web application using React.js for the frontend. React's component-based architecture makes it suitable for building dynamic user interfaces.

## Backend

The backend is developed using Node.js with Express.js, following best practices for REST API development. This combination offers scalability and efficient handling of HTTP requests.

### Database

- MongoDB is chosen as the database, offering flexibility and scalability for storing user data, chat messages, and chat group information.

## External APIs

- ZegoChat: This external API is integrated to provide video and audio calling features within the messaging service, enhancing user communication options.

- GeekBot: Integration with GeekBot provides users with an AI chatbot for automated responses and engagement.



![login page](./images/snappy_login.png)


## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.

```shell
git clone https://github.com/Shobhitkumar4928/chat_App.git
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```

Done! Now open localhost:3000 in your browser.
