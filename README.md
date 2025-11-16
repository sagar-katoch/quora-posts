# Quarify - RESTful Posts Application

A simple cloud-deployed Q&A platform built with Node.js and Express, demonstrating CRUD operations and RESTful API principles.

## 🚀 Live Deployment

**[http://quarify-env.eba-pndateee.us-east-1.elasticbeanstalk.com/posts](http://quarify-env.eba-pndateee.us-east-1.elasticbeanstalk.com/posts)**

**Hosted on:** AWS Elastic Beanstalk (us-east-1)

## Features

- View all posts
- Create new posts
- Edit existing posts
- Delete posts
- View post details

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, CSS
- **Hosting:** AWS Elastic Beanstalk
- **Dependencies:** method-override, uuid

## Local Setup

```sh
git clone <repository-url>
cd REST
npm install
node app.js
```

Visit `http://localhost:3000/posts`

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/posts` | Get all posts |
| POST | `/posts` | Create a post |
| GET | `/posts/:id` | Get post details |
| PATCH | `/posts/:id` | Update post |
| DELETE | `/posts/:id` | Delete post |
