// @flow
import API from '../../services/API.service'
import type { Payload } from '../../types'

const getGoalList = () => API.get('goals')
const addGoal = (payload: Payload) => API.post('goals', payload)
const removeGoal = (id: number) => API.delete(`goals/${id}`)

export default {
  getGoalList,
  addGoal,
  removeGoal
}
