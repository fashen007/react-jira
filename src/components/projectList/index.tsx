import {SearchPanel} from './search-panel'
import {TableList} from './table-list'
import { useEffect, useState } from 'react'
import { useMount } from 'utils/hooks'
import { cleanObject } from 'utils/tools'
import qs from 'qs'
const apiURL = process.env.REACT_APP_API_URL
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
        setDebounceValue(value)
    }, delay);
    return () => clearTimeout(timer)
  }, [value])
  return debounceValue
}
export const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: 0,
    id: 0
  })
  const debounceParam = useDebounce(param, 1000)
  useEffect(() => {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (res) => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceParam])
  useMount(() => {
    fetch(`${apiURL}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  })
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam}/>
       <TableList users={users} list={list}/>
    </div>
  )
}
