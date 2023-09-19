import { useNavigate } from "react-router-dom";


const Contact = () => {

      const navigate = useNavigate()


      const goBack = ()=>{
            navigate(-1)
      }

  return (
    <div className="contact"> 
    <h2 className="text-6xl text-center pt-8 font-bold">Contact</h2>
    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias accusamus doloribus, dolorum facilis molestiae sequi vel et eveniet fugiat nihil iusto? Sed, dolore excepturi. Aliquid dignissimos sit aut aperiam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dignissimos reiciendis? Aperiam nesciunt architecto consequuntur necessitatibus quia voluptatem, ipsum ducimus corporis deserunt et vero totam, eaque mollitia dignissimos accusamus cupiditate.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsa eos dicta earum inventore, beatae quo fuga fugit facilis enim voluptates recusandae quisquam soluta? Excepturi nobis rerum tempora in. Laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus dolorum molestias assumenda blanditiis reiciendis laudantium distinctio dolorem perspiciatis doloribus neque, voluptates aspernatur nam sunt non quasi nobis harum voluptas accusamus. Labore rem eum aperiam unde impedit maiores vero eligendi. Quidem amet explicabo vitae, fugiat quam ipsum? Aspernatur, tempora! Voluptatem, possimus quidem perferendis porro repellat quos aliquam officiis ducimus incidunt expedita? A, dolorem aliquid. Fugit voluptatem in officiis dolor exercitationem alias quia unde! Sapiente, doloribus dolor voluptate id laboriosam expedita laborum quisquam quibusdam sed praesentium, deserunt, quis quidem odio tempore ea consequatur iure harum accusantium molestiae saepe nobis autem. Et, nihil! </p>
    <button className="btn btn-primary" onClick={goBack}>go back</button>
    </div>
  );
};

export default Contact;