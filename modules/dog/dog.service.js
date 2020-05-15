const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const dogs = new Queue()
store.dogs.forEach(dog => dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets to be adopted.
    return dogs.all()
  },

  dequeue(dog) {
    // Remove a pet from the queue.
    dogs.dequeue(dog)
    return
  }
}
