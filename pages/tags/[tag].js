import { useRouter } from 'next/router'

import styles from '../../styles/Home.module.css'

export default function Tag({ title }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.container}>
      <h1>Tag {title}</h1>
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { tag: '1' } }, { params: { tag: '2' } }],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      title: params.tag,
    },
  }
}
