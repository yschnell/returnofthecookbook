import React, {useEffect,useState} from 'react';
import marked from 'marked';
import {Link, useParams} from 'react-router-dom';
import {MapContainer,TileLayer} from 'react-leaflet';

const Post = ({ posts }) => {

    const {id} = useParams();
    //const [post, setPost] = useState(null);
    //setPost (posts.find(article => (article.sys.id===id )))
    const post=posts.find(article => (article.sys.id===id ))
    //const { recipeTitle, recipeCategory, recipePicture, recipeDescription, typicalRecipeLocation } = post.fields
    //const postRecipeDescription = marked(post.fields.recipeDescription)
    console.log(posts);
    
    /*useEffect(() => {
        if (posts.length) {
            setPost(posts.find(article => (article.sys.id===id )))
        }
    }, [posts,post.sys.id]) */

    
    return (
       
        <div className='post'>
             <div>{post && 
             <> 
             <p className='title'><Link  style={{ textDecoration: 'none', color:"black" }} to= {`/returnofthecookbook/${post.sys.id}`} >{post.fields.recipeTitle}</Link></p> 
             {post.fields.recipePicture && <img className='picture' src={post.fields.recipePicture.fields.file.url} alt={post.fields.recipeTitle} title={post.fields.recipeTitle} /> }
             <h4 className='category'>{post.fields.recipeCategory}</h4>
             <section dangerouslySetInnerHTML={{ __html: marked(post.fields.recipeDescription) }} />
             <MapContainer style={{height:"400px"}} center={post.fields.typicalRecipeLocation} zoom={6} scrollWheelZoom={false}>
                 <TileLayer
                 attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 />
             </MapContainer>
             </>} </div>
        </div>
    
    )
}




export default Post
