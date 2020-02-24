import React from 'react';
import Item from '../components/Portfolio/Item/Item';
import styles from './PortfolioPage.module.css';

const PortfolioPage = () => (
  <div className={styles.PortfolioPage}>
    <Item
      name="Adelantos.com"
      description="A webpage where you apply for a small loan"
    />
    <Item name="Pokefinder" description="A simple web app using PokeApi" />
  </div>
);

export default PortfolioPage;
