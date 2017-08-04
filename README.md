# Cloud Cover App

## Setting up develop environment

### Prerequisites

- Node > 6
- NPM
- Atom or your favorite IDE

### Installation

- Clone this repository
- Run `$ npm run prestart` to install the dependencies
- Install eslint linter in your IDE:
	- Atom: [linter-eslint](https://atom.io/packages/linter-eslint)
	- Sublime Text 3:
		- [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)
		- [Build Next](https://github.com/albertosantini/sublimetext-buildnext)
	- Visual Studio Code: [Eslint-extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Next run this `$ npm run dev`


### Code linting

- Run this command `$ npm run lint`, it will display the errors and warnings in the code of the app.
- Your IDE (Atom, SublimeText3, Visual Studio Code, etc) should be able to display the errors in your code.
- Each time you save your code in your terminal, you are going to see if your code has eslint errors or warnings.
- We could keep the warning messages but if they are extremely necessary else we should find the solution to remove them.

### Running Tests

We are using [**Jest**](https://facebook.github.io/jest/docs/en/api.html) and [**enzyme**](http://airbnb.io/enzyme/index.html).

- Run `$ npm test` to run the test suite once
- Run `$ npm run test:watch` to run the test suite on every file update

### Running Coverage

We are using the coverage report by Jest.

- Run `$ npm run test:coverage`, it will generate a folder called **coverage**.

## Setting up production environment

### Prerequisites

- Node > 6
- NPM

### Installation

- Clone this repository
- Run `$ npm run prod`, it will create the distribution folder.
