import axios from "axios";
import { AnyArray } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
import { IImage } from "../../../models/IImage";
import { imageAPI } from "../../../services/ImageService";
import ImageItem from "../ImageItem/ImageItem";
import "./ImageContainer.css";

const ImageContainer: React.FC = () => {
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1)
    const {
        data: images,
        isLoading,
        error,
        isSuccess
    } = imageAPI.useFetchAllImagesQuery([limit, page])
    const [newImages, setNewImages] = useState<AnyArray>([])


    useEffect(() => {
        if(isSuccess) {
            setNewImages([...newImages,...images])
        }
    }, [isSuccess === true])



    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    const scrollHandler = (e: any) => {
        setTimeout(() => {
            if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150) {
                setPage(prevState => prevState + 1)
            }
        }, 1000)
    }


    return (
        <div className="image__list">
            {isLoading && <div>Идёт загрузка котиков</div>}
            {error && <div>Произошла ошибка при загрузке котиков(((</div>}
            {newImages?.map((image: IImage) => (
                <ImageItem image={image} key={image.id+Math.random()*20} />
            ))}
        </div>
    );
};

export default ImageContainer;
