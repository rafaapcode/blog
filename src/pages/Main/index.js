import { useState } from "react";
import api from "../../Services/api.js";
import Post from "../../components/Posts";

const Main = () => {
  const [posts, setPosts] = useState([]);


  async function handleAxios() {
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h1>Main.js</h1>
        <button onClick={handleAxios}>Fazer requisição</button>

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