const generateHTML = ({ name, description, installation, credits, tests, features, contributions, badges, license, github, email }) => {
  const htmlStringToWriteToFile = `
  <!DOCTYPE html>
  <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
  <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
  <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
  <!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
  <html>
      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title></title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="">
      </head>
      <body>
  
          <div class="container">
              <div class="row">
                  <h1>Name: ${data.name}</h1>
              <h2>Description: ${data.description}</h2>
              <p>Installation: ${data.installation}</p>
              <p>Credits: ${data.credits}</p>
              <p>Tests: ${data.tests}</p>
              <p>Features: ${data.features}</p>
              <p>Contributions: ${data.contributions}</p>
              <p>Badges: ${data.badges}</p>
              <p>License: ${data.license}</p>
              <p>GitHub: ${data.github}</p>
              <p>Email: ${data.email}</p>
              <a href="${data.linkedin}">LinkedIn URL</a>
              <a href="https://github.com/${data.github}">GitHub URL</a>
                  
              </div>
          </div>
          <!--[if lt IE 7]>
              <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
          <![endif]-->
  
          
          <script src="" async defer></script>
      </body>
  </html>
`;
return htmlStringToWriteToFile;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// return `# ${licenseBadge.title}

// `;
// }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// return `# ${licenseLink.title}

// `;
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// return `# ${licenseSection.title}

// `;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
