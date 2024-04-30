import React from 'react'
import ImageDisplay from '../Imagedisplay'
import { useParams } from 'react-router-dom'

function Gallery() {
  //to import the id of the user
 const { id } = useParams();

  return (
    <div>
       <ImageDisplay userId={id} />
    </div>
  )
}

export default Gallery
