import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import { getRecipe } from './api'
import { fetchStart, fetchSuccess, fetchFail } from './reducer'

function* fetchData(props) {
  const query = props.payload

  try {
    const response = yield call(getRecipe, query)
    yield put(fetchSuccess(response.data))
  } catch (error) {
    yield put(fetchFail(error))
  }
}

function* onLoadRecipe() {
  yield takeLatest(fetchStart, fetchData)
}

const recipeSaga = [fork(onLoadRecipe)]

export default function* rootSaga() {
  yield all([...recipeSaga])
}
