let db = require(`../db/db.jason`);

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.jason(db)
    })
    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        newNote.id = db[db.length - 1].id + 1;

        db.push(newNote);
        res.sendStatus(200)
    })

}