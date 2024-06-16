export default  function Posts() {
  return (
   <div className="post mx-2">
      <div className="img-post"></div>
      <h5>Tecnologia</h5>
      <h3>O guia definitivo do Blog</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iusto totam itaque aliquam adipisci, voluptate 
        atque tenetur quia enim voluptatibus saepe aut eos laudantium qui, 
        eveniet esse optio similique nisi expedita?
      </p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2">
          <h6 className="color-blue">Fulano de tal</h6>
          <p>Aug 2, 2020 -  10 min rea</p>
        </div>
      </div>
   </div>
  )
}
