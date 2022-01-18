import { makeStyles } from '@material-ui/core'
import { 
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles({
  root:{
    display: 'flex',
    height: '100vh',
  },
  left:{
    background: 'blue',
    flexBasis: '58%',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 45
  },
  right:{
    background: 'yellow',
    flexBasis: '42%'

  },
  form:{
    display: 'flex',
    flexDirection: 'column',
    margin: '64px 32px',
    alignItems: 'center'
  }
})

export function SingIn(){

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography  style={{color: "#fff" , fontSize: 35 , lineHeight: '45px'}}>
          <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
        </Typography>

        <Typography variant="body2" style={{color: "rgb(225 , 255 , 255 , 0.7)" , marginTop: '30px' ,fontSize: 15 , lineHeight: '45px'}}>
          <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
        </Typography>
      </div>
      <div className={classes.right}>
        <form className={classes.form} action="">
          <h4>Acesso</h4>
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  ) 
}