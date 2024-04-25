import { MongoClient } from 'mongodb'

const insertLike = async (req, res) => {
  const { id, num } = req.body
  if (req.method === 'POST') {
    let client
    try {
      client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URL)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' })
      return
    }

    const db = client.db('wedding')
    let target
    try {
      target = await db
        .collection('photo')
        .findOneAndUpdate({ file_index: id }, { $set: { like: num } })
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing message failed' })
      return
    }

    client.close()
    res.status(200).json({ data: target })
  }
}

export default insertLike
