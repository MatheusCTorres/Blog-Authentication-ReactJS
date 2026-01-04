import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

export default function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);

  console.log(postList);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="homePage"
    >
      {postList.map((post, key) => {
        return (
          <div className="blog_post" key={key}>
            <div className="container_copy">
              <h3>Author: {post.author.name}</h3>
              <h1>{post.title}</h1>
              <p>{post.postText}</p>
              {/* {isAuth && post.author.id === auth.currentUser.uid && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  className="btn_primary"
                  target="_blank"
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  delete
                </a>
              )} */}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
