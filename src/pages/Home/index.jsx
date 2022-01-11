import { Header } from '../../components/Header'
//import './style.css'
import  {makeStyles} from  '@material-ui/core/styles'
import { NavBar } from '../../components/NavBar'
import { Feed } from '../../components/feed'
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection:'column'
  },
  main:{
    height: '100vh',
    padding: 24,
  },
  toolBar:{
    minHeight:64,

  }
})

export function Home() {

  const classes = useStyles()


  return(
    <div className={classes.root}>
        <Header/>
        <div className={classes.toolBar}></div>
        <main className={classes.main}>


          <Container maxWidth="lg">
            <Box display="flex">
              <NavBar/>
              <Feed/>
            </Box>
          </Container>
  

        </main>
    </div>
  )
}