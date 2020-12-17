import React from 'react';
import marked from 'marked';
import {Link, useParams} from 'react-router-dom';
import {MapContainer,TileLayer} from 'react-leaflet';

const Post = ({ posts }) => {

    const {id} = useParams();
    const post= posts.find(article => (article.sys.id===id ))
    const { recipeTitle, recipeCategory, recipePicture, recipeDescription, typicalRecipeLocation } = post.fields
    const postRecipeDescription = marked(recipeDescription)

    return (
        <div className='post'>
            <p className='title'><Link to= {`/returnofthecookbook/${post.sys.id}`} >{recipeTitle}</Link></p>
            {recipePicture && <img className='picture' src={recipePicture.fields.file.url} alt={recipeTitle} title={recipeTitle} /> }
            <br></br>
            <h4 className='category'>{recipeCategory}</h4>
            <br></br>
            <section dangerouslySetInnerHTML={{ __html: postRecipeDescription }} />
            <br></br>
            <MapContainer style={{height:"400px"}} center={typicalRecipeLocation} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}




export default Post
