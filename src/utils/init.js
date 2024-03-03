import { store } from '../store/store'
import { apiSlice } from '../store/apiSlice'
//store.dispatch(apiSlice.endpoints.resetReviewQty.initiate())
localStorage.setItem('status', 'dangerTest')
// if (localStorage.getItem('status') == null) {
//   localStorage.setItem('status', 'newTest')
// }
//alert(process.env.NODE_ENV)
if (!(localStorage.getItem('priority') >= 0)) {
  localStorage.setItem('priority', 9)
}
if (!(localStorage.getItem('dangerWatchFailYesterday') >= 0)) {
  localStorage.setItem('dangerWatchFailYesterday', 0)
}
if (localStorage.getItem('sayYN') == null) {
  localStorage.setItem('sayYN', 0)
}
localStorage.setItem(
  'listQ',
  'SELECT questions.priority, questions.id,questions.watchYN, questions.delete1,  questions.sayYN, questions.question,questions.createdAt, questions.updatedAt, newYN , priority FROM questions WHERE (questions.id>=${wZi} and ((questions.delete1)=0)  and (questions.archiveYN=0)  and (questions.archiveYN=0) AND questions.newYN =1 ) ORDER BY questions.id DESC;'
)
if (!(localStorage.getItem('questionNumToRead') > 0)) {
  localStorage.setItem('questionNumToRead', 1)
}
if (!(localStorage.getItem('questionNumToRead') >= 0)) {
  localStorage.setItem('browseNormalWZi', 0)
}
if (!(localStorage.getItem('dangerWatchAll') >= 0)) {
  localStorage.setItem('dangerWatchAll', 0)
}
if (!(localStorage.getItem('doNowListen') >= 0)) {
  localStorage.setItem('doNowListen', 0)
}
if (!(localStorage.getItem('doNowWatch') >= 0)) {
  localStorage.setItem('doNowWatch', 0)
}
if (!(localStorage.getItem('dangerWatchFail') >= 0)) {
  localStorage.setItem('dangerWatchFail', 0)
}
if (!(localStorage.getItem('dangerWatchDifficult') >= 0)) {
  localStorage.setItem('dangerWatchDifficult', 0)
}
if (!(localStorage.getItem('newWatchAll') >= 0)) {
  localStorage.setItem('newWatchAll', 0)
}
if (!(localStorage.getItem('List') >= 0)) {
  localStorage.setItem('list', 0)
}
if (!(localStorage.getItem('browseDailyWZi') >= 0)) {
  localStorage.setItem('browseDailyWZi', 0)
}
if (!(localStorage.getItem('watchDangerWZi') >= 0)) {
  localStorage.setItem('watchDangerWZi', 0)
}
if (!(localStorage.getItem('newTestWZi') > 0)) {
  localStorage.setItem('newTestWZi', 99999999)
}
if (!(localStorage.getItem('dangerTestWZi') >= 0)) {
  localStorage.setItem('dangerTestWZi', 0)
}
if (!(localStorage.getItem('watchAllWZi') >= 0)) {
  localStorage.setItem('watchAllWZi', 0)
}
if (!(localStorage.getItem('listenDangerWZi') >= 0)) {
  localStorage.setItem('listenDangerWZi', 0)
}
if (!(localStorage.getItem('listenAllWZi') >= 0)) {
  localStorage.setItem('listenAllWZi', 0)
}
if (!(localStorage.getItem('dailyTestWZi') >= 0)) {
  localStorage.setItem('dailyTestWZi', 0)
}
if (!(localStorage.getItem('watchWZi') >= 0)) {
  localStorage.setItem('watchWZi', 0)
}
if (!(localStorage.getItem('listenWZi') >= 0)) {
  localStorage.setItem('listenWZi', 0)
}
if (!(localStorage.getItem('watchWZiFilter') >= 0)) {
  localStorage.setItem('watchWZiFilter', 0)
}
if (!(localStorage.getItem('browsePriorityWZi') >= 0)) {
  localStorage.setItem('browsePriorityWZi', 0)
}

if (
  new Date(parseInt(localStorage.getItem('dateRun'))).setHours(
    0,
    0,
    0,
    0
  ) != new Date().setHours(0, 0, 0, 0)
) {
  localStorage.setItem('dateRun', new Date().getTime())
  localStorage.setItem(
    'dangerWatchFailYesterday',
    localStorage.getItem('dangerWatchFail')
  )
  localStorage.setItem(
    'doNowWatchYesterday',
    localStorage.getItem('doNowWatch')
  )
  //localStorage.setItem('browseDailyWZi', 0)
  //localStorage.setItem('dailyTestWZi', 0)
  //localStorage.setItem('dailyTestWZiFilter', 0)
  //localStorage.setItem('watchWZi', 0)
  //localStorage.setItem('listenWZi', 0)
  //localStorage.setItem('watchWZiFilter', 0)
  //localStorage.setItem('watchDangerWZi', 0)
  //localStorage.setItem('listenDangerWZi', 0)
}
