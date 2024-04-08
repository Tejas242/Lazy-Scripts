# Project Title

Being lazy to make multiple repositories. This project is a simple Node.js script that automates the creation of GitHub repositories.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- **Nodejs:** You need to have Node.js installed on your machine.
- **gh cli:** You need to have the GitHub CLI installed on your machine.

## Installing

1. Clone the repository

```bash
git clone <repository_link>
```

2. Create a repositories.json file in the root directory with the following structure:

```json
[
    {
        "name": "repository_name",
        "description": "repository_description"
    },
    ...
]
```

3. Run the script

```bash
node index.js
```

## Usage

The script reads the repository details from a repositories.json file and creates public GitHub repositories for each entry in the JSON file.
