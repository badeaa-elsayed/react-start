import React, { Component } from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './layout/Layout'

export default class App extends Component {

  routes = createHashRouter([
    {
      path: '/', element: <Layout />,
      children:
        [
          { path: '/', element: <Home /> },
          { path: '/home', element: <Home /> },
          { path: '/portfolio', element: <Portfolio /> },
          { path: '/about', element: <About /> },
          { path: '/contact', element: <Contact /> }
        ]
    }
  ])

  render() {
    return <>
      <RouterProvider router={this.routes} />
    </>

  }
}
