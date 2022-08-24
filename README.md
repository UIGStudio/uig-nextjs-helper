

# Install

```
npm install @uig/uig-nextjs-helper
```
or
```
yarn add -D @uig/uig-nextjs-helper
```

# Usage

Save   Personal Access Token to `~/.glconfig` to use it in all projects.
1. Create PATH - https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html
    - Needed scope: `api`, `read_api`, `read_repository`
2. Save token gitlab api url in `~/.glconfig` file

```sh
{
  "token" : "<TOKEN>",
  "url" : "<GITLAB_INSTANCE_URL>"
}
```
3. Edit `package.json > postinstall` script:

```json
{
    "scripts": {
        "postinstall": "gitlab-env -i <ID>"
    }
}
```
4. Run it once
```sh
yarn postinstall
```

# Available props
 
