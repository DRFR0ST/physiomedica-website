import React from 'react'
import { makeStyles } from '@material-ui/styles'

import image01 from 'images/gallery/IMG_20190806_171911-min.jpg'
import image02 from 'images/gallery/IMG_20190806_171918-min.jpg'
import image03 from 'images/gallery/IMG_20190806_171941-min.jpg'
import image04 from 'images/gallery/IMG_20190806_171950_1-min.jpg'
import image05 from 'images/gallery/IMG_20190806_172115-min.jpg'
import image06 from 'images/gallery/IMG_20190806_173140-min.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '100%',
  },
  gridList: {
    width: '100%',
    minHeight: 'calc(100vh - 64px)',
  },
  image: {
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  imageWrapper: {
    overflow: 'hidden',
    position: 'relative',
    height: '600px',
    width: 'calc(50% - 10px)',
    margin: 5,
  },
  '@media (max-width: 768px)': {
    imageWrapper: {
      width: '100%',
    },
  },
}))

const tileData = [
  {
    img: image01,
    title: 'Gabinet 01',
    cols: 2,
    rows: 2,
    rotate: false,
  },
  {
    img: image02,
    title: 'Gabinet 02',
    cols: 1,
    rows: 2,
    rotate: false,
  },
  {
    img: image03,
    title: 'Gabinet 03',
    cols: 1,
    rows: 2,
    rotate: false,
  },
  {
    img: image05,
    title: 'Gabinet 05',
    cols: 1,
    rows: 2,
    rotate: false,
  },
  {
    img: image06,
    title: 'Gabinet 06',
    cols: 1,
    rows: 2,
    rotate: false,
  },
  {
    img: image04,
    title: 'Gabinet 04',
    cols: 3,
    rows: 1,
    rotate: false,
  },
]

const Gallery = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {tileData.map(tile => (
        <div className={classes.imageWrapper}>
          <img
            src={tile.img}
            style={{
              transform: `translate(-50%, -50%) ${
                tile.rotate ? 'rotate(90deg)' : ''
              }`,
            }}
            className={classes.image}
            alt={tile.title}
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
