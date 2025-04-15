import { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm.jsx';
import LevelsList from '../LevelsList/LevelsList.jsx';
import Modal from '../Modal/Modal.jsx';
import css from './ReadMoreBtn.module.css';

const ReadMoreBtn = ({ teacher, activeLevel, setIsReadMoreExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookingFormModalOpen, setIsBookingFormModalOpen] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(prev => {
      const newState = !prev;
      setIsReadMoreExpanded(newState);
      return newState;
    });
  };

  return (
    <>
      {isExpanded ? (
        <div className={css.readMoreInfo}>
          <p>{teacher.experience}</p>
          <ul className={css.reviewsList}>
            {teacher.reviews.map((review, index) => (
              <li key={index} className={css.reviewsListItem}>
                <div className={css.reviewerInfo}>
                  <img
                    className={css.reviewerPhoto}
                    src={
                      review.reviewer_photo
                        ? review.reviewer_photo
                        : '/images/noPhoto.png'
                    }
                    alt={
                      review.reviewer_photo ? 'User photo' : 'No photo image'
                    }
                  />
                  <div>
                    <h3 className={css.name}>{review.reviewer_name}</h3>
                    <div className={css.rating}>
                      <svg className={css.icon}>
                        <use href="/sprite.svg#star"></use>
                      </svg>
                      <p>{review.reviewer_rating}.0</p>
                    </div>
                  </div>
                </div>
                <p className={css.text}>{review.comment}</p>
              </li>
            ))}
          </ul>
          <LevelsList teacher={teacher} activeLevel={activeLevel} />
          <button
            className={css.bookingFormBtn}
            type="button"
            onClick={() => setIsBookingFormModalOpen(true)}
          >
            Book trial lesson
          </button>
          <Modal
            isOpen={isBookingFormModalOpen}
            onClose={() => setIsBookingFormModalOpen(false)}
          >
            <BookingForm
              onClose={() => setIsBookingFormModalOpen(false)}
              teacher={teacher}
            />
          </Modal>
          <button onClick={toggleReadMore} className={css.showLessBtn}>
            Show less
          </button>
        </div>
      ) : (
        <button onClick={toggleReadMore} className={css.readMoreBtn}>
          Read more
        </button>
      )}
    </>
  );
};

export default ReadMoreBtn;
