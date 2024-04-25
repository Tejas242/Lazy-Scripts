const { execSync } = require('child_process');
const fs = require('fs');

// Array of repository names with their full names (nameWithOwner)
const repositories = [
    "C-cube-community/VR-app-Android",
    "C-cube-community/Database-Version-Control",
    "C-cube-community/Algorithm-Visualiser-DSA",
    "C-cube-community/Network-Analyser-Sniffer-Cybersecurity",
    "C-cube-community/HoneyPot-Cybersecurity",
    "C-cube-community/Web-Scraper",
    "C-cube-community/Leaderboard-Website-Web",
    "C-cube-community/Hackathon-Website-Web",
    "C-cube-community/RSVP-website-Web",
    "C-cube-community/Emotion-Based-Playlist-Generator-ML",
    "C-cube-community/Photo-Segregator-ML",
    "C-cube-community/Medical-Diagnosis-ML",
    "C-cube-community/Performance-Analyzer-Web-Data-Science",
    "C-cube-community/Music-Streaming-App-Android",
    "C-cube-community/Video-Conferencing-App-Android"
];

// Text content for the README.md
const readmeContent = (repoName) => `
# Welcome to ${repoName}

This repository contains project code related to ${repoName}.

## Getting Started

Follow these instructions to get started with the project.
`;

repositories.forEach(repo => {
    try {
        const repoName = repo.split('/').pop();
        const repoPath = `./${repoName}`;

        // Check if the repository directory already exists
        if (!fs.existsSync(repoPath)) {
            // Clone the repository locally
            execSync(`gh repo clone https://github.com/${repo}`);
        }

        // Create a README.md file in the repository
        execSync(`echo '${readmeContent(repoName)}' > ./${repoName}/README.md`);
        // Add, commit, and push the README.md to GitHub
        execSync(`cd ./${repoName} && git add README.md && git commit -m "Add README.md" && git push`);
        console.log(`README.md added to ${repoName}`);
    } catch (error) {
        console.error(`Error adding README.md to ${repo}: ${error.message}`);
    }
});

