import styles from "./CountriesTable.module.css";

const orderBy = (countries) => {
  return countries.sort((a, b) => (a.population > b.population ? 1 : -1));
};

const CountriesTable = ({ countries }) => {
  const orderedCountries = orderBy(countries);
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
        </button>

        <button className={styles.heading_name}>
          <div>Population</div>
        </button>
      </div>
      {countries.map((country) => (
        <div key={country.name} className={styles.row}>
          <div className={styles.name}>{country.name.common}</div>
          <div className={styles.population}>{country.population}</div>
        </div>
      ))}
    </div>
  );
};

export default CountriesTable;
