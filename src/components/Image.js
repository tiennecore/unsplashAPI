import React from 'react';

function Image({image}) {


    return (
        <div className={"card"}>
            <img
                src={image.urls.regular}
                alt=""
            />
        </div>
    );
}

export default Image;