import * as React from 'react'
import { hot } from 'react-hot-loader'

const App: React.FC = () => {
    const [count, setCount] = React.useState(0)
    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2>Using React-Hot-Reload</h2>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </React.Fragment>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any

export default hot(module)(App)
