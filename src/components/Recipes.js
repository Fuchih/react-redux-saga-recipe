// Redux
import { useSelector } from 'react-redux'

// Material-UI
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

// Component
import Card from './Card'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

function Recipes() {
  const data = useSelector((state) => state.recipe.data)
  const {
    recipe: { hits },
    isLoading,
    error,
  } = data

  const classes = useStyles()

  if (isLoading) return <div className="loading"></div>
  if (error !== null) return <h2>Request was reject due to server error</h2>
  if (hits && hits.length === 0) return <h2>No Result</h2>

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {hits &&
            hits.map((item, index) => {
              const { recipe } = item
              return (
                <Grid key={index} item>
                  <Card recipe={recipe} index={index} />
                </Grid>
              )
            })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Recipes
