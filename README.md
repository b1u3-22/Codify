# Codify

Codify is a social network aimed at developers. You can post your projects, share updates and help potential employers find you.

## How to run Codify?
There are 2 options for running Codify. The recommended way is to use [Docker](https://www.docker.com/).

### The Docker way
First create a volume. Without this, data will not be saved.
```
docker volume create cdf
```

Now run the container. The app will be available on port `40`.
```
docker run b1u3-22/codify -p 40:40 --mount source=cdf,target=/app/storage
```
### Manual install with `npm`
