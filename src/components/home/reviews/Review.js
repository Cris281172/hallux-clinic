import styles from './Review.module.scss'
import avatarPlaceholder from '../../../images/home/reviews/avatar-placeholder.webp'
import googleLogo from '../../../images/home/reviews/google-logwebp.webp'
import { FaStar, FaRegStar  } from "react-icons/fa6";

const Review = ({reviewData, reviewIndex, animation}) => {
    const handleError = (e) => {
        e.target.src = avatarPlaceholder;
    }

    let stars = []

    for(let i = 1; i <= reviewData[reviewIndex].rating; i++){
        stars.push(<FaStar className={styles.star} />)
    }

    return(
        <div className={`${styles.review} ${styles[animation]}`}>
            <div className={styles.reviewTopPanel}>
                <div className={styles.reviewAvatarWrapper}>
                    <img src={reviewData[reviewIndex].profile_photo_url} className={styles.reviewAvatar} onError={handleError} />
                </div>
                <h3 className={styles.reviewTitle}>
                    {reviewData[reviewIndex].author_name}
                </h3>
                <div className={styles.starsRating}>
                    {stars.map(star => <>{star}</>)}
                </div>
                {/*{reviewData[reviewIndex].rating}*/}
            </div>
            <div className={styles.reviewContent}>
                <p className={styles.reviewContentText}>
                    {reviewData[reviewIndex].text}
                </p>
                <div className={styles.bottomContent}>
                    <p className={styles.reviewTime}>
                        Opinia dodana: {reviewData[reviewIndex].relative_time_description}
                    </p>
                    <a className={styles.googleLogoLink} href="https://www.google.com/search?uds=AMwkrPsQ2l26FSnBjz4HpqrK71uE41o0LiFGD-arWUxewOqTYlJ51SEzFrOdsBZk8lbCoZTSQIs4J4yaLti9mraoSoJEzsbEEDd2Dn6I4GBBGeBkBNtTVPPZ1RtRtsXG9LX68abmfu3M4Y_un28_HV6FiMjCC95RcA&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9SeEWS5UnAD8wZmPuSqasXL2oy_FlHEAYd637_m99XWYncrHh8jC69OPPlhqFqQLdxFlsRP3ZTmzriobOt_kmmJdG2PpVhT9suFNkuNT9c1kr1KCxCM5rHbd2PYPvxbm6a2HMi89&q=Hallux%20Clinic%20-%20Mobilny%20Gabinet%20Podologiczny%20Opinie&cs=1&hl=pl&sa=X&ved=0CCAQ_4MLahcKEwjA_JmGsrKEAxUAAAAAHQAAAAAQBQ&biw=375&bih=626&dpr=3" target="_blank">
                        <img className={styles.googleLogo} src={googleLogo} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Review;