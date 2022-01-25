import { useState } from 'react'

// Material-UI
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { DirectionsRun } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paragraph: {
    textAlign: 'start',
  },
}))

export default function RecipeReviewCard({ recipe, index }) {
  const { label, image, calories, ingredients } = recipe
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const [cardIndex, setCardIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const addFavorites = () => {
    setIsFavorite(!isFavorite)
  }

  const handleExpandClick = (index) => {
    setCardIndex(index)
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={label}
        subheader={
          <span>
            <DirectionsRun />
            {calories.toFixed(2)}
          </span>
        }
      />
      <CardMedia className={classes.media} image={image} title={label} />
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={addFavorites}
          style={{ color: isFavorite ? 'red' : '' }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={() => handleExpandClick(index)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        in={index === cardIndex && expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Typography paragraph variant="h5">
            Ingredients:
          </Typography>
          {ingredients.map((item, index) => {
            const { text } = item
            return (
              <Typography paragraph key={index} className={classes.paragraph}>
                <span>{text}</span>
              </Typography>
            )
          })}
        </CardContent>
      </Collapse>
    </Card>
  )
}
