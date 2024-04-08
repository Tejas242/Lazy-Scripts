
const { execSync } = require('child_process');
const fs = require('fs');

// Read repository details from repositories.json
const repositoriesData = JSON.parse(fs.readFileSync('repositories.json', 'utf8'));

// Function to create GitHub repositories
function createRepositories() {
  repositoriesData.forEach(repo => {
    // const visibilityFlag = repo.visibility === 'private' ? '--private' : '--public';
    const visibilityFlag = '--public';
    const command = `gh repo create ${repo.name} --description "${repo.description}" ${visibilityFlag}`;
    try {
      execSync(command);
      console.log(`Repository '${repo.name}' created successfully.`);
    } catch (error) {
      console.error(`Error creating repository '${repo.name}': ${error}`);
    }
  });
}

// Call the function to create repositories
createRepositories();
