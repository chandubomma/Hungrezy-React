import React, { useState } from 'react';
import { FaUserCircle, FaThumbsUp, FaComment } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const initialReviews = [
  {
    id: 1,
    userName: 'Vivek Vardhan Chilluri',
    userProfile: 'https://example.com/user1.jpg',
    rating: 4,
    reviewText: 'Great food and friendly service!',
    helpfulVotes: 15,
    comments: [
      { id: 101, userName: 'Jane Smith', commentText: 'I agree, it was fantastic!' },
    ],
    date: '2023-10-15',
  },
  {
    id: 2,
    userName: 'Vivek Vardhan Chilluri',
    userProfile: 'https://example.com/user1.jpg',
    rating: 5,
    reviewText: 'awesome taste and I want more',
    helpfulVotes: 20,
    comments: [
      { id: 101, userName: 'Jane Smith', commentText: 'I agree, it was fantastic!' },
    ],
    date: '2023-11-15',
  },
  // Add more review objects as needed
];

const RestaurantReviews = () => {
    const [allReviews, setAllReviews] = useState([...initialReviews]);
    const [displayReviews, setDisplayReviews] = useState([...allReviews]);
    const [newReview, setNewReview] = useState({
        userName: '',
        rating: 5,
        reviewText: '',
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleAddReview = () => {
    if (newReview.userName && newReview.reviewText) {
      const currentDate = new Date().toISOString().slice(0, 10);
      const newReviewObject = {
        id: allReviews.length + 1,
        userName: newReview.userName,
        userProfile: 'https://example.com/default-profile.jpg',
        rating: parseInt(newReview.rating),
        reviewText: newReview.reviewText,
        helpfulVotes: 0,
        comments: [],
        date: currentDate,
      };
     // Add the new review to the allReviews state
        setAllReviews((prevAllReviews) => [...prevAllReviews, newReviewObject]);
        // Update the displayReviews state to include the new review
        setDisplayReviews((prevDisplayReviews) => [...prevDisplayReviews, newReviewObject]);
      setNewReview({
        userName: '',
        rating: 5,
        reviewText: '',
      });
    }
  };

  const handleSortChange = (sortOption) => {
    setDisplayReviews((prevDisplayReviews) => {
      switch (sortOption) {
        case 'newest':
          return [...prevDisplayReviews].sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
          return [...prevDisplayReviews].sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'highVotes':
          return [...prevDisplayReviews].sort((a, b) => b.helpfulVotes - a.helpfulVotes);
        case 'lowVotes':
          return [...prevDisplayReviews].sort((a, b) => a.helpfulVotes - b.helpfulVotes);
        default:
          return prevDisplayReviews;
      }
    });
  };

  const handleFilterChange = (filterOption) => {
    setDisplayReviews((prevDisplayReviews) => {
      switch (filterOption) {
        case 'all':
          const uniqueReviews = new Map([...allReviews, ...prevDisplayReviews].map((review) => [review.id, review]));
          return Array.from(uniqueReviews.values());
        default:
          const filterValue = parseInt(filterOption);
          return allReviews.filter((review) => review.rating >= filterValue);
      }
    });
  };

  
  

  return (
    <div className="container mx-auto p-4">
       {/* Add Review Section */}
       <div className="mb-6 ">
        <h2 className="text-xl font-semibold mb-2 text-gray-500 ">Add a Review</h2>
        <div className='flex justify-between mt-4'>
        <div className="flex flex-col mb-2 w-96">
          <label htmlFor="userName" className="mr-2 text-gray-500 font-semibold mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={newReview.userName}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded h-12 outline-none"
          />
        </div>
        <div className="flex flex-col mb-2 w-96">
          <label htmlFor="rating" className="mr-2 text-gray-500 font-semibold mb-1">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded h-12 outline-none"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        </div>
        
        <div className="flex flex-col mb-2 mt-3">
          <label htmlFor="reviewText" className="mr-2 text-gray-500 font-semibold mb-1">
            Review
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={newReview.reviewText}
            onChange={handleInputChange}
            rows={5}
            className="p-2 border border-gray-300 rounded outline-none"
          />
        </div>
        <button
          onClick={handleAddReview}
          className="bg-amber-500 text-white px-4 py-2.5 mt-4 rounded-md hover:bg-amber-600 focus:outline-none"
        >
          Submit Review
        </button>
      </div>

     
      {/* Sort and Filter Options */}
      <div className="mb-6 text-gray-600 font-semibold">
        <label className="mr-6 text-gray-500 font-semibold">Sort By</label>
        <select
          onChange={(e) => handleSortChange(e.target.value)}
          className="p-2 border border-gray-300 rounded w-72 h-16 outline-none"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highVotes">High Helpful Votes First</option>
          <option value="lowVotes">Low Helpful Votes First</option>
        </select>

        <label className="ml-10 mr-6 text-gray-500 font-semibold">Filter By</label>
        <select
          onChange={(e) => handleFilterChange(e.target.value)}
          className="p-2 border border-gray-300 rounded w-72 h-16 outline-none"
        >
          <option value="all">All Ratings</option>
          <option value="3">3 Stars and Above</option>
          <option value="4">4 Stars and Above</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      {/* Reviews Section */}
      <div className='border-b-4 pb-4'>
        {displayReviews.map((review) => (
          <div key={review.id} className="mb-6 p-4 border border-gray-300 rounded">
            <div className="flex items-center mb-2">
              <FaUserCircle className="text-4xl text-gray-500 mr-2" />
              <div>
                <p className="font-semibold">{review.userName}</p>
                <p className="text-gray-500">
                  <AiFillStar className="inline text-yellow-500 text-lg" />
                  {review.rating}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-2">{review.reviewText}</p>
            <div className="flex items-center text-gray-500 mb-2">
              <FaThumbsUp className="mr-1" />
              {review.helpfulVotes} Helpful Votes
              <FaComment className="ml-4 mr-1" />
              {review.comments.length} Comments
            </div>
            <p className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        ))}
      </div>
      
      

    </div>
  );
};

export default RestaurantReviews;
