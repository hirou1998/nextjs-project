import React from "react"
import Button from "../../components/Atoms/Button/Button"

const SampleIndex: React.FC = () => {
  const clickHandler = () => {
    console.log('click!')
  }

  return (
    <div>
      <h1>sample</h1>
      <Button
        title="button"
        onClick={clickHandler}
      />
    </div>
  )
}

export default SampleIndex