import { MongoClient } from 'mongodb'

const getGalleryData = async (req, res) => {
  let client
  try {
    client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URL)
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database.' })
    return
  }

  const db = client.db('wedding')
  let result
  try {
    result = await db.collection('photo').find().toArray()
  } catch (error) {
    client.close()
    res.status(500).json({ message: 'Storing message failed' })
    return
  }
  client.close()

  res.status(200).json({ data: result })
}

export default getGalleryData
