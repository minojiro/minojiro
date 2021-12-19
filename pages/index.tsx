import Layout from '../components/Layout'
import Photo from '../components/Photo'
import {PhotoPost} from '../types'
import {getPhotoPosts} from '../api/photos'
import React, { useEffect, useState } from 'react'

type Props = {
  photoPosts: PhotoPost[]
}

const PhotoListMemo = React.memo(({photoPosts}: {photoPosts: PhotoPost[]}) => (
  <>
    {photoPosts.map(photoPost => (
      <Photo key={photoPost.id} photoPost={photoPost} />
    ))}
  </>
))

const IndexPage = ({photoPosts}: Props) => {
  const [scrollingDown, setScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    window.document.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop
      setScrollingDown(lastScrollTop < scrollTop && scrollTop > 100)
      lastScrollTop = scrollTop
    })
  }, [])

  return (
    <Layout title="minoJiro photographs">
      <div className={scrollingDown ? 'container scrollingDown' : 'container'}>
        <header className="pageHeader">
          <h1 className="pageHeader__title">minoJiro photographs</h1>
          <p className="pageHeader__leid">contact me on <a href="https://www.instagram.com/_minojiro/" target="_blank" rel="noopener">Instagram</a> or <a href="https://twitter.com/the_minojiro" target="_blank" rel="noopener">Twitter</a> DM.</p>
        </header>
        <main>
          <PhotoListMemo photoPosts={photoPosts} />
        </main>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const photoPosts = await getPhotoPosts()
  return {
    props: {
      photoPosts: photoPosts
    }
  }
}
export default IndexPage
