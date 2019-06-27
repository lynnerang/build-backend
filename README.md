

## Table of contents
* [Intro](#Build-Backend-App)
* [Getting Started](#Getting-Started)
* [How to Use](#How-to-Use)
* [Project Emphasis](#Project-Emphasis)
* [Future Plans](#Future-Plans)
* [License](#License)


# Build-Backend App

This project is a Turing front-end program development project focused on working with back-end technologies like Node/Express, Knex, SQL, Postgres.

I had wanted to build an app around constellations for a while, but could never find the data I wanted.  I used web-scraping on a constellation data website to scrape constellation data and data on the stars listed for each constellation for this app.  


## Getting Started

If you'd like to clone this repository to your own local machine, run the following command in your terminal:

```shell
git clone https://github.com/lynnerang/build-backend.git
```

Then run the following command to install dependencies:

```shell
npm install
```

To view the app in action, run the following command in your terminal:

```bash
npm start
```

Then, go to `http://localhost:3000/` in your browser to see the code running in the browser.

---

## How to Use

### Get Data

#### Get all constellations
- METHOD: Get
- ENDPOINT: /api/v1/constellations
- EXAMPLE REQUEST:
```http
GET /api/v1/constellations/ HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: c9555f79-4a1a-40fe-ae1b-243c4b85f62c,ed578c3b-2973-4574-8174-fd1ab1716d61
Host: localhost:3000
accept-encoding: gzip, deflate
content-length: 93
Connection: keep-alive
cache-control: no-cache
```
- EXAMPLE RESPONSE:
```json
[
    {
        "id": 1,
        "name": "Andromeda",
        "mythology": "The Princess Andromeda; in Greek mythology, the daughter of Cepheus and Cassiopeia and wife of Perseus.",
        "first_appeared": "Ancient",
        "genitive_form": "Andromedae",
        "created_at": "2019-06-27T19:30:31.045Z",
        "updated_at": "2019-06-27T19:30:31.045Z"
    },
    {
        "id": 2,
        "name": "Antlia",
        "mythology": "The air pump; a southern constellation introduced by Lacaille in 1756, originally the 'pneumatic machine'.",
        "first_appeared": "1756 (Lacaille)",
        "genitive_form": "Antliae",
        "created_at": "2019-06-27T19:30:31.050Z",
        "updated_at": "2019-06-27T19:30:31.050Z"
    },
    {
        "id": 3,
        "name": "Apus",
        "mythology": "The bird of paradise; a southern constellation introduced by Keyser & de Houtman in 1598.",
        "first_appeared": "1598 (Keyser & de Houtman)",
        "genitive_form": "Apodis",
        "created_at": "2019-06-27T19:30:31.052Z",
        "updated_at": "2019-06-27T19:30:31.052Z"
    }
]
```

#### Get specific constellation
- METHOD: Get
- ENDPOINT: /api/v1/constellations/:id
- EXAMPLE REQUEST:
```http
GET /api/v1/constellations/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: c9555f79-4a1a-40fe-ae1b-243c4b85f62c,ed578c3b-2973-4574-8174-fd1ab1716d61
Host: localhost:3000
accept-encoding: gzip, deflate
content-length: 93
Connection: keep-alive
cache-control: no-cache
```
- EXAMPLE RESPONSE:
```json
    {
        "id": 1,
        "name": "Andromeda",
        "mythology": "The Princess Andromeda; in Greek mythology, the daughter of Cepheus and Cassiopeia and wife of Perseus.",
        "first_appeared": "Ancient",
        "genitive_form": "Andromedae",
        "created_at": "2019-06-27T19:30:31.045Z",
        "updated_at": "2019-06-27T19:30:31.045Z"
    }
```

#### Get all stars
- METHOD: Get
- ENDPOINT: /api/v1/stars
- EXAMPLE REQUEST:
```http
GET /api/v1/stars HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: c9555f79-4a1a-40fe-ae1b-243c4b85f62c,ed578c3b-2973-4574-8174-fd1ab1716d61
Host: localhost:3000
accept-encoding: gzip, deflate
content-length: 93
Connection: keep-alive
cache-control: no-cache
```
- EXAMPLE RESPONSE:
```json
[
    {
        "id": 1,
        "name": "Alpheratz",
        "magnitude": "2.1",
        "link": "https://in-the-sky.org/data/object.php?id=TYC1735-3180-1",
        "constellation_id": 1,
        "created_at": "2019-06-27T19:30:31.214Z",
        "updated_at": "2019-06-27T19:30:31.214Z"
    },
    {
        "id": 2,
        "name": "Mirach",
        "magnitude": "2.1",
        "link": "https://in-the-sky.org/data/object.php?id=TYC2286-1329-1",
        "constellation_id": 1,
        "created_at": "2019-06-27T19:30:31.216Z",
        "updated_at": "2019-06-27T19:30:31.216Z"
    },
    {
        "id": 3,
        "name": "Almach",
        "magnitude": "2.2",
        "link": "https://in-the-sky.org/data/object.php?id=TYC2837-2311-1",
        "constellation_id": 1,
        "created_at": "2019-06-27T19:30:31.217Z",
        "updated_at": "2019-06-27T19:30:31.217Z"
    }
]
```

#### Get specific star
- METHOD: Get
- ENDPOINT: /api/v1/stars/:id
- EXAMPLE REQUEST:
```http
GET /api/v1/stars/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: c9555f79-4a1a-40fe-ae1b-243c4b85f62c,ed578c3b-2973-4574-8174-fd1ab1716d61
Host: localhost:3000
accept-encoding: gzip, deflate
content-length: 93
Connection: keep-alive
cache-control: no-cache
```
- EXAMPLE RESPONSE:
```json
    {
        "id": 1,
        "name": "Alpheratz",
        "magnitude": "2.1",
        "link": "https://in-the-sky.org/data/object.php?id=TYC1735-3180-1",
        "constellation_id": 1,
        "created_at": "2019-06-27T19:30:31.214Z",
        "updated_at": "2019-06-27T19:30:31.214Z"
    }
```

### Post data

#### Add a new constellation
- METHOD: Post
- ENDPOINT: /api/v1/constellations
- EXAMPLE REQUEST:
```http
POST /api/v1/constellations/ HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: dfc41fd6-a0dc-44fa-8e66-c5c0079b20d3,b4010e62-005d-43b6-a438-90f86e5e4870
Host: localhost:3000
accept-encoding: gzip, deflate
content-length: 109
Connection: keep-alive
cache-control: no-cache

{
    "name": "testName",
    "mythology": "testMyth",
    "first_appeared": "testApp",
    "genitive_form": "testGen"
}

NOTE: All fields shown above are required.

```
- EXAMPLE RESPONSE:
```json
{ "id": 122 }
```

#### Add a new constellation
- METHOD: Post
- ENDPOINT: /api/v1/stars
- EXAMPLE REQUEST:
```http
POST /api/v1/stars/ HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: dfc41fd6-a0dc-44fa-8e66-c5c0079b20d3,b4010e62-005d-43b6-a438-90f86e5e4870
Host: localhost:3000
accept-encoding: gzip, deflate
content-length: 109
Connection: keep-alive
cache-control: no-cache

{
    "name": "testName",
    "constellation_id": 1,
    "magnitude": 3.1,
    "link": "http://safasafdsafsf.com"
}
```
NOTE: All fields shown above are required.

- EXAMPLE RESPONSE:
```json
{ "id": 1456 }
```

### Delete Data

#### Delete any record from constellations or stars
- METHOD: Delete
- ENDPOINT: /api/v1/:table/:id
- EXAMPLE REQUEST:
```http
DELETE /api/v1/constellations/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.0
Accept: */*
Cache-Control: no-cache
Postman-Token: dfc41fd6-a0dc-44fa-8e66-c5c0079b20d3,b4010e62-005d-43b6-a438-90f86e5e4870
Host: localhost:3000
accept-encoding: gzip, deflate
content-length: 109
Connection: keep-alive
cache-control: no-cache
```
- EXAMPLE RESPONSE:
```json
{ "Successfully deleted." }
```


## Future Plans

I plan to keep working on this to add more flexibility with handling the data, such as:
- Adding patch method for editing records
- Cascading deletes (e.g. deleting associated stars when a constellation is deleted)

I'd also like to build out a front-end UI to allow users to view and interact with the data.


## Project Emphasis

View the project specification on the <a href="http://frontend.turing.io/projects/build-your-own-backend.html">Turing webpage for this project</a>.

- [x] Node.js/Express
- [x] Knex
- [x] Relational Databases
- [x] Nightmare (web-scraping)
- [x] SQL
- [x] Postgres


## Licensing

All credit goes to <a href="turing.io">Turing School of Software</a> for providing the project specifications.
