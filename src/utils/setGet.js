//const status = localStorage.getItem('status')
//import { useSelector, useDispatch } from 'react-redux'
//const status = useSelector((state) => state.posts.status)
export const st = {
  name: 'John',
  surname: 'Smith',
  get filter() {
    //alert(localStorage.getItem('status'))
    switch (localStorage.getItem('status')) {
      case 'doNowListen':
        return `(SELECT *, 1 as sort_order FROM (SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer,  answers.sayYNA, questions.priority, 0 as failRate, 0 as passRate  FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0) and (answers.masteredYN=0) AND ((answers.passYN)=0) AND ((questions.watchYN)=1)  and (questions.archiveYN=0)  AND ((answers.watchYNA)=1) AND questions.priority=9  AND questions.sayYN=1 AND answers.sayYNA=1 ))  AS a)
UNION ALL 
(SELECT * , 2 as sort_order FROM (SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN,answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer,  answers.sayYNA, questions.priority, 0 as failRate, 0 as passRate  FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0) and (answers.masteredYN=0) AND ((answers.passYN)=0) AND ((questions.watchYN)=1)  and (questions.archiveYN=0)  AND ((answers.watchYNA)=1) AND questions.priority=9   AND questions.sayYN=1 AND answers.sayYNA=1  ))  AS b)
UNION ALL 
(SELECT * , 3 as sort_order FROM (SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer,  answers.sayYNA, questions.priority, failqty/(passQty+1) as failRate, answers.passQty as passRate FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.watchYN)=1) AND ((questions.delete1)=0) AND ((answers.delete1)=0)  and (answers.masteredYN=0) AND ((answers.watchYNA)=1) AND ((answers.passYN)=1) AND ((questions.archiveYN)=0) AND questions.priority=9   AND questions.sayYN=1 AND answers.sayYNA=1 ) ORDER BY failRate DESC, passRate,id DESC,no LIMIT 150 )  AS c) ORDER BY sort_order, failRate DESC, passRate,id DESC,no;`
      case 'doNowWatch':
        return `with a1 as (SELECT answers.passYN, failqty/(passQty+1) AS failRate, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.sayYNA, questions.priority
FROM questions INNER JOIN answers ON questions.id = answers.id
WHERE (((questions.watchYN)=1) AND ((answers.watchYNA)=1) AND ((answers.masteredYN)=0) AND ((answers.delete1)=0) AND ((questions.priority)=9) AND ((questions.delete1)=0) AND ((questions.archiveYN)=0))
ORDER BY answers.passYN,failRate DESC , answers.passQty, questions.id), a2 as ( SELECT id FROM (  SELECT id, ROW_NUMBER() OVER (PARTITION BY id) AS row_num  FROM a1) t GROUP BY id ORDER BY MIN(row_num) limit 200) SELECT a2.id, questions.question, answers.id1, answers.no, answers.answer FROM (a2 INNER JOIN questions ON a2.id = questions.id) INNER JOIN answers ON questions.id = answers.id ORDER BY id, no;`
      // return `(SELECT *, 1 as sort_order FROM (SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer,  answers.sayYNA, questions.priority, 0 as failRate, 0 as passRate  FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0) and (answers.masteredYN=0) AND ((answers.passYN)=0) AND ((questions.watchYN)=1)  and (questions.archiveYN=0)  AND ((answers.watchYNA)=1) AND questions.priority=9 ))  AS a)
      //UNION ALL 
      //(SELECT * , 2 as sort_order FROM (SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN,answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer,  answers.sayYNA, questions.priority, 0 as failRate, 0 as passRate  FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0) and (answers.masteredYN=0) AND ((answers.passYN)=0) AND ((questions.watchYN)=1)  and (questions.archiveYN=0)  AND ((answers.watchYNA)=1) AND questions.priority=9 ))  AS b)
      //UNION ALL 
      //(SELECT * , 3 as sort_order FROM (SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer,  answers.sayYNA, questions.priority, failqty/(passQty+1) as failRate, answers.passQty as passRate FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.watchYN)=1) AND ((questions.delete1)=0) AND ((answers.delete1)=0)  and (answers.masteredYN=0) AND ((answers.watchYNA)=1) AND ((answers.passYN)=1) AND ((questions.archiveYN)=0) AND questions.priority=9) ORDER BY failRate DESC, passRate,id DESC,no LIMIT 150 )  AS c) ORDER BY sort_order, failRate DESC, passRate,id,no;`
      case 'list':
        //return 'SELECT questions.priority, questions.id,questions.watchYN, questions.delete1,  questions.sayYN, questions.question,questions.createdAt, questions.updatedAt, newYN , priority FROM questions WHERE (questions.id>=${wZi} and ((questions.delete1)=0)  and (questions.archiveYN=0)  and (questions.archiveYN=0) AND questions.newYN =1 ) ORDER BY questions.id;'
        return localStorage.getItem('listQ')
      case 'singleQA2Read':
        return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt FROM questions INNER JOIN answers ON questions.id = answers.id WHERE questions.id=${localStorage.getItem(
          'questionNumToRead'
        )} ;`
      case 'dangerWatchAll':
        return 'SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0)  and (questions.archiveYN=0)  and (answers.masteredYN=0)  AND ((questions.watchYN)=1) AND ((answers.watchYNA)=1)  and (questions.archiveYN=0) AND questions.priority=9 ) ORDER BY questions.id, answers.no;'
      case 'dangerLookAll':
        return 'SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0)  and (questions.archiveYN=0)  and (answers.masteredYN=0)  AND ((questions.muteAll)=1)  and (questions.archiveYN=0) AND questions.priority=9 ) ORDER BY questions.id, answers.no;'
      case 'dangerWatchFail':
        //return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt, ROW_NUMBER() over(order by id  DESC) as 'row' FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0)  and (questions.archiveYN=0)  AND ((answers.delete1)=0)  AND ((answers.reviewQty)<100) AND ((questions.sayYN)=1)   and (questions.archiveYN=0)  AND  (questions.newYN != 1) AND ((answers.sayYNA)=1) AND questions.priority =9 ) ORDER BY questions.id DESC, answers.no;`
        return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0) and (answers.masteredYN=0) AND ((answers.passYN)=0) AND ((questions.watchYN)=1)  and (questions.archiveYN=0)  AND ((answers.watchYNA)=1) AND questions.priority=9 ) ORDER BY questions.id DESC, answers.no;`
      case 'dangerWatchDifficult':
        return `SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt, questions.priority FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.watchYN)=1) AND ((questions.delete1)=0) AND ((answers.delete1)=0)  and (answers.masteredYN=0) AND ((answers.watchYNA)=1) AND ((answers.passYN)=1) AND ((questions.archiveYN)=0) AND questions.priority=9) ORDER BY failqty/(passQty+1)  DESC , answers.passQty, questions.id DESC , answers.no;`
      case 'dangerTest':
        //return 'with a1 as (SELECT DISTINCT questions.id, questions.newYN, answers.passYN, questions.archiveYN, questions.delete1, answers.masteredYN FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (questions.id<=${wZi} and (questions.priority=9) AND ((answers.passYN)=0) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id DESC LIMIT 1) SELECT answers.hint, questions.id, answers.no, questions.question, questions.newYN, questions.archiveYN, questions.delete1, answers.id1, answers.minimum, answers.answer, answers.reviewQty, answers.delete1, answers.masteredYN, answers.watchYNA, answers.sayYNA, answers.passQty, answers.failQty, answers.passYN FROM (a1 INNER JOIN questions ON a1.id = questions.id) INNER JOIN answers ON questions.id = answers.id WHERE ( (questions.priority=9) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id, answers.no;'
        return 'with a1 as (SELECT DISTINCT questions.id, questions.newYN, answers.passYN, questions.archiveYN, questions.delete1, answers.masteredYN FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (questions.id>${wZi} and (questions.priority=9) AND ((answers.passYN)=0) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id LIMIT 1) SELECT answers.hint, questions.id, answers.no, questions.question, questions.newYN, questions.archiveYN, questions.delete1, answers.id1, answers.minimum, answers.answer, answers.reviewQty, answers.delete1, answers.masteredYN, answers.watchYNA, answers.sayYNA, answers.passQty, answers.failQty, answers.passYN FROM (a1 INNER JOIN questions ON a1.id = questions.id) INNER JOIN answers ON questions.id = answers.id WHERE ( (questions.priority=9) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id, answers.no;'
      case 'SelfTestPhone':
        return `with a1 as (SELECT answers.passYN, failqty/(passQty+1) AS failRate, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.sayYNA, questions.priority
FROM questions INNER JOIN answers ON questions.id = answers.id
WHERE (((questions.watchYN)=1) AND ((answers.watchYNA)=1)  AND questions.sayYN=1 AND answers.sayYNA=1 AND ((answers.masteredYN)=0) AND ((answers.delete1)=0) AND ((questions.priority)=9) AND ((questions.delete1)=0) AND ((questions.archiveYN)=0))
ORDER BY answers.passYN,failRate DESC , answers.passQty, questions.id), a2 as ( SELECT id FROM (  SELECT id, ROW_NUMBER() OVER (PARTITION BY id) AS row_num  FROM a1) t GROUP BY id ORDER BY MIN(row_num) limit 200;`
      case 'newWatchAll':
        //return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0)   and (questions.archiveYN=0) AND ((questions.watchYN)=1) AND ((answers.watchYNA)=1)  and (questions.archiveYN=0) AND questions.newYN =1 ) ORDER BY questions.id DESC, answers.no;`
        return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0)  and (questions.archiveYN=0) and (answers.masteredYN=0)  AND ((questions.watchYN)=1) AND ((answers.watchYNA)=1)  and (questions.archiveYN=0) AND questions.newYN =1 ) ORDER BY questions.id, answers.no;`
      case 'newWatchFail':
        //return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt, ROW_NUMBER() over(order by id  DESC) as 'row' FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0)  AND ((answers.reviewQty)<100) AND ((questions.watchYN)=1)  and (questions.archiveYN=0)  AND ((answers.watchYNA)=1) AND questions.newYN =1 ) ORDER BY questions.id DESC, answers.no;`
        return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0) and (answers.masteredYN=0) AND ((answers.passYN)=0) AND ((questions.watchYN)=1)  and (questions.archiveYN=0)  AND ((answers.watchYNA)=1) AND questions.newYN =1 ) ORDER BY questions.id DESC, answers.no;`
      case 'newWatchDifficult':
        //return `SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt, questions.priority FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.watchYN)=1) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.watchYNA)=1) AND ((answers.passYN)=1) AND ((questions.archiveYN)=0) AND ((questions.newYN)=1)) ORDER BY answers.failQty DESC , answers.passQty, questions.id DESC , answers.no;`
        return `SELECT answers.failQty, answers.passQty, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt, questions.priority FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.watchYN)=1) AND ((questions.delete1)=0) AND ((answers.delete1)=0)  and (answers.masteredYN=0) AND ((answers.watchYNA)=1) AND ((answers.passYN)=1) AND ((questions.archiveYN)=0) AND ((questions.newYN)=1)) ORDER BY  failqty/(passQty+1)  DESC , answers.passQty, questions.id DESC , answers.no;`
      case 'newTest':
        //return 'with a1 as (SELECT DISTINCT questions.id, questions.newYN, answers.passYN, questions.archiveYN, questions.delete1, answers.masteredYN FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (questions.id<=${wZi} and ((questions.newYN)=1) AND ((answers.passYN)=0) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id DESC LIMIT 1) SELECT answers.hint, questions.id, answers.no, questions.question, questions.newYN, questions.archiveYN, questions.delete1, answers.id1, answers.minimum, answers.answer, answers.reviewQty, answers.delete1, answers.masteredYN, answers.watchYNA, answers.sayYNA, answers.passQty, answers.failQty, answers.passYN FROM (a1 INNER JOIN questions ON a1.id = questions.id) INNER JOIN answers ON questions.id = answers.id WHERE ( ((questions.newYN)=1) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id DESC, answers.no;'
        return 'with a1 as (SELECT DISTINCT questions.id, questions.newYN, answers.passYN, questions.archiveYN, questions.delete1, answers.masteredYN FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (questions.id>${wZi} and ((questions.newYN)=1) AND ((answers.passYN)=0) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id LIMIT 1) SELECT answers.hint, questions.id, answers.no, questions.question, questions.newYN, questions.archiveYN, questions.delete1, answers.id1, answers.minimum, answers.answer, answers.reviewQty, answers.delete1, answers.masteredYN, answers.watchYNA, answers.sayYNA, answers.passQty, answers.failQty, answers.passYN FROM (a1 INNER JOIN questions ON a1.id = questions.id) INNER JOIN answers ON questions.id = answers.id WHERE ( ((questions.newYN)=1) AND ((questions.archiveYN)=0) AND ((questions.delete1)=0) AND ((answers.delete1)=0) AND ((answers.masteredYN)=0)) ORDER BY questions.id, answers.no;'
      case 'allwatchAll':
      case 'allTest':
        return `SELECT questions.priority, questions.id, answers.id1, answers.no, questions.watchYN, questions.delete1, answers.watchYNA, questions.sayYN, answers.masteredYN, answers.delete1, answers.reviewQty, questions.question, answers.hint, answers.minimum, answers.answer, answers.watchYNA, answers.sayYNA, questions.createdAt, questions.updatedAt, ROW_NUMBER() over(order by id  DESC) as 'row' FROM questions INNER JOIN answers ON questions.id = answers.id WHERE (((questions.delete1)=0) AND ((answers.delete1)=0)  and (questions.archiveYN=0)  AND ((questions.watchYN)=1) AND ((answers.watchYNA)=1) AND questions.priority !=9 ) ORDER BY questions.id DESC, answers.no;`
      default:
        return 'no SQL found'
    }
  },
  get WZi() {
    switch (localStorage.getItem('status')) {
      case 'doNowListen':
        return localStorage.getItem('doNowListen')
      case 'doNowWatch':
        return localStorage.getItem('doNowWatch')
      case 'newWatchAll':
        return localStorage.getItem('newWatchAll')
      case 'dangerWatchFail':
        return localStorage.getItem('dangerWatchFail')
      case 'dangerWatchDifficult':
        return localStorage.getItem('dangerWatchDifficult')
      case 'dangerWatchAll':
        return localStorage.getItem('dangerWatchAll')
      case 'list':
        return localStorage.getItem('list')
      case 'newTest':
        return localStorage.getItem('newTestWZi')
      case 'dangerTest':
        return localStorage.getItem('dangerTestWZi')
      case 'watchDanger':
        return localStorage.getItem('watchDangerWZi')
      case 'watchAll':
        return localStorage.getItem('watchAllWZi')
      case 'listenDanger':
        return localStorage.getItem('listenDangerWZi')
      case 'listenAll':
        return localStorage.getItem('listenAllWZi')
      default:
        return 1
    }
  },
  set WZi(data) {
    switch (localStorage.getItem('status')) {
      case 'doNowWatch':
        localStorage.setItem('doNowWatch', data)
        break
      case 'doNowListen':
        localStorage.setItem('doNowListen', data)
        break
      case 'newWatchAll':
        localStorage.setItem('newWatchAll', data)
        break
      case 'dangerWatchAll':
        localStorage.setItem('dangerWatchAll', data)
        break
      case 'dangerWatchFail':
        localStorage.setItem('dangerWatchFail', data)
        break
      case 'dangerWatchDifficult':
        localStorage.setItem('dangerWatchDifficult', data)
        break
      case 'list':
        localStorage.setItem('list', data)
        break
      case 'newTest':
        localStorage.setItem('newTestWZi', data)
        break
      case 'dangerTest':
        localStorage.setItem('dangerTestWZi', data)
        break
      case 'watchDanger':
        localStorage.setItem('watchDangerWZi', data)
        break
      case 'watchAll':
        localStorage.setItem('watchAllWZi', data)
        break
      case 'listenDanger':
        localStorage.setItem('listenDangerWZi', data)
        break
      case 'listenAll':
        localStorage.setItem('listenAllWZi', data)
        break
      default:
      //return localStorage.getItem('watchDangerWZi')
    }
  },
  get WZiYesterday() {
    switch (localStorage.getItem('status')) {
      case 'newWatchAll':
        return localStorage.getItem('newWatchAll')
      case 'dangerWatchFail':
        return localStorage.getItem('dangerWatchFailYesterday')
      case 'doNowWatch':
        return localStorage.getItem('doNowWatchYesterday')
      case 'dangerWatchDifficult':
        return localStorage.getItem('dangerWatchDifficult')
      case 'dangerWatchAll':
        return localStorage.getItem('dangerWatchAll')
      case 'list':
        return localStorage.getItem('list')
      case 'newTest':
        return localStorage.getItem('newTestWZi')
      case 'dangerTest':
        return localStorage.getItem('dangerTestWZi')
      case 'watchDanger':
        return localStorage.getItem('watchDangerWZi')
      case 'watchAll':
        return localStorage.getItem('watchAllWZi')
      case 'listenDanger':
        return localStorage.getItem('listenDangerWZi')
      case 'listenAll':
        return localStorage.getItem('listenAllWZi')
      default:
        return 1
    }
  },
  set WZiYesterday(data) {
    switch (localStorage.getItem('status')) {
      case 'newWatchAll':
        localStorage.setItem('newWatchAllYesterday', data)
        break
      case 'dangerWatchAll':
        localStorage.setItem('dangerWatchAllYesterday', data)
        break
      case 'dangerWatchFail':
        localStorage.setItem('dangerWatchFailYesterday', data)
        break
      case 'doNowWatch':
        localStorage.setItem('doNowWatchYesterday', data)
        break
      case 'dangerWatchDifficult':
        localStorage.setItem('dangerWatchDifficultYesterday', data)
        break
      case 'list':
        localStorage.setItem('listYesterday', data)
        break
      case 'newTest':
        localStorage.setItem('newTestWZiYesterday', data)
        break
      case 'dangerTest':
        localStorage.setItem('dangerTestWZiYesterday', data)
        break
      case 'watchDanger':
        localStorage.setItem('watchDangerWZiYesterday', data)
        break
      case 'watchAll':
        localStorage.setItem('watchAllWZiYesterday', data)
        break
      case 'listenDanger':
        localStorage.setItem('listenDangerWZiYesterday', data)
        break
      case 'listenAll':
        localStorage.setItem('listenAllWZiYesterday', data)
        break
      default:
      //return localStorage.getItem('watchDangerWZi')
    }
  },
}
