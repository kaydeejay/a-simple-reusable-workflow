const actions = process.env.GITHUB_ACTIONS || false;
const workflow_ref = process.env.GITHUB_WORKFLOW_REF || 'no ref'
console.log(`This script is being run by github actions (true/false): ${actions}`);
console.log(`Workflow ref: ${workflow_ref}`);
