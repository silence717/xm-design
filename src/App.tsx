import { useState } from 'react'
import { Button, Switch } from '../components'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)

  return (
    <div className="text-center">
      <header className="App-header">
        <p>
          <Button disabled size="small">
            默认
          </Button>
          <Button disabled size="small" className="mx-4" type="primary">
            {String(count)}
          </Button>
          <Button disabled size="small" type="link">
            点击我
          </Button>
        </p>

        <p>
          <Button size="small">默认</Button>
          <Button size="small" className="mx-4" type="primary">
            {String(count)}
          </Button>
          <Button size="small" type="link">
            点击我
          </Button>
          <Button type="primary" loading>
            加载中...
          </Button>
        </p>

        <p>
          <Button>默认</Button>
          <Button className="mx-4" type="primary">
            {String(count)}
          </Button>
          <Button type="link">点击我</Button>
        </p>

        <p>
          <Button size="large">默认</Button>
          <Button size="large" className="mx-4" type="primary">
            {String(count)}
          </Button>
          <Button size="large" type="link">
            点击我
          </Button>
        </p>

        <div>
          <div>
            不添加checked状态：
            <Switch />
          </div>
          <div className="item">
            设置checked为true：
            <Switch size={'small'} checked={checked} />
          </div>

          <div>
            设置开关的文案显示：
            <Switch
              checked={checked}
              checkedText="这里是开"
              unCheckedText="这里是关"
              onChange={(checked: boolean) => setChecked(checked)}
            />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
