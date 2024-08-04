import { useEffect, useState } from 'react'
import { FormDataType } from '../lib/types'

const usePost = () => {
  const [response, setResponse] = useState<Response>()
  const [error, setError] = useState()

  useEffect(()=> {
    if (response) {
      console.log('response', response)
    }
    if (error) {
      console.log('error', error)
    }
  }, [response, error])

  const post = async (props: {url: string, formData: FormDataType}) => {
    await fetch(`${props.url}`, {
      method: "POST",
      body: JSON.stringify(props.formData)
    })
      .then(resp => setResponse(resp))
      .catch(e => setError(e))
  }
  return {post}
}

export default usePost