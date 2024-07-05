import styles from './Salve.module.scss'
const Salve = () => {
	return(
		<div className={styles.salveWrapper}>
			<div className={`${styles.salve} container`}>
				<h2 className={styles.salveTitle}>
					Wizyty Stacjonarne
				</h2>
				<div className={styles.salveContent}>
					<p className={styles.text} style={{textAlign: 'center'}}>
						SALVE - Przychodnia Armii Krajowej 39 Łódź
					</p>
					<p className={styles.text}>
						Wychodząc naprzeciw oczekiwaniom pacjentów preferujących wykonanie zabiegu podologicznego w
						gabinecie medycznym nawiązałam współpracę z Centrum Medycznym SALVE, gdzie w każdy wtorek
						pozostaję do Państwa dyspozycji.
					</p>
					<a className={styles.salveButton} rel="nofollow" target="_blank" href="https://salve.pl/wizyty-lekarskie?doctorId=2395&inputText=Monika%20Juczy%C5%84ska">Umów wizytę</a>
				</div>
			</div>
		</div>
	)
}

export default Salve;