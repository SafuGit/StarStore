import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

// eslint-disable-next-line no-unused-vars
const AppDetailReview = ({handleSetReview, reviews, installedOnce}) => {
  const {user} = use(AuthContext);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (installedOnce) {
      const form = event.target;
      const [comment, rating] = [form.comment.value, form.rating.value];

      const userName = user.displayName;

      const new_review = {
        comment,
        rating,
        user: userName
      }

      handleSetReview(new_review);
    } else {
      Swal.fire({
        icon: 'error',
        title: "Please install the app first!",
      })
      return;
    }
  }

  return (
    <div className='w-[95vw] p-8 mx-auto rounded-xl bg-[#1F2937] mt-10'>
      <div className='flex justify-between items-center'>
        <form onSubmit={handleReviewSubmit} className='md:w-1/2 w-full'>
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
            <button className='btn bg-blue-600 rounded-full mt-10 md:w-[30%]'>Submit Review</button>
          </fieldset>
        </form>
        <div className='w-1/2 md:flex items-center flex-col gap-4 hidden'>
          <img className='w-120 rounded-xl' src="https://www.appsflyer.com/wp-content/uploads/2022/12/Apple-app-store-vs-Google-play-store-reviews-1.jpg" alt="" />
          <h1 className='font-bold text-xl'>Your Review helps us improve our app!</h1>
        </div>
      </div>
    </div>
  );
};

export default AppDetailReview;