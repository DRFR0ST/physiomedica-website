import React from 'react'
import { DialogTitle, DialogContent, Divider } from '@material-ui/core'

import diploma01 from 'images/diplomas/Annotation 2019-08-01 023841.jpg'
import diploma02 from 'images/diplomas/Annotation 2019-08-01 023935.jpg'
import diploma03 from 'images/diplomas/Annotation 2019-08-01 023959.jpg'
import diploma04 from 'images/diplomas/Annotation 2019-08-01 024101.jpg'
import diploma05 from 'images/diplomas/Annotation 2019-08-01 024140.jpg'
import diploma06 from 'images/diplomas/Annotation 2019-08-01 024309.jpg'
import diploma07 from 'images/diplomas/Annotation 2019-08-01 024347.jpg'
import diploma08 from 'images/diplomas/Annotation 2019-08-01 024620.jpg'
import diploma09 from 'images/diplomas/Annotation 2019-08-01 024704.jpg'
import diploma10 from 'images/diplomas/Annotation 2019-08-01 024727.jpg'

import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiIconButton-root': {
      marginRight: '5px',
    },
  },
  diplomasList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    width: '100%',
  },
  diploma: {
    textAlign: 'center',
    //maxWidth: '420px',
    margin: '0.65rem',
    width: '100%',
  },
  diplomaImg: { maxWidth: '100%' },
})

const createData = (name, description, image) => {
  return { name, description, image }
}

const diplomas = [
  createData('', '', diploma01),
  createData('', '', diploma02),
  createData('', '', diploma03),
  createData('', '', diploma04),
  createData('', '', diploma05),
  createData('', '', diploma06),
  createData('', '', diploma07),
  createData('', '', diploma08),
  createData('', '', diploma09),
  createData('', '', diploma10),
]

const Diplomas = ({ classes }) => {
  return (
    <React.Fragment>
      <DialogTitle id="alert-dialog-title">{'Dyplomy'}</DialogTitle>
      <DialogContent>
        <Divider />
        <div className={classes.diplomasList}>
          {diplomas.map(e => (
            <div className={classes.diploma}>
              <img src={e.image} alt={e.name} className={classes.diplomaImg} />
              {/* <Typography variant="h4" style={{ opacity: 0.5 }}>
                {e.name}
              </Typography> */}
            </div>
          ))}
        </div>
      </DialogContent>
    </React.Fragment>
  )
}

export default withStyles(styles)(Diplomas)
