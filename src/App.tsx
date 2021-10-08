import { useState } from 'react'
import { Button, Switch } from '../components';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
              {String(count)}
          </Button>
        </p>
        <div>
          <div>
            不添加checked状态：
            <Switch />
          </div>

          <div className="item">
            设置checked为true：
            <Switch size={"small"} checked={checked} />
          </div>

          <div>
            设置开关的文案显示：
            <Switch checked={checked} checkedText="这里是开" unCheckedText="这里是关" onChange={(checked: boolean) => setChecked(checked)} />
          </div>
        </div>

      </header>
    </div>
  )
}

export default App
