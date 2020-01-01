import * as mongodb from 'mongodb'

const dbName = 'FreeMusicDownload'
const collectionName = 'music_ifkdy_com_test'

let collectionClientRef: mongodb.Collection;
let retPromise: Promise<mongodb.Collection>; // 等待建立连接期间 进来的调用，返回第一次调用的promise

export async function init (): Promise<mongodb.Collection> {
  if (collectionClientRef) {
    return collectionClientRef
  }
  if (retPromise!==undefined) {
    return retPromise;
  }
  retPromise = new Promise((resolve, reject) => {
    console.log('connecting to DB')
    mongodb.connect('mongodb://localhost:27017/', (err, client: mongodb.MongoClient) => {
      if (!err) {
        console.log('connecting to DB success')
        collectionClientRef = client.db(dbName).collection(collectionName)
        resolve(collectionClientRef)
      } else {
        console.log('connecting to DB fail')
        reject(err)
      }
    })
  })
  return retPromise;
}
