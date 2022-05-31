import React, { useState } from "react";
import { IFavourite } from "../../../models/IFavourite";
import imageHoveredHeart from '../../../img/hover.png'
import imageClickedHeart from '../../../img/liked.png'

interface FavouriteItemProps {
    favourite: IFavourite;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({ favourite }) => {
    const [mousePlace, setMousePlace] = useState<boolean>(false);
    const [heartClicked, setHeartClicked] = useState<boolean>(true);

    const showHeart = () => {
        setTimeout(() => {
            setMousePlace(true);
        }, 100);
    };
    const hideHeart = () => {
        setTimeout(() => {
            setMousePlace(false);
        }, 100);
    };

    const uploadLikedImage = (url: string, id: string) => {
        localStorage.setItem(id, url);
    };

    const deleteLikedImage = (id: string) => {
        localStorage.removeItem(id);
    };

    return (
        <div
            className="image"
            onMouseEnter={showHeart}
            onMouseLeave={hideHeart}
        >
            {mousePlace && !heartClicked && (
                <img
                    src={imageHoveredHeart}
                    alt="fw"
                    className="image__hover"
                    onMouseEnter={showHeart}
                    onClick={() => {
                        setHeartClicked(!heartClicked);
                        uploadLikedImage(favourite.url, favourite.id);
                    }}
                />
            )}
            {mousePlace && heartClicked && (
                <img
                    src={imageClickedHeart}
                    alt="fw"
                    className="image__hover"
                    onMouseEnter={showHeart}
                    onClick={() => {
                        setHeartClicked(!heartClicked);
                        deleteLikedImage(favourite.id);
                    }}
                />
            )}
            <img src={favourite.url} alt="cat" className="catImage"/>
        </div>
    );
};

export default FavouriteItem;
