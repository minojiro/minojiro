import React, { ReactNode } from 'react'
import {PhotoPost} from '../types'

type Props = {
  photoPost: PhotoPost
}

const Layout = ({ photoPost }: Props) => {
  const srcSet = [
    `${photoPost.src}?fm=webp&w=750&fm=webp 640w`,
    `${photoPost.src}?fm=webp`
  ].join(' ')

  return (
    <div className="image">
      <div className="image__imgWrap">
        <picture>
          <source srcSet={`${photoPost.src}?fm=webp&w=750`}
            media="(max-width: 750px)" />
          <source srcSet={`${photoPost.src}?fm=webp`} />
          <img src={photoPost.src} srcSet={srcSet} alt={photoPost.modelName} loading="lazy" />
        </picture>
      </div>
      <div className="image__label">
        <h2>{ photoPost.modelName }</h2>
        <p>{ photoPost.staff }</p>
      </div>
    </div>
  )
}

export default Layout
