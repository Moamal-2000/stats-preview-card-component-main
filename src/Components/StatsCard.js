import Stat from "./Stat";
import styles from "./_StatsCard.module.scss";

const StatsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.StatsCard}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Get <span>insights</span> that help your business grow.
          </h2>

          <p className={styles.description}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <div className={styles.stats}>
            <Stat number="10k+" stat="companies" />
            <Stat number="314" stat="templates" />
            <Stat number="12m+" stat="queries" />
          </div>
        </div>

        <div className={styles.img}></div>
      </div>
    </div>
  );
};

export default StatsCard;
