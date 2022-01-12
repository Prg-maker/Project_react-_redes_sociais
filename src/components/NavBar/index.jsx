import { makeStyles } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { ListSubheader } from "@material-ui/core"
import { ListItem  } from "@material-ui/core"
import { ListItemText  } from "@material-ui/core"

const useStyle = makeStyles((theme) => ({
  root:{
    padding: theme.spacing(2),
    width: 275,
    marginRight:  theme.spacing(2)
  },
  button:{
    width: '100%',

  }
}))





export function NavBar(){
  
  const classes = useStyle()

  const tags = [
    {
      id: 1,
      name: "react-js"
    },
    {
      id: 2,
      name: "javascript"
    },{
      id: 3,
      name: "dotnet"
    },{
      id: 4,
      name: "php"
    },{
      id: 5,
      name: "materialdesing"
    },{
      id: 6,
      name: "webpack"
    },
  ]

  return(
    <Paper className={classes.root}>
      <Button className={classes.button} variant="outlined" color="secondary">
        Registrar Grátis
      </Button>

      <ListSubheader>
        {`Tags em alta`}
      </ListSubheader>


      {
        tags.map((item) => {
          return (
            <ListItem dense button key={`item-${item.id}-${item.name}`} >
              <ListItemText primary={`#${item.name}`}/>
            </ListItem>
          )
        })
      }

      <ListItem button >
        Exibir mais tags
      </ListItem>

    </Paper>
  )
}