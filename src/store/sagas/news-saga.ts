import { getNewsService, addNoveltyService } from '../../services/news-service';
import { put, all, takeEvery, call } from 'redux-saga/effects';
import { IAddNews, getNews, addNews } from '../actions/news-actions';

export function* fetchNews(){
  const news = yield call(getNewsService);
  yield put(getNews(news));
}

export function* postNovelty(novelty:IAddNews){
  const news = yield addNoveltyService(novelty.novelty);
  yield put(addNews(news));
}
