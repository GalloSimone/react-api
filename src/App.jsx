import { useState } from 'react'

function App() { 
  const [formData, setFormData] = useState({
  title:"",
  author:"",
  image: "",
  description: "",
  category:"",
  isPublished:false,
  });

  const[posts, setPost] = useState([])
//Handle change
  const handleChange = (event)=>{
    const {name,value,type}=event.target;
    setFormData((prev) =>({
      ...prev,
      [name]: type === "checkbox" ? checked : value, 
    }));
  }

 

//Handle submit
  const handleSubmit=(event)=>{console.log(formData)
    event.preventDefault();
    setPost([...posts,formData]);
    setFormData({
      title:"",
      author:"",
      Image: "",
      Description: "",
      category:"",
      isPublished:false,
    });
  };

 
//handle delete
const handleDelete=(index)=>{
  setPost(posts.filter((_,i) =>i !==index));
}

  return (
    <>
<div className="container ">
  <div className="header">
        <h1 className='text-center mb-5 mt-3'>IL MIO BLOG</h1>
  </div>
  <div className='card d-flex justify-content-center' style={{width: "50rem"}}>
  <form onSubmit={handleSubmit}>
     <input 
       type="text" 
       name="title"
       value={formData.title}
       onChange={handleChange}
       className='form-control mb-3'
       id='title'
       placeholder='Inserisci nome post'
       />

       <input 
       type="text" 
       name='author'
       value={formData.author}
       onChange={handleChange}
       className='form-control mb-3'
       id='author'
       placeholder='inserisci autore post'
       />

       <input
        type="text" 
        name='image'
        value={formData.image}
        onChange={handleChange}
        className='form-control mb-3'
        id='image'
        placeholder='inserisci URL immagine'
       />

       <textarea 
       name="description" 
       value={formData.description}
       onChange={handleChange}
       className='form-control mb-3'
       id="description"
       placeholder='inserisci descrizione post'
       ></textarea>

       <select
       name='category' 
       value={formData.category}
       onChange={handleChange}
       className="form-select mb-3"
       id='category'

       >
        
  <option value="">scegli il tuo genere </option>
  <option value="Fantasy">Fantasy</option>
  <option value="Horror">Horror</option>
  <option value="Commedia">Commedia</option>
  <option value="Avventura">Avventura</option>
  <option value="Romantico">Romantico</option>
  <option value="Altro">Altro...</option>
</select>
   <button  type='submit'   className='btn btn-primary m-5'>
        aggiungi
    </button>
  </form>
  </div>
  <div className='card mt-5 ' style={{width: "18rem"}}>
  <ul>
  {posts.map((post,index)=>
  <li key={index}>
    <h3 className='card-title'>{post.title}</h3>
    <p>{post.author}</p>
    {post.Image&&<img src='{post.image}'alt='{post.title}' className='card-img-top'/>}
    <p className='card-text'>{post.Description}</p> 
    <p>{post.category}</p>
 
   <button onClick={()=>handleDelete(index)}>❌</button>
  </li>
)} 
  </ul>
  </div>
</div>
    </>
  )
}



export default App
