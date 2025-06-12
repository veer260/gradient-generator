import React from 'react';
import styles from './Sparkles.module.css';
import SparkleInstance from '../SparkleInstance/SparkleInstance';
import { generateSparkle } from '../../helpers/generateSparkle';
import {useRandomInterval} from '../../hooks/useRandomInterval';

function Sparkles({children}) {

    // const sparkle = generateSparkle();
    const [sparkles, setSparkles] = React.useState([]);
  useRandomInterval(() => {
    const now = Date.now();
    // Create a new sparkle
    const sparkle = generateSparkle();
    // Clean up any "expired" sparkles
    const nextSparkles = sparkles.filter(sparkle => {
      const delta = now - sparkle.createdAt;
      return delta < 1000;
    });
    // Include our new sparkle
    nextSparkles.push(sparkle);
    // Make it so!
    setSparkles(nextSparkles);
  }, 50, 500);

    
    return (
        <span className={styles.wrapper}>
            {
            sparkles.map(sparkle => (
        <SparkleInstance
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))
      }
            <div className={styles.childWrapper}>
                {children}
            </div>
        </span>
    )
}

export default Sparkles
