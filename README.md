## Instructions

You will need a github access token
Permissions needed for token: repo, notifications, user
(https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

Create a .env file at the project root with key REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN

example:

`REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=yourgithubtoken`

```language
yarn install

for dev:
yarn start
open localhost:3000

for prod:
yarn build
serve -s build
open localhost:5000
```
