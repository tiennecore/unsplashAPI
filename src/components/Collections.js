import React, {useEffect, useState} from 'react';
import Unsplash from "./Unsplash";
import Collection from "./Collection";

function Collections() {
    const [Collections, setCollections] = useState(null)

    useEffect(() => {
        Unsplash.users.getCollections({username: "tiennecore"}).then(result => {
            if (result.errors) {
                console.log('error occurred: ', result.errors[0]);
            } else {
                const data = result.response
                //console.log(data.results)
                setCollections(data.results)
            }
        });
    }, [])

    return (
        <div className={"collections"}>
            {Collections ?
                Collections.map((collection) => {
                    return <Collection
                        key={collection.share_key}
                        IdCollection={collection.id}
                        CollectionTitle={collection.title}
                    />
                })
                : <div> <p>Aucune Collection trouvé</p></div>
            }
        </div>
    );
}

export default Collections;