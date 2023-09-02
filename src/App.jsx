import { useState } from 'react'
import { Button } from './Components/Button/Button'
import { Input } from './Components/input/input'
import { Text, VARIANTS } from './Components/Text/Text'

const arr = [1, 2, 3]

export const App = () => {
  /** Значение в инпут */
  const [value, setValue] = useState('')

  return (
    <>
      <div>
        <Input handleInput={setValue} />
        {arr.map((item) => {
          return <Button>{item}</Button>
        })}
      </div>
      <Text Variant={VARIANTS.TITLE} className="textStyle">
        {value}
      </Text>
      <Text uppercase={true}>main</Text>
    </>
  )
}
