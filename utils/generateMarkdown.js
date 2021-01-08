function fixLicense(license) {
    return license.split(" ").join("%20")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub Logo](https://img.shields.io/badge/license-${fixLicense(data.license)}-blue)

 ## Table of Contents
 [Description](## Description)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

`;
}

module.exports = generateMarkdown;
