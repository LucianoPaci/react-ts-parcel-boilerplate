/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'

interface Props {
    name: string
}

class App extends React.Component<Props> {
    render() {
        const { name } = this.props
        return (
            <React.Fragment>
                <h1>{name}</h1>
            </React.Fragment>
        )
    }
}

export default App
