// InstagramFeed.js

import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function InstagramFeed() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getInstagramData().then((data) => {
      console.log(data);
      setImages(data.images);
    });
  }, [setImages]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of images to show in each row
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
       <section id="schedule" className="py-8 bg-white whitespace-normal">
      <div className="container px-6 py-4 mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-black font-sans md:font-sans mb-10 text-center">
          Gallery
        </h2>
        <Slider {...settings}>
          {images.length > 0 ? (
            images
              .filter((media) => media.media_type === 'IMAGE' && !media.is_video) // Exclude videos
              .map((media, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-3">
                  {media.media_type === 'CAROUSEL_ALBUM' && media.children?.data ? (
                    // Render multiple images for carousel album
                    media.children.data.map((carouselImage, carouselIndex) => (
                      <a 
                        key={carouselIndex}
                        href={carouselImage.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover"
                          src={carouselImage.media_url}
                          alt={`Carousel Image ${carouselIndex}`}
                        />
                      </a>
                    ))
                  ) : (
                    <a
                      href={media.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="h-full w-full rounded-lg object-cover"
                        src={media.media_url}
                        alt={`Image ${index}`}
                      />
                    </a>
                  )}
                  {/* Rest of your code for icons */}
                </div>
              ))
          ) : (
            <p>No images available</p>
          )}
        </Slider>
      </div>
    </section>
  );
}

async function getInstagramData() {
  try {
    const apiUrl = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
    console.log(apiUrl);

    const response = await axios.get(apiUrl);

    if (!response.data) {
      throw new Error(`Instagram API request failed with status ${response.status}`);
    }

    const imagesData = response.data; // Assuming the data is an array in the response
    const images = imagesData.data || [];

    return {
      images,
      revalidate: 60 * 5, // Revalidate every 5 minutes
    };
  } catch (error) {
    console.error('Error fetching Instagram images:', error);
    return {
      images: [],
      revalidate: 60 * 5, // Revalidate every 5 minutes
    };
  }
}

export default InstagramFeed;
