// GoogleReviewsFeed.js

import axios from 'axios';
import { useEffect, useState } from 'react';

function GoogleReviewsFeed() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getGoogleReviewsData().then((data) => {
      console.log(data);
      setReviews(data.reviews);
    });
  }, [setReviews]);

  return (
    <section id="reviews" className="py-8 bg-blue-400 whitespace-normal">
      <div className="container px-6 py-4 mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-white font-sans md:font-sans mb-5 text-center">
          Google Reviews
        </h2>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index} className="mb-4">
                <p>{review.text}</p>
                {/* Additional details from the review object */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </section>
  );
}

async function getGoogleReviewsData() {
  try {
    const apiUrl = 'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews';
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOOGLE_ACCESS_TOKEN}`, // Use your access token
      },
    });

    if (!response.data) {
      throw new Error(`Google Reviews API request failed with status ${response.status}`);
    }

    const reviewsData = response.data; // Adjust based on the actual response format
    const reviews = reviewsData.reviews || [];

    return {
      reviews,
      revalidate: 60 * 5, // Revalidate every 5 minutes
    };
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return {
      reviews: [],
      revalidate: 60 * 5, // Revalidate every 5 minutes
    };
  }
}

export default GoogleReviewsFeed;
