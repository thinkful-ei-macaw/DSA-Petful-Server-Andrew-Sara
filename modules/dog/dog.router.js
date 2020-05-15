const express = require('express')
const json = require('body-parser').json()

const Dog = require('./dog.service')
const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const dog = Dog.get()
  return res.json(dog)
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  Dog.dequeue()
  return res.status(204).end()
})

module.exports = router
