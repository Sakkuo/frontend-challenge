import React, { useState } from "react";
import { imageAPI } from "../../../services/ImageService";
import ImageItem from "../ImageItem/ImageItem";
import "./ImageContainer.css";

const ImageContainer: React.FC = () => {
    const [limit, setLimit] = useState(15);
    const {
        data: images,
        isLoading,
        error,
    } = imageAPI.useFetchAllImagesQuery(limit);

    console.log(images)

    return (
        <div className="image__list">
            {isLoading && <div>Идёт загрузка котиков</div>}
            {error && <div>Произошла ошибка при загрузке котиков(((</div>}
            {images?.map((image) => (
                <ImageItem image={image} key={image.id} />
            ))}
        </div>
    );
};

export default ImageContainer;
