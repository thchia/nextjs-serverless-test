import styles from '../styles/Home.module.css'

export default function SSR({ title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'SSR',
    },
  }
}
