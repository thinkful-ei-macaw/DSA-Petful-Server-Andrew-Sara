const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')
const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get()
  return res.json(people)
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body
  People.enqueue(person)
  return res.json(People.get())
})

router.delete('/', json, (req, res) => {
  //remove person from the queue every 5 seconds?
  const { person } = req.body
  People.dequeue(person)
  return res.status(204).end()
})

module.exports = router
