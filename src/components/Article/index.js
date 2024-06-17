import Posts from "../Posts"

export default function Article(){
  return (
    <section className="container">
      <h3>Article</h3>
      <div className="mt-5 container-posts">
        <Posts subtitle="Tecnologia" title="O guia definitivo do Blog">
          1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae doloremque ex recusandae dicta! Consectetur officiis quibusdam, ea.
        </Posts>
        <Posts subtitle="Fotografia" title="Quais as melhores câmeras para 2021">
          2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae doloremque ex recusandae dicta! Consectetur officiis quibusdam, ea.
        </Posts>
        <Posts subtitle="Cinema" title="Os 10 filmes com maior bilheteria">
          3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae doloremque ex recusandae dicta! Consectetur officiis quibusdam, ea.
        </Posts>
      </div>
    </section>
  )
}

