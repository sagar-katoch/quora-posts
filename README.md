# Quora Posts - A RESTful Web Application

This project is a simple web application that demonstrates the principles of RESTful APIs. It's a basic clone of a Q&A platform like Quora, allowing users to create, read, update, and delete posts.

## Features

*   **View all posts:** A main feed where all posts are displayed.
*   **Create a new post:** A form to add a new post with a username and content.
*   **View post details:** See a single post in more detail on its own page.
*   **Edit a post:** Update the content of an existing post.
*   **Delete a post:** Remove a post from the feed.

## Technologies Used

*   **Backend:** Node.js, Express.js
*   **Templating Engine:** EJS (Embedded JavaScript)
*   **Middleware:** 
    *   `method-override`: To use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    *   `express.static`: To serve static files like CSS.
*   **Database:** In-memory JavaScript array (for demonstration purposes).
*   **ID Generation:** `uuid` to generate unique identifiers for each post.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your system.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd REST
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

1.  **Start the server:**
    ```sh
    node app.js
    ```
2.  Open your browser and go to `http://localhost:3000/posts`.

## API Endpoints

The application exposes the following RESTful endpoints:

| HTTP Method | Path                | Description                    | View            |
|-------------|---------------------|--------------------------------|-----------------|
| `GET`       | `/posts`            | Get all posts.                 | `index.ejs`     |
| `GET`       | `/posts/new`        | Show a form to create a new post.| `new.ejs`       |
| `POST`      | `/posts`            | Create a new post.             | (redirects)     |
| `GET`       | `/posts/:id`        | Get a single post by its ID.   | `show.ejs`      |
| `GET`       | `/posts/:id/edit`   | Show a form to edit a post.    | `edit.ejs`      |
| `PATCH`     | `/posts/:id`        | Update a specific post.        | (redirects)     |
| `DELETE`    | `/posts/:id`        | Delete a specific post.        | (redirects)     |
