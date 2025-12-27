import bodyParser from "body-parser";
import express from "express"

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

app.get("/books", (req, res) => {
    res.json(mangas);
});

//creating a new book object and adding it in the existing array of books using the push() method.
app.post("/books", (req, res) =>{
    const newManga = {
        id: mangas.length + 1,
        title: req.body.title,
        author: req.body.author,
    };
    mangas.push(newManga);
    res.json({message: "Book Added"});
})

//creating an in memory data also known as mock data/dummy data
const mangas = [
    {
        id: 1,
        title: "One Piece",
        author: "Eiichiro Oda"
    },
    {
        id: 2,
        title: "Dragon Ball",
        author: "Akira Toriyama"
    },
    {
        id: 3,
        title: "KochiKame",
        author: "Osamu Akimoto"
    },
];

