import React from 'react'

import ReactStreetview from 'react-streetview'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    height: '400px',
  },
})

const InteriorView = ({ classes }) => {
  // see https://developers.google.com/maps/documentation/javascript
  const googleMapsApiKey = 'AIzaSyBd_DMbAc8aWy0Mei-WHdcooREVGhyst0I'

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: 52.4082097, lng: 22.2330801 },
    pov: { heading: 225, pitch: 0 },
    zoom: 1,
  }

  return (
    <div className={classes.root}>
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  )
}

export default withStyles(styles)(InteriorView)
