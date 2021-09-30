// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ## Description
  - ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Installation
  - ${data.install}
  ## Usage
  - ${data.instructions}
  ## Credits
  - ${data.collab}
  ## Tests
  - ${data.test}
  ## Questions
  - ${data.questions}
  ## Badges
  ${data.badges}
  ## License
  ${data.license}
  
          `
}

module.exports = generateMarkdown;
