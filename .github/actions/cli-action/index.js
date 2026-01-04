const core = require('@actions/core');
const { execSync } = require('child_process');

async function run() {
    try {
        const version = core.getInput('version') || 'latest';
        console.log(`Installing mycli version: ${version}`);

        execSync(`curl -fsSL https://cli.example.com/install.sh | sh`, { stdio: 'inherit' });

        console.log('mycli installed successfully.');
    }
    catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`);
    }
}

run();  