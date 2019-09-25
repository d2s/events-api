# Events API

JSON API for listing events related details.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/commitizen/cz-cli)

## Development guidelines

### Setting up local development environment

```sh
git clone https://github.com/d2s/events-api.git
cd events-api
npm install
```

### Running the application locally

```sh
npm run dev
```

## Dependencies

- [Micro](https://www.npmjs.com/package/micro)
  - _Asynchronous HTTP microservices_

### Development dependencies

- [micro-dev](https://www.npmjs.com/package/micro-dev)
  - _CLI provides tools for building microservices a breeze!_
- [xo](https://www.npmjs.com/package/xo)
  - _Opinionated but configurable ESLint wrapper with lots of goodies included. Enforces strict and readable code._

## Running the application with Docker

### Building Docker container images

Multi-stage builds allow developers to build smaller app images, saving storage space and resources from the end users. Really good thing from the app security viewpoint, as there are less leftovers from the build process.

_Dependencies:_ You need to have [Docker CE](https://docs.docker.com/install/) installed on your development environment, if you want to build new Docker containers.

To build the Docker container, run the command:

```sh
npm run build-docker
```

### Running the container image locally

_TODO:_ Write full instructions on how to run the application with Docker. (Not yet tested.)

```sh
docker-compose up
```

## Git commits

`.gitignore` is based on the [Node.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) example ignore patterns.

### Create new Git commits

#### Check what files have changed, and look what branch you are now

```sh
git status
```

#### Add required files to the Git staging area

```sh
git add FILENAME
```

#### Create a new commit

```sh
npm run git-commit
```

Alternative to that, you could use `git commit` directly.
Commit message will be automatically validated by `husky`.
Please write down the commit message to another text file/buffer
before creating the commit message (as husky will stop and tell error
if the commit message is not compliant to standards).

## Releasing new version

When you want to release a new version of the application, use the pre-configured scripts to automate much of the release process.

[standard-version](https://github.com/conventional-changelog/standard-version#standard-version) does automatic versioning and CHANGELOG generation, using
[conventional commit messages](https://conventionalcommits.org).

_How it works:_

1. When you land commits on your `master` branch, select the _Squash and Merge_ option.
2. Add a title and body to the commit message that follows the [Conventional Commits Specification](https://conventionalcommits.org).
3. When you're ready to release:
   1. run: `git checkout master; git pull origin master`
   2. run: `npm run release`
   3. run: `git push --follow-tags origin master`

`npm run release` (that is an alias for `standard-version`) does the following:

1. Bumps the version in _package.json_ (based on your commit history)
2. Uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to update _CHANGELOG.md_
3. Commits _package.json (et al.)_ and _CHANGELOG.md_
4. Tags a new release
