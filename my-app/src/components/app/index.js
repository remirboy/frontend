import React, { Fragment } from 'react'
import { Footer} from '../footer'
import { Main} from '../main'
import { Header} from '../header'
import{ Text} from '../header'

const App = () =>(
    <Fragment>
        <Header name="Remir"></Header>
        <Header name="Shamil"></Header>
        <Header></Header>
        <Text name="Remir"></Text>
        <Text name="Shamil"></Text>
        <Main></Main>
        <Footer></Footer>
    </Fragment>
)

export { App}