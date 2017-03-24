import Firebase from 'firebase'
import LRU from 'lru-cache'
import { fetchItems } from './api'

let api
const config = {
  databaseURL: 'https://vuefirees6example.firebaseio.com/'
}
const version = '/v0'

if (process.__API__) {
  api = process.__API__
} else {
  Firebase.initializeApp(config)
  api = process.__API__ = Firebase.database().ref(version)
  api.onServer = true

  // fetched item cache
  api.cachedItems = LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15 // 15 min cache
  })

  // cache the latest story ids
  api.cachedIds = {}
  api.child(`items`).on('value', snapshot => {
    api.cachedIds[`items`] = snapshot.val()
  })
}

export default api
