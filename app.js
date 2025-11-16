const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const methodOverride = require("method-override");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());

const { v4: uuidv4 } = require('uuid');

let posts = [
    {
        id: uuidv4(),
        username: "samsher",
        content: "i just love the new software update of my iphone 16 pro max"
    },
    {
        id: uuidv4(),
        username: "sagar",
        content: "finally i think i have completely understood the concept of the RESTful APIs"
    },
    {
        id: uuidv4(),
        username: "sanuj",
        content: "i am very happy to announce that finally i have got my first internship as a web developer in oracle"
    },
    {
        id: uuidv4(),
        username: "pratyush",
        content: "feeling demotivated!! but consistency is more important than hard work sometimes"
    },
    {
        id: uuidv4(),
        username: "pratyush",
        content: "hello guys!! can you tell me the best resource to practice DSA?"
    }
];

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show", { post });
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});
