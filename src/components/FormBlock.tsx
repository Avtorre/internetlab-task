import React, { useState } from 'react'
import Button from './UI/Button/Button'
import Input from './UI/Input/Input'
import { FormDataType } from '../lib/types'
import usePost from '../hooks/usePost'

const FormBlock = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    sname:'',
    checkbox: false
  })
  const {post} = usePost()
  const form =  document.getElementById('form') as HTMLFormElement
  const [nameValid, setNameValid] = useState<"valid" | "invalid">()
  const [sNameValid, setSNameValid] = useState<"valid" | "invalid">()

  const validateName = (name: string) => {
    if ((name.at(0) === name.at(0)?.toUpperCase()) && (name.length > 1)) {
      setNameValid('valid')
      return true
    } else {
      setNameValid('invalid')
      return false
    }
  }

  const validateSName = (sname: string) => {
    if ((sname.at(0) === sname.at(0)?.toUpperCase()) && (sname.length > 1)) {
      setSNameValid('valid')
      return true
    } else {
      setSNameValid('invalid')
      return false
    }
  }

  const onSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if ((validateName(formData.name)) && validateSName(formData.sname)) {
      console.log('formData', formData)
      post({url:'0.0.0.0//some.server.ok', formData})
      if (form){
        form.reset()
        setFormData({
          name: '',
          sname:'',
          checkbox: false
        }) 
      }
    } else {
      if (!formData.name.length) {
        setNameValid('invalid')
      }
      if (!formData.sname.length) {
        setSNameValid('invalid')
      }
    }
  }



  return (
    <form className='form-block' id='form'>
      <h2 className='headline-second'>Отправь форму</h2>
      <div className='form-block__inputs'>
        <Input 
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setFormData({...formData, name: e.target.value, })
            validateName(e.target.value)
          }} 
          aria-label='Имя' 
          placeholder='Введите имя...' 
          name='name'
          about='Должно начинать с большой буквы, мин. 2 символа'
          aria-labelledby = {nameValid}
        />
        <Input 
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setFormData({...formData, sname: e.target.value,})
            validateSName(e.target.value)
          }} 
          aria-label='Фамилия' 
          placeholder='Введите фамилию...' 
          name='sname'
          about='Должно начинать с большой буквы, мин. 2 символа'
          aria-labelledby = {sNameValid}
        />
      </div>
      <div className='form-block__submit'>
        <label htmlFor='agree' className='bodytext-16'>
          <Input 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setFormData({...formData, checkbox: !formData.checkbox})
            }} 
            className='form-block__checkbox' 
            type='checkbox' 
            id='agree' 
            name='checkbox'
            about='Должно начинать с большой буквы'
          />
          Согласен, отказываюсь
        </label>
        <Button variant='form' type='submit' name='submit' onClick={(e) => onSubmit(e)}>
            Отправить
        </Button>
      </div>
    </form>
  )
}

export default FormBlock