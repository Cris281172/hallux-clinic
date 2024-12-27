import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import before1 from '../../../images/gallery/before/before1.webp'
import after1 from '../../../images/gallery/after/after1.webp'
import before2 from '../../../images/gallery/before/before2.webp'
import after2 from '../../../images/gallery/after/after2.webp'
import after3 from '../../../images/gallery/after/after3.webp'
import before3 from '../../../images/gallery/before/before3.webp'
import after4 from '../../../images/gallery/after/after4.webp'
import before4 from '../../../images/gallery/before/before4.webp'
import { IoFootstepsOutline } from "react-icons/io5";
import styles from './BeforeAfterGallery.module.scss'
const Line = () => {
    return(
        <div style={{ display: 'grid', placeContent: 'center', height: '100%'}}>

            <button

                style={{

                    all: 'unset',

                    fontSize: 56,

                    borderRadius: '50%',

                }}

            >

                {<IoFootstepsOutline style={{color: '#FFD3CA'}} />}

            </button>

        </div>
    )
}

const BeforeAfterGallery = () => {

    return(
        <div className={styles.beforeAfterGalleryWrapper}>
            <div className={styles.beforeAfterGallery}>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={after1} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={before1}  alt="Image two" />}
                    handle={
                        <Line />
                    }
                    position={50}
                />
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={after2} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={before2}  alt="Image two" />}
                    handle={
                        <Line />
                    }
                    position={50}
                />
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={after3} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={before3}  alt="Image two" />}
                    handle={
                        <Line />
                    }
                    position={50}
                />
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={after4} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={before4}  alt="Image two" />}
                    handle={
                        <Line />
                    }
                    position={50}
                />
            </div>
        </div>


    )
}

export default BeforeAfterGallery;