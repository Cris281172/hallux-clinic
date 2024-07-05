import {useEffect, useState, useRef} from "react";
import callToAPI from "../../../api";
import styles from './Statistics.module.scss'
import Circle from "../../../layouts/circle/Circle";
const Statistics = () => {

    const [statistics, setStatistics] = useState({});
    const [animatedValues, setAnimatedValues] = useState({});
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    const easeInOut = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateValue = (start, end, duration, setValue) => {
        if (start === end) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = easeInOut(progress);
            setValue(Math.floor(easedProgress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        callToAPI('/statistics/get', 'get')
            .then(res => {
                setStatistics(res);
            })
            .catch()
    }, []);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    Object.keys(statistics).forEach(key => {
                        animateValue(0, statistics[key], 2500, (value) =>
                            setAnimatedValues(prev => ({ ...prev, [key]: value }))
                        );
                    });
                }
            },
            { threshold: 0.4 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [statistics, hasAnimated]);

    const statisticsConfiguration = [
        {
            text: 'Odwiedzin strony',
            value: animatedValues.views || 0
        },
        {
            text: 'Średnia Ocena Usług',
            value: `${animatedValues.rating || 0}/5`
        },
        {
            text: 'Formularzy kontaktowych',
            value: animatedValues.contactForm || 0
        },
        {
            text: 'Wykonanych usług',
            value: animatedValues.services || 0
        }
    ]

    return(
        <div className={styles.statistics} ref={statsRef}>
            <Circle size="medium" left="-50px" bottom="20px"/>
            <Circle size="medium" top="-50px" bottom="20px"/>
            <Circle size="small" right="50px" top="50px"/>
            <Circle size="big" right="-100px" bottom="-100px"/>
            <div className="container">
                <div className={styles.statisticsTitleWrapper}>
                    <h2 className={styles.statisticsTitle}>
                        Statystyki strony
                    </h2>
                </div>
                <div className={styles.statisticsLoop}>
                    {statisticsConfiguration.map((item, index) => {
                        return(
                            <div className={styles.statisticsLoopItem}>
                                <span className={styles.statisticsLoopItemValue}>
                                    {item.value}
                                </span>
                                <p className={styles.statisticsLoopItemText}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Statistics;