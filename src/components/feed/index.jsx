import { makeStyles } from "@material-ui/core"
import {PostCard} from '../PostCard'

const useStyle = makeStyles(() => {
  root:{
    
  }
})

const posts = [
  {
    id: '1',
    author:{
      name:"Lucas Nhimi",
      username:"lucasnshima",
      avatar: '../../assets/avatar_1.jpeg'
    },
    title: "Criadno um App do zero utilizando React js",
    data: 'April 7, 2020',
    description: 'Fala pessoal! Qual é o melhor framework',
    hashtags: '#dotnet, #javascript, #reactJs and #developer',
    image: '../../assets/post1.png'
  },
  {
    id: '1',
    author:{
      name:"Lucas Nhimi",
      username:"lucasnshima",
      avatar: '../../assets/avatar_1.jpeg'
    },
    title: "Criadno um App do zero utilizando React js",
    data: 'April 7, 2020',
    description: 'Fala pessoal! Qual é o melhor framework',
    hashtags: '#dotnet, #javascript, #reactJs and #developer',
    image: '../../assets/post1.png'
  },
  {
    id: '1',
    author:{
      name:"Lucas Nhimi",
      username:"lucasnshima",
      avatar: '../../assets/avatar_1.jpeg'
    },
    title: "Criadno um App do zero utilizando React js",
    data: 'April 7, 2020',
    description: 'Fala pessoal! Qual é o melhor framework',
    hashtags: '#dotnet, #javascript, #reactJs and #developer',
    image: '../../assets/post1.png'
  }
]

export function Feed(){

  const classes = useStyle()

  return(
    <div className={classes.root}>
      {
        posts.map(post => {
          return (
            <PostCard key={post.id} post={post}/>
          )
        })
      }
    </div>
  )
}