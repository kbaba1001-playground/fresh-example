# fresh example

This sample code is TODO application, which has simple CRUD on PostgreSQL

![screenshot](https://user-images.githubusercontent.com/1624680/211193917-0573652d-4707-4b38-a363-75a5cc8eb88d.png)

## Prepare

You need to install:

* Docker and Docker Compose
* Deno

## Setup

```bash
./runner setup
```

Start the server on localhost:8000

## Development

```bash
./runner up         # start the server
./runner db:migrate # run database migration
./runner db:seed    # load seed data
./runner reset      # reset docker containers
```
