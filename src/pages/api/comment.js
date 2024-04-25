import { MongoClient } from 'mongodb'

const insertComment = async (req, res) => {
  const { name, message, id } = req.body
  if (req.method === 'POST') {
    const newComment = {
      name,
      message,
      isOwner: false,
      regDate: new Date(),
    }
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
        .findOneAndUpdate(
          { file_index: id },
          { $push: { comment: newComment } }
        )
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing message failed' })
      return
    }

    client.close()
    res.status(200).json({ data: target, newComment })
  }
}

export default insertComment
