const express = require('express')
const json = require('body-parser').json()

const Dog = require('./dog.service')
const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const dogs = Dog.get()
  return res.json(dogs)
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { dog } = req.body
  Dog.dequeue(dog)
  return res.status(204).end()
})

module.exports = router
