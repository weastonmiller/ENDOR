import { getMongo } from '../mongo';

class PostDAO {
  static findPosts(query) {
    const mongo = getMongo();
    if (!mongo) throw new Error('No Mongo client');
    const collection = mongo.collection('tagDex-post');
    return collection.aggregate(query).toArray();
  }
}

export default PostDAO;
