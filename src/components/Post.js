import React from 'react';
import marked from 'marked';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Post = ({ article }) => {
    console.log(article)
    const { recipeTitle, recipeCategory, recipePicture, recipeDescription, typicalRecipeLocation, recipeCountry } = article.fields
    const postRecipeDescription = marked(recipeDescription)
    const position = typicalRecipeLocation
    console.log(typicalRecipeLocation);
    return (
        <div className='post'>
            <h2 className='title'>{recipeTitle}</h2>
            {recipePicture && <img className='picture' src={recipePicture.fields.file.url} alt={recipeTitle} title={recipeTitle} /> }
            <h4 className='category'>{recipeCategory}</h4>
            <section dangerouslySetInnerHTML={{ __html: postRecipeDescription }} />
            <h4 className='country'>{recipeCountry}</h4>
            <MapContainer style={{height:"400px"}} center={position} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

Post.propTypes = {

}

export default Post
