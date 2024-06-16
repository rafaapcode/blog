import Posts from "../Posts"

export default function Article(){
  return (
    <section className="container">
      <h3>Article</h3>
      <div className="mt-5 container-posts">
        <Posts />
        <Posts />
        <Posts />
      </div>
    </section>
  )
}

