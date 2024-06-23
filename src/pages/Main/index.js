import { useEffect, useState } from "react";
import api from "../../Services/api.js";
import Post from "../../components/Posts";

const Main = () => {
  const [posts, setPosts] = useState([]);

  function handleAxios() {
    api.get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err.message))
  }

  useEffect(() => {
    // api.get("/posts")
    //   .then(res => setPosts(res.data))
    //   .catch(err => console.error(err.message))
    handleAxios();
  }, []);

  return (
    <>
      <section className="container">
        <h2 className="mt-3">Articles</h2>
        <div className="mt-5 container-posts">
          {
            posts.map(post => {
              return (
                <>
                  <Post key={post.id} subtitle={post.category} title={post.title} author={post.author} date={post.date}>
                    {post.resume}
                  </Post>
                </>
              )
            })
          }
        </div>

      </section>
    </>
  )
}

export default Main