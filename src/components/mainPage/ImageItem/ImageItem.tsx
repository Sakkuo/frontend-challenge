import React, { useState } from "react";
import { IImage } from "../../../models/IImage";
import "./ImageItem.css";
import imageHoveredHeart from "../../../img/hover.png";
import imageClickedHeart from "../../../img/liked.png";

interface ImageItemPros {
    image: IImage;
}

const ImageItem: React.FC<ImageItemPros> = ({ image }) => {
    const [mousePlace, setMousePlace] = useState<boolean>(false);
    const [heartClicked, setHeartClicked] = useState<boolean>(false);

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
                        uploadLikedImage(image.url, image.id);
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
                        deleteLikedImage(image.id);
                    }}
                />
            )}
            <img src={image.url} alt="w" className="catImage" />
        </div>
    );
};

export default ImageItem;
