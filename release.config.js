module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/AratioD/demo-github-actions.git",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github']
}
