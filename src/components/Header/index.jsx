
import { makeStyles } from '@material-ui/core'
import { AppBar }  from '@material-ui/core'
import {Button} from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import LogoPng from '../../assets/logo.png'
import { SvgIcon } from '@material-ui/core'
import { Bell } from 'react-feather'
import { Avatar } from '@material-ui/core'

const useStyle = makeStyles({
  appBar:{
    boxShadow: 'none',
  },
  img:{
    maxHeight: 55
  },
  grow: {
    flexGrow: 1
  },
  userSection:{
    display: 'flex',
    alignItems: 'center'

  },
  button:{
    marginRight: 10 
  },
  bell: {
    marginRight:10
  }
})


export function Header(){

  const classes = useStyle()
  
  return(
    <AppBar position="fixed"  color={'inherit'} className={classes.appBar}>
      <Toolbar>
          <img src={LogoPng} alt="conecta dev" className={classes.img} /> 
          <div className={classes.grow}/>
          <div className={classes.userSection}>
            <Button variant="contained" color="primary" className={classes.button}>
              Novo Post
            </Button>
            <SvgIcon className={classes.bell}>
              <Bell size='21'/>
            </SvgIcon>
            <Avatar alt="Remy Sharp" />
          </div>
      </Toolbar>
    </AppBar>
  )
}