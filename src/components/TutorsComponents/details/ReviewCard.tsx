import { IReview } from '@/interfaces/review.interface';

interface Props {
  review: IReview;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-slate-50 p-6 rounded-2xl">
      <p className="text-yellow-500 mb-2">{'⭐'.repeat(review.rating)}</p>

      <p className="mb-3 text-gray-700">{review.comment}</p>

      <p className="font-semibold mb-4">{review.student.name}</p>

      {/* Replies */}
      {review.replies && review.replies.length > 0 && (
        <div className="ml-8 border-l pl-6 space-y-4">
          {review.replies.map(reply => (
            <ReviewCard key={reply.id} review={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
