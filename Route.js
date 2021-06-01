import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LoginScreen from './Login'
import Inventaire from './chef/Inventaire'
import AddBontravail from './chef/AddBontravail'
import InventaireC from './consultant/InventaireC'
import Addinventaire from './consultant/Addinventaire'
import viewbontravail from './chef/viewbontravail'

export default  Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene type="replace" key = "Login" component = {LoginScreen} title = "Login" initial = {true} hideNavBar />
         <Scene  key = "Inventaire" component = {Inventaire}  hideNavBar  />
         <Scene  key = "AddBontravail" component = {AddBontravail}  hideNavBar  />
         <Scene  key = "InventaireC" component = {InventaireC}  hideNavBar  />
         <Scene  key = "Addinventaire" component = {Addinventaire}  hideNavBar  />
         <Scene  key = "viewbontravail" component = {viewbontravail}  hideNavBar  />
      </Scene>
   </Router>
)
