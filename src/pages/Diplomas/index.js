import React from 'react'
import {
  DialogTitle,
  DialogContent,
  Divider,
} from '@material-ui/core'

import exampleDiploma from 'images/diplomas/example.jpg'
import exampleDiploma2 from 'images/diplomas/example2.jpg'

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
    maxWidth: '420px',
    margin: '0.65rem',
  },
  diplomaImg: { maxWidth: '100%' },
})

const createData = (name, description, image) => {
  return { name, description, image }
}

const diplomas = [
  createData('Example', '', exampleDiploma),
  createData('Example', '', exampleDiploma2),
  createData('Example', '', exampleDiploma),
  createData('Example', '', exampleDiploma2),
  createData('Example', '', exampleDiploma),
  createData('Example', '', exampleDiploma2),
  createData('Example', '', exampleDiploma),
  createData('Example', '', exampleDiploma2),
  createData('Example', '', exampleDiploma),
  createData('Example', '', exampleDiploma2),
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
