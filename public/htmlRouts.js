let db = require(`../db/db.json`);

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(db)
    })
    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        newNote.id = db[db.length - 1].id + 1;

        db.push(newNote);
        res.sendStatus(200)
    })
app.delete("/api/notes/:id", function (req, res){
    var position;
    for (var i=0; i<db.length; i++){
        if (db[i].id === req.params.id){
            position = i        }
    }
db.splice(position,1)
res.sendStatus(200)

});

}