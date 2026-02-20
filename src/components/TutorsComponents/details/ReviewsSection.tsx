'use client';

import { IReview } from '@/interfaces/review.interface';
import ReviewCard from './ReviewCard';

interface Props {
  reviews: IReview[];
  tutorId: string;
}

const ReviewsSection = ({ reviews, tutorId }: Props) => {
  const rootReviews = reviews.filter(r => !r.parentId);

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold mb-12">Reviews</h2>

      {rootReviews.length === 0 ? (
        <p className="text-gray-500">
          No reviews yet. Be the first to leave a review!
        </p>
      ) : (
        <div className="space-y-10">
          {rootReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
