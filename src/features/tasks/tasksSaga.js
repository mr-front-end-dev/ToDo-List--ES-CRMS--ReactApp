import { takeLatest, call, put, delay, select, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call (getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Algo salió mal!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}