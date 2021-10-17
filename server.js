const express = require('express')
const UserModel = require('./model/user.model')
const app = express()
require('dotenv').config()
require('./db/db')

app.use(express.urlencoded({extended: true}));
app.use(express.json())


//create a user
app.post('/user', (req, res) => {
    const user = new UserModel({ nom: req.body.nom, age: req.body.age, favoriteFoods: req.body.favoriteFoods})
    user.save((err, doc) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(doc)
        }
    })
})

app.get('/user/:nom', (req, res) => {

  UserModel.findOneAndRemove({nom: req.params.nom})
    .then( doc => res.send(doc) )
    .catch((err) => {
      console.log(err);
    })
})

app.put('/user/:nom', (req, res) => {
    const update = { nom: req.body.nom, age: req.body.age}
    UserModel.findOneAndUpdate({ nom: req.params.nom }, {$set: update})
    .then( doc => res.send(doc) )
    .catch((err) => {
      console.log(err);
    })
})



app.get('/users', (req, res) => {

  UserModel.find()
    .then( doc => res.send(doc) )
    .catch((err) => {
      console.log(err);
    })
})





app.listen(process.env.PORT, () => {
    console.log(`le server a demarer sur le port ${process.env.PORT}`);
})




