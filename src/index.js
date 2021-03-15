import React from 'react'
import ReactDom from 'react-dom'

const root = document.getElementById('root')
const Header = () => <h1>Header</h1>
const Main = () => <main>Main</main>
const Footer = () => <footer>footer</footer>

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

ReactDom.render(<App />, root)

