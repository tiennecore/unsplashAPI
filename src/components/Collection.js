import React, {useEffect, useState} from 'react';
import Unsplash from "./Unsplash";
import Image from "./Image";
import TouchCarousel from 'react-touch-carousel'

function Collection({IdCollection, CollectionTitle}) {
    const [Collection, setCollection] = useState(null)

    useEffect(() => {
        Unsplash.collections.getPhotos({collectionId: IdCollection}).then(result => {
            if (result.errors) {
                console.log('error occurred: ', result.errors[0]);
            } else {
                const data = result.response
                setCollection(data.results)
                console.log(data.results)
            }
        })
    }, [IdCollection]);

    return (
        <div className="collection">
            <h1>{CollectionTitle}</h1>
            <div className="CollectionImages">
                {Collection ?
                    Collection.map((image)=>{
                        return <Image key={image.id} image={image}/>
                    }):<div></div>
                }
            </div>
        </div>
    );
}

export default Collection;