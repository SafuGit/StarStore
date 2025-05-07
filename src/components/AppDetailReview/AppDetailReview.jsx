import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const AppDetailReview = ({handleSetReview, reviews}) => {
  const {user} = use(AuthContext);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const [comment, rating] = [form.comment.value, form.rating.value];
    console.log(comment, rating);

    const userName = user.displayName;

    const new_review = {
      comment,
      rating,
      userName
    }

    handleSetReview(new_review);
    console.log(reviews);
  }

  return (
    <div className='w-[95vw] p-8 mx-auto rounded-xl bg-[#1F2937] mt-10'>
      <div className='flex justify-between items-center'>
        <form onSubmit={handleReviewSubmit} className='w-1/2'>
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <legend className="fieldset-legend text-3xl">Post a Review</legend>
            <div className='divider mt-0'></div>
            <label className='label text-xl'>Review</label>
            <div className="rating mb-4">
              <input type="radio" name="rating" value={1} className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
              <input type="radio" name="rating" value={2} className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
              <input type="radio" name="rating" value={3} className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
              <input type="radio" name="rating" value={4} className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
              <input type="radio" name="rating" value={5} className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>
            <label className='label text-xl'>Comment</label>
            <textarea type="text" className="textarea textarea-info" name='comment'></textarea>
            <button className='btn bg-blue-600 rounded-full mt-10 w-[30%]'>Submit Review</button>
          </fieldset>
        </form>
        <div className='w-1/2 flex items-center flex-col gap-4'>
          <img className='w-120 rounded-xl' src="https://appsamurai.com/wp-content/uploads/2016/08/shutterstock_1562183146-scaled.jpg" alt="" />
          <h1 className='font-bold text-xl'>Your Review helps us improve our app!</h1>
        </div>
      </div>
    </div>
  );
};

export default AppDetailReview;