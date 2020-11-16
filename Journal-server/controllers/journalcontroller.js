const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Journal = require('../db').import('../models/journal');

router.get('/practice', validateSession, function(req, res){
    res.send('Hey! This is a practice route!')
});

router.post('/create', validateSession, (req, res) => {
  const journalEntry = {
    title: req.body.journal.title,
    date: req.body.journal.date,
    entry: req.body.journal.entry,
    owner: req.user.id
  }
  Journal.create(journalEntry)
  .then(journal => res.status(200).json(journal))
  .catch(err => res.status(500).json({error: err}))
})


router.get("/", (req, res) => {
  Journal.findAll()
  .then(journals => res.status(200).json(journals))
  .catch(err => res.status(500).json({error: err}))
});


router.get("/mine", validateSession, (req, res) => {
  let userId = req.user.id
  Journal.findAll({
    where: { owner: userId}
  })
  .then(journals => res.status(200).json(journals))
  .catch(err => res.status(500).json({ error: err }))
})


router.get("/:title", validateSession, (req, res) => {
  let title = req.params.title;
  
  Journal.findAll({
    where: { title: title}
  })
  .then(journals => res.status(200).json(journals))
  .catch(err => res.status(500).json({ error: err }))
})


router.put("/update/:entryId", validateSession, function(req, res) {
  const updateJournalEntry = {
    title: req.body.journal.title,
    date: req.body.journal.date,
    entry: req.body.journal.entry,
  };
  
  const query = {where: { id: req.params.entryId, owner: req.user.id } };

  Journal.update(updateJournalEntry, query)
  .then(journals => res.status(200).json(journals))
  .catch(err => res.status(500).json({ error: err }));

});

router.delete("/delete/:id", validateSession, function(req, res) {
  const query = { where: { id: req.params.id, owner: req.user.id } };
  Journal.destroy(query)
  .then(() => res.status(200).json(journals))
  .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;

/*   Line 1: We import the Express framework and store it inside the variable express. This instance becomes our gateway to using Express methods.

  Line 2: We create a new variable called router. Since the express variable(line 1) gives us access into the express framework, we can access express properties and methods by calling express + .. Therefore, when we call express.Router(), we are using the express variable to access the Router() method.
The Router() method will return a router object for us. You can read about it more at the Express docs (Links to an external site.).

  Line 5: We use the router object by using the router variable to get access into the Router() object methods.
- get() is one of the methods in the object, and we call it here. This method allows us to complete an HTTP GET request. We pass two arguments into the .get method.
- The first argument'/practice' is the path. Similar to how we used the /test path to test out Postman previously.
- The second argument is a callback function. This is also sometimes called a “handler function”. This function gets called when the application receives a request to the specified route and HTTP method. The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

  Line7: Inside our callback function, we call res.send(). send() is an express method that can be called on the res or response object. Our response parameter is just a simple string.

  Line 10: We export the module for usage outside of the file. */