import React from 'react'
import {useState, useEffect} from 'react';
import Bloglist from './Bloglist';

function Home() {

   const [blogs,setBlogs] = useState([
       {title:'My new website', body:'lorem ipsum ...', author:'Mario', id:1},
       {title:'Welcome party!', body:'lorem ipsum ...', author:'Yoshi', id:2},
       {title:'web dev top tips', body:'lorem ipsum ...', author:'Mario', id:3},
   ]);

   const [name,setName] = useState("Houssame")


   const handleDelete = (id) =>{
       const newBlogs = blogs.filter(blog => blog.id !== id)
       setBlogs(newBlogs);
   }

  

   useEffect(()=>{
       //useffect hook runs after every render aka data changes
       // it's used for eg to fetch data or comunicate with kinda auth service those things are known as side effects in react ...
       console.log("UseEffect ran");

       // if we want to run this hook after a specific render (state change) we need to use a dependencie array
   },/* dependency array goes here */[]);

// eg of dependency array => when name changes useEffect runs
   useEffect(()=>{
    console.log(name);
   },[name])

    return (
        <div className="home">   
        <p>{name}</p>
        <button onClick={()=>setName(name==="Houssame"?"Messaoud":"Houssame")} >Change name</button>
           <Bloglist blogs={blogs} title="All Blogs" handleDelete = {handleDelete} />
           <Bloglist blogs={blogs.filter((blog)=>{
                return (blog.author==='Mario')
           })} title="Mario's Blogs" handleDelete = {handleDelete} />
        </div>
    )
}

export default Home
