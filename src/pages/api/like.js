import { MongoClient } from 'mongodb'

const insertLike = async (req, res) => {
  const { id, num } = req.body
  if (req.method === 'POST') {
    let client
    try {
      client = await MongoClient.connect(
        'mongodb+srv://test:Gjhq9w5Nf1JZ3G2z@ideal-worldcup.ltuh0tm.mongodb.net/'
      )
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
