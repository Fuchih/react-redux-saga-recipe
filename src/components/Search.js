import { useState, useEffect } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { fetchStart } from '../redux/reducer'

// Material-UI
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginBottom: '25px',
    },
  },
}))

function Search() {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStart(query))
  }, [query, dispatch])

  const submitSearchTerm = () => {
    if (search === '') return
    setQuery(search)
    setSearch('')
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ width: '80px', height: '55px' }}
        onClick={submitSearchTerm}
      >
        Search
      </Button>
    </form>
  )
}

export default Search
