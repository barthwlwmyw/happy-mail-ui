import { combineEpics } from 'redux-observable'

// import loadDatafileEpic from './epics/datafile/loadDatafile'
// import createApproxTaskEpic from './epics/approxTask/createTask'
// import checkTaskStatusEpic from './epics/approxTask/checkTaskStatus'
import userLogIn from './epics/user/userLogIn'

export default combineEpics(userLogIn)
