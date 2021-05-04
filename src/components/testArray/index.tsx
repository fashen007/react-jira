
import { useEffect, useState } from 'react'
import {useArray} from 'utils/useArray'
export const TestArray = () => {
  let persons: {name: string; age: number;}[] = [
    {name: "jack", age: 18},
    {name: "jhon", age: 20}
  ]
  const {value, add, removeIndex, clear} = useArray(persons)
  return (
    <div>
      <button onClick={() => add({name: "jhon", age: 22})}> add Jhon </button>
      <button onClick={() => removeIndex(0)}> remove 0 </button>
      <button onClick={() => clear()}> clear </button>
      {
        value.map((person: {age: number, name:string}, index: number) => {
          return(
            <div style={{marginBottom: '30px'}} key={index}>
              <span style={{color: 'red'}}>第{index} 个人-》</span>
              <span>名字：{person.name}</span>
              <span>年龄：{person.age} 岁</span>
            </div>
          ) 
        })
      }
    </div>
  )
}