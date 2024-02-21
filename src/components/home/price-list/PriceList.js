import styles from './PriceList.module.scss'
import PriceConfig from "../../../config/PriceConfig";
import {useLocation, Link} from "react-router-dom";
import {useEffect} from "react";
import HelmetContent from "../../../helpers/HelmetContent";

const PriceList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const priceConfig = PriceConfig
    const location = useLocation()

    const TableValue = ({value, index}) => {
        return(
            <tr key={index} className={styles.table}>
                <td className={styles.tableDescription}>{value.value}</td>
                <td className={styles.tableDescription}>
                    {value.price === null ?
                        <></>
                        :
                        <>{value.price} zł</>
                    }
                </td>
            </tr>
        )
    }
    const FullTable = ({item, index}) => {
        return(
            <>
                <div className={styles.tableWrapper} key={index}>
                    <div className={styles.titleWrapper}>
                        <h4 className={styles.titleTable}>{item.title}</h4>
                    </div>
                    <Link to={`/usluga/${item.link}`}>
                        <table className={styles.priceTable}>
                            <tr className={styles.table}>
                                <th className={styles.tableTitle}>Usługa</th>
                                <th className={styles.tableTitle}>Cena</th>
                            </tr>
                            {item.items.map((value, index) => <TableValue value={value} index={index} />)}
                        </table>
                    </Link>
                </div>
            </>

        )
    }

    const HomeTable = () =>{
        return(
            <div className={styles.tableWrapper}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Cennik</h2>
                </div>
                <table className={styles.priceTable}>
                    <tr className={styles.table}>
                        <th className={styles.tableTitle}>Usługa</th>
                        <th className={styles.tableTitle}>Cena</th>
                    </tr>
                    <tr className={styles.table}>
                        <td className={styles.tableDescription}>Podstawowy zabieg podologiczny</td>
                        <td className={styles.tableDescription}>Od 150,00 zł</td>
                    </tr>
                    <tr className={styles.table}>
                        <td className={styles.tableDescription}>Rozszerzony zabieg podologiczny</td>
                        <td className={styles.tableDescription}>Od 200,00 zł</td>
                    </tr>
                    <tr className={styles.table}>
                        <td className={styles.tableDescription}>Ortonyksja</td>
                        <td className={styles.tableDescription}>Od 200,00 zł</td>
                    </tr>
                    <tr className={styles.table}>
                        <td className={styles.tableDescription}>Konsultacja podologiczna</td>
                        <td className={styles.tableDescription}>120,00 zł</td>
                    </tr>
                </table>
                <div>

                </div>
                <div className={styles.seeMoreWrapper}>
                    <Link to="/cennik" className={styles.seeMore}>
                        Zobacz wszystkie ceny
                    </Link>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.priceList}>
            <div className={styles.container}>
                {location.pathname === '/' ? <HomeTable /> : <>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.priceListTitle}>Cennik</h2>
                    </div>
                    <HelmetContent title="Cennik - Hallux Clinic" desc="Polecam szereg zabiegów z dziedziny podologii takich jak: schorzenia skórne, modzele, nagniotki, grzybica, wrastające paznokcie, odciski czy paznokcie pourazowe."/>
                    {priceConfig.priceList.map((item, index) => <FullTable item={item} index={index} /> )}
                </>}

            </div>
        </div>
    )
}

export default PriceList;