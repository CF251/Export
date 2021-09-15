# neo-authentication-service

This repository will be used as a shared authentication service for the use of internal usage.

### system requirements

- node >= v12.18.0
- mongo >= v4.2

### Installation

- Download and install Nodejs (https://nodejs.org/en/)
- Download and install Typescript (https://www.typescriptlang.org/)
- Install MongoDB with docker

```
apt install docker-ce
docker pull mongo:4.2
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.2
```

# Database configuration

### Create Database

```
docker exec -it mongodb bash
mongo
use store
db.createCollection("auths",{})
db.createCollection("admins",{})
```

##### Create Super Admin

```
db.admins.insertOne({
   email : "kurt.inge.solheim@ntb.no",
   name : "Kurt Inge Solheim",
   type : "superadmin",
   token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1cnQuaW5nZS5zb2xoZWltQG50Yi5ubyIsIm5hbWUiOiJLdXJ0IEluZ2UgU29saGVpbSIsInR5cGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNjE4NDcyMTM4LCJleHAiOjE3NDQ2MTYxMzh9.SFaPlU5FTnTPHHoG_z25QTJTN0JMMQhWpyUOAJ4zo7U"
})
```

This super admin token is valid from 15-04-2021 to 15-04-2025. On it's expiration a new token needs to be generated and put in the environment. To create a new token the following script needs to be run and replace the super admin token in the environment with the newly created token from the script.

```
const jwt = require('jsonwebtoken');

const generateSuperAdminJWT = () => {
  const token = jwt.sign(
    {
      email: 'kurt.inge.solheim@ntb.no',
      name: 'Kurt Inge Solheim',
      type: 'superadmin',
    },
    'UQFsSrAutv2zjnUmQRUO',
    { expiresIn: '1460d' },
  );
  return token;
};

console.log(generateSuperAdminJWT());
```

## Steps to run

- Start Database with `docker start mongodb`
- Install dependencies with `npm install`
- Build with `npm run postinstall`
- Start server `npm start`
- Run test with `npm run test`
- Server will serve on port `3000`

## API Endpoints

## AUTH

##### verifies user authentication token

```
[ROUTE] /auth [POST]
```

### Sample request Body

```
{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMDAxIiwibmFtZSI6IkJyYWQgUGl0dCIsInR5cGUiOiJzdXBlcmFkbWluIiwiZW1haWwiOiJhc2lmLmltdGl5YXpAY2VmYWxvLmNvbSJ9.TfMp3kDp-HeE-0DplNmDDv5Z_V3CJ7jEic9dgLl-wal",
    "uuid": "6e77bb55-64bc-4752-8452-e5e8c2e6ecal"
}
```

### Response type JSON

```
 {
   "status":"invalid"
 }
```

## Get users latest token

##### Fetch the latest user token from database

```
[ROUTE] /customer/get-token/6e77bb55-64bc-4752-8452-e5e8c2e6ecal [GET]
```

### Sample response Body

```
{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMDAxIiwibmFtZSI6IkJyYWQgUGl0dCIsInR5cGUiOiJzdXBlcmFkbWluIiwiZW1haWwiOiJhc2lmLmltdGl5YXpAY2VmYWxvLmNvbSJ9.TfMp3kDp-HeE-0DplNmDDv5Z_V3CJ7jEic9dgLl-wal"
}
```

## Delete user

##### Delete user record

```
  [ROUTE] /customer/delete/6e77bb55-64bc-4752-8452-e5e8c2e6ecal [DELETE]
```

#### Sample response Body

```
{
   "status":"success"
}
```

## Revoke User Token

##### Deauthenticates user

```
[ROUTE] /customer/revoke-token/6e77bb55-64bc-4752-8452-e5e8c2e6ecal [PATCH]
```

#### Sample response Body

```
{
  "status":"success"
}
```

## Add user

###### Creates a new user records

```
[ROUTE] /customer/add [POST]
```

#### Sample request Body

```
{
    "uuid": "6e77bb55-64bc-4752-8452-e5e8c2e6ecal"
}
```

## Renew Token

###### Updates a user token

```
  [ROUTE] /customer/renew-token/:6e77bb55-64bc-4752-8452-e5e8c2e6ecal [PUT]
```

##### Sample response Body

```
 {
    "status":"success"
 }
```
