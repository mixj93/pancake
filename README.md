# 🥞 pancake

## Install

```bash
$ npm i -g @mixj93/pancake

$ pnpm i -g @mixj93/pancake
```

## Usage

```
Usage: pancake [options] [command]

🥞 Pancake is a baidu pan commandline tool

Options:
  -V, --version              output the version number
  -k, --ak <access-key>      Access Key is required (env: PANCAKE_ACCESS_KEY)
  -h, --help                 display help for command

Commands:
  list [options] <folder>    list files in a folder
  link [options] <file_ids>  get download link for files, separated by comma
  help [command]             display help for command
```

## Development

```bash
# Install dependencies
$ npm install

# Build
$ npm run build

# Develop
$ npm start
# permission problem? Try chmod +x xxx/xxxx/pancake
$ npx pancake --help
```

## Publish

```bash
$ npm run pre
$ npm login
$ npm publish --access=public
```
