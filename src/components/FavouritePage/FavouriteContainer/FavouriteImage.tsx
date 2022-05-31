import React, { useEffect, useState } from "react";
import { IFavourite } from "../../../models/IFavourite";
import FavouriteItem from "../FavouriteItem/FavouriteItem";

const FavouriteImage: React.FC = () => {
    const [allFavourite, setAllFavourite] = useState<IFavourite[] | undefined>([]);

    useEffect(() => {
        renderImages()
    }, [])

    const renderImages = () => {
        const likedImagesArray = [];

        for (let i = 0; i < localStorage.length; i++) {
            let key: any = localStorage.key(i);

            likedImagesArray.push({ 
                id: key,
                url: localStorage.getItem(key) });
        }

        setAllFavourite(likedImagesArray);
    };

    return (
        <div className="image__list">
            {allFavourite?.map((favourite) => (
                <FavouriteItem favourite={favourite} key={favourite.id}/>
            ))}
        </div>
    );
};

export default FavouriteImage;
