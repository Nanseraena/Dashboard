import React from 'react';

interface ReviewData {
  id: number;
  author: string;
  content: string;
  rating: number;
  date: string;
}

const Review: React.FC = () => {
  const reviews: ReviewData[] = [
    { id: 1, author: 'John Doe', content: 'Great product!', rating: 5, date: '10 MAY 14:20' },
    { id: 2, author: 'Jane Smith', content: 'Could be better.', rating: 3, date: '12 MAY 09:15' },
    { id: 3, author: 'Alice Johnson', content: 'Really satisfied!', rating: 4, date: '15 MAY 16:45' },
  ];

  return (
    <div className="h-full">
      <h2 className="text-lg font-semibold mb-4">Recent Reviews</h2>
      <div className="overflow-y-auto h-[250px]">
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review.id} className="p-2 hover:bg-gray-50 rounded-lg">
              <p className="font-medium">{review.author}</p>
              <p className="text-sm text-gray-600">{review.content}</p>
              <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;