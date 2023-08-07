import styles from './_Stat.module.scss';

const Stat = ({number, stat}) => {
  return (
    <div className={styles.stat}>
      <span>{number}</span>
      <span>{stat}</span>
    </div>
  )
}

export default Stat