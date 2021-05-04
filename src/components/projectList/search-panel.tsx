import { useState } from "react"
import {user} from 'types/users'
interface propsType {
  users: user[];
  setParam: (param: propsType['param']) => void; 
  param: {
    id: number;
    personId: number;
    name: string;
  };
}
export const SearchPanel = ({users, param, setParam}: propsType) => {
  const selectChange =(evt) => {
    let personId = evt.target.value
    let user = users.filter((usr) => usr.id === +personId)[0]
    setParam({
      ...param,
      name: user.name,
      personId
    })
  }
  return <form action="">
      <div>
        <input type="text" value={param.name} onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }/>
        <select value={param.personId} onChange={selectChange} >
          <option value=''>负责人</option>
          {
            users.map((user: user) => {
              return <option value={user.id} key={user.id}>{user.name}</option>
            })
          }
        </select>
      </div>
    </form>
}