module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/PostiDigital/omaposti-tracking-indexer",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github']
}
