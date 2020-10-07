# Shorten Urls

[Online](https://url.sls.plus)

[![Build Status](https://github.com/serverless-plus/shorten-urls/workflows/Release/badge.svg?branch=master)](https://github.com/serverless-plus/shorten-urls/actions?query=workflow:Validate+branch:master)
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

1. Deploy vpc,db and layer firstly:

```bash
$ npm run deploy:vpc && npm run deploy:db && npm run deploy:layer
```

2. Deploy serverless scf:

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
