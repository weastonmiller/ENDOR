import PostDAO from '../dao/postDAO';

async function getPosts() {
  let query = [{ $match: {} }];

  const postData = await PostDAO.findPosts(query).catch((e) => {
    console.error(error);
    return [];
  });

  return { posts: postData };
}

export { getPosts };
