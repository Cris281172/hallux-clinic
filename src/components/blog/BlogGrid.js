import {useEffect, useState} from "react";
import callToAPI from "../../api";
import styles from './BlogGrid.module.scss';
import {Link} from "react-router-dom";

const BlogGrid = () => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        callToAPI('/blog/post/get', 'get')
            .then((res) => setData(res))
    }, []);
    console.log(data)
    return(
        <div className={`${styles.gridContainer} container`}>
            {data.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    <img className={styles.itemImage} src={item.mainImage} />
                    <div>
                        <h3 className={styles.itemTitle}>
                            {item.title}
                        </h3>
                        <p className={styles.itemShortDesc}>
                            {item.shortDesc}
                        </p>
                        <Link to={`/blog/${item.slug}`} className={styles.itemShowMore}>
                            Czytaj dalej
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogGrid;