const express = require('express')
const json = require('body-parser').json()

const Cat = require('./cat.service')
const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const cats = Cat.get()
  return res.json(cats)
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { cat } = req.body
  Cat.dequeue(cat)
  return res.status(204).end()
})

module.exports = router
