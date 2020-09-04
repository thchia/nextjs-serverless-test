import styles from '../styles/Home.module.css'

export default function Preview({ isPreview, date }) {
  return (
    <div className={styles.container}>
      <h1>This is a page that has preview data</h1>
      <p>Preview mode is {isPreview ? 'on' : 'off'}</p>
      <p>getStaticProps ran at: {date}</p>
    </div>
  )
}

export const getStaticProps = async (context) => {
  let date = new Date().toISOString()
  return {
    props: {
      isPreview: context.preview || false,
      date,
    },
  }
}
