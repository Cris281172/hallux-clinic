import {useEffect, useState} from "react";
import callToAPI from "../../../api";
import styles from './Reviews.module.scss'
import Review from "./Review";
import { IoFootstepsOutline } from "react-icons/io5";
import Circle from "../../../layouts/circle/Circle";

const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([])
    const [reviewIndex, setReviewIndex] = useState(0)
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        callToAPI('/google-reviews', 'get', )
            .then(res => setReviewsData(res))
            .catch(err => {

            })
    }, []);

    const changeReview = (direction) => {
        const isNext = direction > 0;
        const exitAnimation = isNext ? "slideOutToLeft" : "slideOutToRight";
        const enterAnimation = isNext ? "slideInFromRight" : "slideInFromLeft";

        setAnimation(exitAnimation);

        setTimeout(() => {
            setReviewIndex(prevIndex => {
                const newIndex = prevIndex + direction;
                if(newIndex < 0) {
                    return reviewsData.length - 1;
                } else if(newIndex >= reviewsData.length) {
                    return 0;
                } else {
                    return newIndex;
                }
            });

            setAnimation(enterAnimation);

            setTimeout(() => {
                setAnimation("");
            }, 500);
        }, 500);
    };

    return(
        <div className={styles.reviews}>
            <Circle size="big" left="-100px" bottom="50px"/>
            <Circle size="medium" right="-50px" top="20px"/>
            <div className="container">
                <div className={styles.reviewsTitleWrapper}>
                    <h2 className={styles.reviewsTitle}>
                        Opinie klientów
                    </h2>
                </div>
                {reviewsData.length !== 0 &&
                    <div className={styles.reviewWrapper}>
                        <button disabled={animation.length > 0} className={`${styles.changeReview} ${styles.prev}`} onClick={() => changeReview(-1)}>
                            <IoFootstepsOutline className={styles.icon} />
                        </button>
                        <Review reviewData={reviewsData} reviewIndex={reviewIndex} animation={animation}  />
                        <button disabled={animation.length > 0} className={`${styles.changeReview} ${styles.next}`} onClick={() => changeReview(1)}>
                            <IoFootstepsOutline className={styles.icon} />
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Reviews;