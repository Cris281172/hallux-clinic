import styles from './Location.module.scss';
import locationIcon from '../../../images/home/location/location-icon.webp';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 51.747050,
    lng: 19.394140
};

const Location = () => {
    const [map, setMap] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBqgMvGFdymtjIwttVQrFyUGicRhw-0AYE",
        mapIds: ['c0ebc78dc2d9c33b'] // Poprawione: mapIds jako tablica
    });

    const [visibleOfSection, setVisibleOfSection] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        setVisibleOfSection(inView);
    }, [inView]);

    const onLoad = (map) => {
        setMap(map);
    };

    return (
        <>
            <div className="container">
                <div className={styles.locationWrapper}>
                    <div className={styles.location}>
                        <div className={styles.freeTransport}>
                            <img className={styles.locationIcon} src={locationIcon} alt="locationIcon" />
                            <h3 className={styles.locationTitle}>Bezpłatny dojazd na terenie miasta Łodzi.</h3>
                        </div>
                    </div>
                </div>
            </div>
            {isLoaded &&
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    mapId="c0ebc78dc2d9c33b" // Użyj mapId tutaj, aby zastosować niestandardowy styl
                >
                    <Circle
                        center={center}
                        radius={10500}
                        options={{
                            fillColor: "#f28686",
                            fillOpacity: 0.4,
                            strokeColor: "#f28686",
                            strokeOpacity: 0.5,
                            strokeWeight: 2,
                        }}
                    />
                </GoogleMap>
            }
        </>
    );
}

export default Location;