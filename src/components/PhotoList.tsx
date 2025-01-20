import type { PhotoPost } from '@/repositories/photos'
import { RubikFont } from '@/lib/fonts'

const PhotoItem = ({ photo }: { photo: PhotoPost }) => {
  let alt = ''
  if (photo.modelName) alt += photo.modelName
  if (photo.staff) alt += ` – ${photo.staff}`

  const { image } = photo
  const srcForSp = `${image.url}?fm=webp&w=600&q=40`
  const srcForPc = `${image.url}?fm=webp&w=800&q=40`
  const srcForPcJpeg = `${image.url}?w=800`
  return (
    <div className="PhotoItem">
      <picture>
        <source srcSet={srcForSp} media="(max-width: 600px)" />
        <source srcSet={srcForPc} type="image/webp" />
        <img
          src={srcForPcJpeg}
          alt={alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto"
          loading="lazy"
        />
      </picture>
      <p
        className={`PhotoItem__caption ${RubikFont.className} text-primary md:text-baseText mt-2 text-xs`}
      >
        {photo.modelName}
      </p>
    </div>
  )
}

export const PhotoList = ({ photos }: { photos: PhotoPost[] }) => {
  const wrapperClassName = 'photo-list' // todo: randomize
  const styles: string[] = []

  const WIDTH_LIST = [
    [500, 2],
    [700, 2],
    [1000, 2],
    [1248, 3],
  ]

  for (const [containerWidth, columnCount] of WIDTH_LIST) {
    const containerStyles: string[] = []
    const colHList = Array.from({ length: columnCount }, () => 0)
    const colCountList = colHList.map(() => 0)
    const gap = containerWidth * 0.06
    const displayWidth =
      (containerWidth - gap * (columnCount - 1)) / columnCount
    const randomShiftMax = containerWidth * 0.044
    for (const photo of photos) {
      const { width, height } = photo.image
      const colH = Math.min(...colHList)
      const colIndex = colHList.indexOf(colH)
      const topGap = +(colHList[colIndex] ? gap : 0)
      const displayHeight = (displayWidth / width) * height
      colHList[colIndex] += displayHeight + topGap
      colCountList[colIndex]++
      const left = displayWidth * colIndex + (gap * colIndex - 1)
      const top = colH + topGap
      const randomShift = ` translate(
        ${
          Math.random() *
          randomShiftMax *
          (colCountList[colIndex] % 2 === 0 ? 0.5 : -0.5)
        }px,
        ${Math.random() * randomShiftMax * (colIndex % 2 === 0 ? 1 : 0)}px
      );`
      containerStyles.push(
        `.${wrapperClassName} li:nth-child(${photos.indexOf(photo) + 1}) {
						position: absolute;
						left: ${left}px;
						top: ${top}px;
						width: ${displayWidth}px;
						height: ${displayHeight}px;
						transform: ${randomShift};
					}`,
      )
    }
    containerStyles.push(
      `.${wrapperClassName} ul {
					width: ${containerWidth}px;
					height: ${Math.max(...colHList)}px;
				}`,
    )
    styles.push(
      `@container (min-width: ${containerWidth}px) { ${containerStyles.join('\n')} }`,
    )
  }
  styles.push(
    `.${wrapperClassName} ul { position: relative; display: grid; gap: 2rem; margin-inline: auto; }`,
  )

  styles.push(`.${wrapperClassName} { container-type: inline-size; }`)

  return (
    <div className={wrapperClassName}>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <PhotoItem photo={photo} />
          </li>
        ))}
      </ul>
      <style>{styles.join('\n').replaceAll(/\s+/g, ' ')}</style>
    </div>
  )
}
