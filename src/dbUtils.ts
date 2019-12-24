import * as mongodb from 'mongodb'

const dbName = 'FreeMusicDownload'
const collectionName = 'music_ifkdy_com_test'

var clientRef: mongodb.Collection

export async function init (): Promise<mongodb.Collection> {
  if (clientRef) {
    return clientRef
  }
  return new Promise((resolve, reject) => {
    console.log('connecting to DB')
    mongodb.connect('mongodb://localhost:27017/', (err, client: mongodb.MongoClient) => {
      if (!err) {
        console.log('connecting to DB success')
        clientRef = client.db(dbName).collection(collectionName)
        resolve(clientRef)
      } else {
        console.log('connecting to DB fail')
        reject(err)
      }
    })
  })
}
