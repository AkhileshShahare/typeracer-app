import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_POSTS } from "../../constants/actionTypes";
import { addArticleFailed, savePosts } from "../actions";
import { fetchPostsApi } from "../../api/fetchPosts";

function* fetchPosts() {
  const data = yield call(fetchPostsApi);
  yield put(savePosts(data));
  try {
  } catch (err) {
    yield put(addArticleFailed(err));
  }
}

// Watcher
export function* fetchPostsSaga() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}
