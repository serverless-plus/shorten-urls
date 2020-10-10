# Shorten Urls

[Online](https://url.sls.plus)

[![Build Status](https://github.com/serverless-plus/shorten-urls/workflows/Validate/badge.svg?branch=master)](https://github.com/serverless-plus/shorten-urls/actions?query=workflow:Validate+branch:master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Serverless shorten urls service using [serverless framework](https://github.com/serverless/serverless).

## Features

- [x] [Serverless Framework](https://github.com/serverless/serverless)
- [x] [Typescript](https://github.com/microsoft/TypeScript)
- [x] [Github Actions](https://github.com/features/actions)
- [x] [Eslint](https://github.com/eslint/eslint)
- [x] [Prettier](https://github.com/prettier/prettier)
- [x] [Jest](https://github.com/facebook/jest)
- [x] [semantic-release](https://github.com/semantic-release/semantic-release)

## Usage

```bash
$ git clone https://github.com/serverless-plus/shorten-urls.git
```

## Development

Install dependencies:

```bash
$ npm install
```

To start server locally, you can start local posgresql by docker and connect to it for development.

Start local docker postgresql:

```bash
$ npm run docker:up
```

Run server:

```bash
$ npm run dev
```

## Deployment

Before deployment, you should build project:

```bash
$ npm run build
```

Then you can deploy relative resources, after the first deployment, below step is optional for next time.

### Deploy database

Serverless PostgreSQL need `VPC`, so we need create a `VPC` for it:

```bash
$ npm run deploy:vpc
```

Then we can deploy database:

```bash
$ npm run deploy:db
```

### Deploy layer

For nodejs project, we can deploy `node_modules` directory to layer, so after first deployment, we do not need to deploy `node_modules` directory again, this is very useful to make our source code deployment quickly.

To make layer code smaller, we can run:

```bash
$ rm -rf node_modules && npm install --production
```

so we just deploy npm modules of production to layer,

```bash
$ npm run deploy:layer
```

> **Notice**: after layer deployment, if you do not change npm modules for production, you don't need to deploy layer.

### Deploy static files

Upload static files in `public` directory to COS:

```bash
$ npm run deploy:cos
```

### Deploy server code

```bash
$ npm run deploy
```

### Commit Lint

All `git commit` mesage must follow below syntax:

```bash
type(scope?): subject  #scope is optional
```

support type：

- **feat**: add new feature
- **fix**: fix bug or patch feature
- **ci**: CI
- **chore**: modify config, nothing to do with production code
- **docs**: create or modifiy documents
- **refactor**: refactor project
- **revert**: revert
- **test**: test

Most of time, we just use `feat` and `fix`.

## License

MIT License

Copyright (c) 2020 Serverless Plus
