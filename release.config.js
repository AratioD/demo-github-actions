module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/AratioD/demo-github-actions",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        ["@semantic-release/exec", {
            "prepareCmd": "./update-version.sh ${nextRelease.version}",
        }],
    ]
}
