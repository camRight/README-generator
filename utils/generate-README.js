function readmePopulation(answers) {
    // ${ varLicense === "MIT License" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : answers.varLicense === "Apache License" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.varLicense === "Mozilla Public License 2.0" ? "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" }


    var license = ""
    switch (answers.varLicense) {
        case "Apache License":
            license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break
        case "MIT License":
            license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break
        case "Mozilla Public License 2.0":
            license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            break
        default:
            license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }

    return `
# ${answers.varTitle}

## Description 

${answers.varDescription}

## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${answers.varInstallSteps}


## Usage 

Screenshots Here. Provide instructions and examples for use. 


## Credits

${answers.varCredits}


## License

${license}



---


## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

[shields.io](https://shields.io/)

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)      [Contributor Covenant](https://www.contributor-covenant.org/)

---

Contact Me:

Github Profile Link: ${answers.profilelink}

Email: ${answers.varEmail}
`
}

module.exports = readmePopulation