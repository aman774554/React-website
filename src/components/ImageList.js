import React from 'react';

const ImageList = (props) => {
  //console.log(props)
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt="images" width='500px' className="img-fluid text-center" />

  })
	return(
		<div>
		{images}
		</div>
	)
}

export default ImageList;
