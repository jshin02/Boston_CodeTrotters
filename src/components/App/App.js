import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Popup from 'reactjs-popup'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import BurgerIcon from '../Header/BurgerIcon'
import Menu from '../Header/Menu'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Groups from '../Home/Groups'
import Grads from '../Grads/Grads'
import GradCard from '../Grads/GradCard'
import InstructorCard from '../Grads/InstructorCard'
import AffiliateCard from '../Grads/AffiliateCard'
import GradShow from '../Grads/GradShow'
import ManageSongs from '../Songs/ManageSongs'
import UpdateProfile from '../Profile/UpdateProfile'
import Test from '../Grads/test'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <header>
          <Header user={user} />
          {msgAlerts.map((msgAlert, index) => (
            <AutoDismissAlert
              key={index}
              heading={msgAlert.heading}
              variant={msgAlert.variant}
              message={msgAlert.message}
            />
          ))}
        </header>
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/about' render={() => (
            <About />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/update-profile' render={() => (
            <UpdateProfile msgAlert={this.msgAlert} user={user} setUser={this.User} />
          )} />
          <AuthenticatedRoute user={user} path='/ManageSongs' render={() => (
            <ManageSongs msgAlert={this.msgAlert} user={user} />
          )} />
          <Route user={user} path='/grad' render={() => (
            <Grads msgAlert={this.msgAlert} setUser={this.setUser} user={user} />
          )} />
          <Route user={user} path='/CodeTrottersIndex' render={() => (
            <GradCard msgAlert={this.msgAlert} user={user} />
          )} />
          <Route user={user} path='/InstructorsIndex' render={() => (
            <InstructorCard msgAlert={this.msgAlert} user={user} />
          )} />
          <Route user={user} path='/AffiliatesIndex' render={() => (
            <AffiliateCard msgAlert={this.msgAlert} user={user} />
          )} />
          <Route user={user} exact path='/' render={() => (
            <Groups msgAlert={this.msgAlert} user={user} />
          )} />
          <Route user={user} path='/grads/:id' render={(obj) => (
            <GradShow obj={obj} msgAlert={this.msgAlert} user={user} />
          )} />
          <Route user={user} path='/test' render={() => (
            <Test user={user} />
          )} />
        </main>
        <Popup
          modal
          overlayStyle={{ background: 'rgba(255, 255, 255, .95)' }}
          contentStyle={{ background: 'rgba(255, 255, 255)', width: '40%', border: '1px solid black' }}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu close={close} user={user} />}
        </Popup>
        <Footer />
      </div>
    )
  }
}

export default App
