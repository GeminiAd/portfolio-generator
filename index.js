const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./style.css">
    <title>Portfolio</title>
  </head>
  
  <body>
    <header class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 font-weight-bold">Hi! My name is ${answers.name}.</h1>
        <p class="lead">I am from ${answers.location}.</p>
      </div>
    </header>
  
    <main>
      <p>I like ${answers.hobby}.</p>
      <p>My favorite food is ${answers.food}.</p>
    </main>
  
    <footer>
    <h2 class="font-weight-bold">Contact Me:</h2>
      <ul>
        <li><a href="https://github.com/${answers.github}" target="_blank"><button type="button" id="github-button"
              class="btn btn-dark"><i class="bi bi-github"></i>Github</button></a></li>
        <li><a href="${answers.linkedin}" target="_blank"><button type="button" id="github-button"
              class="btn btn-primary"><i class="bi bi-linkedin"></i>LinkedIn</button></a></li>
      </ul>
    </footer>
  
  </body>
  
  </html>`;

const generateCSS = () =>
  `main {
    margin-left: 10%;
  }

  button {
    margin-right: .5em;
  }

  i {
    margin-right: .5em;
  }

  footer {
    padding-top: 2%;
    padding-left: 5%;
    padding-bottom: 2%;

    width: 100%;

    position: absolute;
    bottom: 0;

    background-color: #e9ecef;
  }

  p {
    font-size: 18px;
  }

  h2 {
    margin-bottom: 1em;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    border: none;
    width: fit-content;
    display: inline;
  }`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const cssContent = generateCSS();

    fs.writeFile('style.css', cssContent, (err) =>
      err ? console.log(err) : console.log('Successfully created style.css!')
    );

    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
