import { Carousel, IconButton } from "@material-tailwind/react";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Example() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages([
            {
                id: 1,
                image: "/img/banner1.jpeg"

            },
            {
                id: 2,
                image: "/img/banner2.jpeg"
            },
            {
                id: 3,
                image: "/img/banner3.jpeg"
            },
            {
                id: 4,
                image: "/img/banner4.jpeg"
            }

        ]);
    }, [])


    return (
        <Carousel
            loop={true}
            autoplay={true}
            autoplayDelay={3000}

            className="z-0"
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 -translate-y-2/4 left-4"
                >
                    <IoIosArrowBack strokeWidth={2} className="w-10 h-10 text-primary-400" />
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4"
                >
                    <IoIosArrowForward strokeWidth={2} className="w-10 h-10 text-primary-400" />
                </IconButton>
            )}


        >

            {
                images.map((img) => {

                    return (
                        <Image
                            key={img.id}
                            id={img.id}
                            src={img.image}
                            alt="image"
                            width={1200}
                            height={600}
                            className="w-full h-full"
                            placeholder="blur"
                            blurDataURL={img.image}
                        />

                    )
                }
                )
            }

        </Carousel>
    );
}