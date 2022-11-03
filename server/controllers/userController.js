const User = require('../models/user')

const user_index = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      console.error('Error: ', err)
      res.send(err)
    })
}

const user_details = (req, res) => {
  const id = req.params.id
  User.findById(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error('Error: ', err)
      res.send(err)
    })
}

const user_create_user = (req, res) => {
  console.log(req.body)
  const newUser = new User(req.body)
  newUser.save()
    .then(data => {
      res.status(201).send(data)
    })
    .catch(err => {
      // console.error('Error: ', err)
      res.send(err)
    })
}

const user_update = (req, res) => {
  const id = req.params.id
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
    if(err) {
      console.error('Error: ', err)
      res.send(err)
    }
    res.send(data)
  } )
}

const user_delete = (req, res) => {
  const id = req.params.id
  User.findByIdAndDelete(id)
    .then(() => res.status(204).send(req.params.id))
    .catch(err => {
      console.error('Error: ', err)
      res.send(err)
    })
}

module.exports = {
  user_index,
  user_details,
  user_create_user,
  user_update,
  user_delete
}