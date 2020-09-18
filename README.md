# Danske Bank app bootstrapped with create-react-app 
The app has been implemented with `react`, `graphql`, `apollo-server` and `json-server`.
Tasks in this project
1. Some graphical interface resemling Danske Bank look & feel.
2. An input text box that take in a numeric value between 1 and 10 characters
3. A button to execute the GraphQL request
4. An overlay to display the return values from the GraphQL request/processed values
5. A GraphQL back-end

In the following I have described my thoughts on each task and listed subtasks for completion

# Task 1 - Graphical interface
Provided with the assignment was an image with various design elements from Danske Bank.
I decided to style the main elements of the application: input and button
Inspired by the colors and layout I made the elements resemble Danske Bank. I was able to implement the size, padding, alignment and colors but I didn't have the font, which, in my eyes, is the

## Subtasks
* Initialise project with create-react-app
* Implement Danske Bank styling

# Task 2 - Input
## Subtasks
* Wrap input element in component
* Minimal validation
* Implement Danske Bank design


# Task 3 - Button
## Subtasks
* Wrap button element in component
* Implement Danske Bank design
* Executes the GraphQL request

# Task 4 - Overlay
Did not complete

# Task 5 - GraphQL Back-end
This task was my biggest concern. I have both heard and read about GraphQL but since I haven't really worked with GraphQL before I needed to read up on this first. This has also been the task on which I spent majority of my effort.
Unfortunately I wasn't able to complete this task. I have some pieces of the system but I haven't put all the pieces together. 

## Subtasks
* Install GraphQL
* Install Apollo Server
* Setup Mock data
* Handle Request

A typical usecase for GraphQL is to front a RESTful API so I decided to use a JSON server as a data source.

### Schema
I defined the schema for `person`, `facility` and `exposure`. 

### Resolvers


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm json:server`

Launch mock JSON server. Configured with `person`, `facility` and `exposure` routes. Only static data is present.

### `npm apollo:server`

Launch Apollo Server. Schema with `person`, `facility` and `exposure` combined with resolvers for returning the values.
