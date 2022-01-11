import { makeStyles } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { ListSubheader } from "@material-ui/core"

const useStyle = makeStyles((theme) => ({
  root:{
    padding: theme.spacing(2),
    width: 275,
    
  },
  button:{
    width: '100%',

  }
}))





export function NavBar(){
  
  const classes = useStyle()

  return(
    <Paper className={classes.root}>
      <Button className={classes.button} variant="outlined" color="secondary">
        Registrar Grátis
      </Button>

      <ListSubheader>
        {`Tags em alta`}
      </ListSubheader>
    </Paper>
  )
}