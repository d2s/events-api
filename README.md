# Events API

JSON API for listing events related details.


## Development guidelines

### Setting up local development environment

```sh
git clone URL
npm install
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

- `.gitignore` is based on the [Node.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) example ignore patterns.

### Create new Git commits

- Check what files have changed, and look what branch you are now:
  ```sh
  git status
  ```
- Add required files to the Git staging area:
  ```sh
  git add FILENAME
  ```
- Create a new commit:
  ```sh
  npm run git-commit
  ```

