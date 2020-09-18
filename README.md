# Danske Bank app bootstrapped with create-react-app 
The app has been implemented with `react`, `graphql`, `apollo-server` and `json-server`.

Tasks in this project:
1. Some graphical interface resembling Danske Bank look & feel.
2. An input text box that take in a numeric value between 1 and 10 characters
3. A button to execute the GraphQL request
4. An overlay to display the return values from the GraphQL request/processed values
5. A GraphQL back-end

In the following I have described my thoughts on each task and listed subtasks for completion.

## Task 1 - Graphical interface
Provided with the assignment was an image with various design elements from Danske Bank.
I decided to style the main elements of the application: input and button
inspired by the colors and layout I made the elements resemble Danske Bank. I was able to implement the size, padding, alignment and colors but I didn't have the font.

#### Subtasks
- Initialise project with create-react-app
- Implement Danske Bank styling

## Task 2 - Input
#### Subtasks
- Wrap input element in react functional component
- Implement Danske Bank design
- Minimal validation


## Task 3 - Button
#### Subtasks
- Wrap button element in react functional component
- Implement Danske Bank design
- Executes the GraphQL request

## Task 4 - Overlay
Skipped

## Task 5 - GraphQL Back-end
This task was my biggest concern. I have both heard and read about GraphQL but since I haven't really worked with GraphQL before I needed to read up on this first. This has also been the task on which I spent majority of my effort.
Unfortunately I wasn't able to complete this task. I have some pieces of the application but they aren't working together. 

#### Subtasks
- Install GraphQL
- Install Apollo Server
- Setup Mock data
- Setup Apollo Server
- Setup Apollo Client
- Handle Request from React component

## JSON server for mock data
A typical usecase for GraphQL is to front a RESTful API so I decided to use a JSON server as a data source.
The JSON server can be launched with the script `npm json:server`.
The data is defined in `db.json` and routes are defined in `routes.json`

## Apollo Server
The apollo server is implemented in `server.js`

### Schema and resolvers
I defined the schema and resolvers for `person`, `facility` and `exposure`. They are defined in `server.js` file.

### GraphiQL
When running script `npm apollo:server` a server with GraphiQL is launched.
Here it is possible to execute a query and test the GraphQL schema and resolvers.

Example:
```
{
  person(input: 1) {
    val1
    val2
  }
  facility(val1: 2) {
    val3
    val4
  }
  exposure(val2: 5) {
    val5
  }
}
```

## Apollo Client
The apollo client is implemented in `index.js` with the ApolloProvider around the react App


## Available NPM Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm json:server`

Launch mock JSON server. Configured with `person`, `facility` and `exposure` routes. Only static data is present.

#### `npm apollo:server`

Launch Apollo Server. Schema with `person`, `facility` and `exposure` combined with resolvers for returning the values.
Apollo server is available at [http://localhost:4000](http://localhost:4000)
