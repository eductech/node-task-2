# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Databse setup

Inside progect repo:

```
npm run migration:run
```

Then all nessesary tablesand relations will be created. To revert migration:

```
npm run migration:revert
```

## Running application

Inside progect root folder:

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Running application in Docker

Install Docker with Compose. Then build and run containers

```
sudo docker-compose up
```

You could configure ports and other settings on your own using `.env`.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

## Performance comparison

**Express**
```
All virtual users finished
Summary report @ 22:49:06(+0300) 2021-07-10
  Scenarios launched:  300
  Scenarios completed: 42
  Requests completed:  285
  Mean response/sec: 7.16
  Response time (msec):
    min: 31
    max: 9987
    median: 6585
    p95: 9677.5
    p99: 9968.3
  Scenario counts:
    Create user and check: 300 (100%)
  Codes:
    200: 42
    201: 243
  Errors:
    ETIMEDOUT: 258
```

**Fastify**
```
All virtual users finished
Summary report @ 23:01:13(+0300) 2021-07-10
  Scenarios launched:  300
  Scenarios completed: 41
  Requests completed:  282
  Mean response/sec: 7.14
  Response time (msec):
    min: 21
    max: 9955
    median: 6473
    p95: 9555.4
    p99: 9874.4
  Scenario counts:
    Create user and check: 300 (100%)
  Codes:
    200: 41
    201: 241
  Errors:
    ETIMEDOUT: 259
```

### Response time summary (ms)

| Param       | Express     | Fastify     |
| ----------- | ----------- | ----------- |
| min         | 31          | 21          |
| max         | 9987        | 9955        |
| median      | 6585        | 6473        |
| p95         | 9677.5      | 9555.4      |
| p99         | 9968.3      | 9874.4      |
