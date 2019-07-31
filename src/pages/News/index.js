import React from 'react'
import { Page } from 'react-facebook'

const News = () => {
  return (
    <Page
      style={{
        width: '90vw',
        maxWidth: '500px',
      }}
      width="500px"
      height="70vh"
      small-header="true"
      href="https://www.facebook.com/physiomedicaJ.K"
      tabs="timeline"
    />
  )
}

export default News
