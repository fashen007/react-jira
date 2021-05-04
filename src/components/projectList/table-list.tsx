import react from 'react'
import { project } from 'types/project'
import {user} from 'types/users'
interface propsType {
  users: user[];
  list: project[]
}
export const TableList = ({users, list}: propsType) => {
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map((project) => <tr key={project.personId}>
          <td>{project.name}</td>
          <td>{users.find(user => user.id === project.personId)?.name}</td>
          </tr>)
      }
    </tbody>
  </table> 
}