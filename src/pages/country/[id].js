import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Country.module.css";

const Country = ({ country }) => {
  console.log(country);

  return (
    <Layout title={country.official}>
      <div>
        <div className={styles.overview_panel}>
          <img src={country.flags / png} alt="" />
          <h1>Hello Country</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);

  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};
