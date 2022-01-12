import { 
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  makeStyles, 
  Avatar
} from "@material-ui/core"

const useStyle = makeStyles({
  root:{
    marginBottom: 16
  }
})

export function PostCard({post}) {

  const classes = useStyle()

  return(
    <Card className={classes.root}>
      <CardHeader 
        avatar={<Avatar src={post.author.avatar}/>}
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={
          <>
            <Typography variant="caption">
              {"Avaliado por"}
            </Typography>
            <Typography variant="subtitle2">
            {post.author.name}
            </Typography>
         </>
        }
      >

      </CardHeader>
      <CardContent>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}