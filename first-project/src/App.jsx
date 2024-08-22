import React, { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import { Link } from 'react-router-dom'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
 
  <div>
    <h1>Connexion</h1>
    <form>
      <p>Renseigner vos informations de connexion pour vous connectez</p>
      <Input
      label={'Email'}
      reference={'email'} 
      type={'email'} 
      value={email} 
      placeHolder={'Saisir l\'adresse e-mail ici... '} 
      onChange={ (e) => {
        setEmail(e.target.value)
      }} 
      /><br/>
      <div>{email}</div>
      <Input 
      label={'Mot de passe'}
      reference={'password'} 
      type={'password'} 
      value={password} 
      placeHolder={'Saisir le mot de passe ici... '} 
      onChange={ (e) => {
        setPassword(e.target.value)
      }} 
      /><br/>
      <div>
        <Button type={'submit'} text={'Soumettre'} /><br/>
        <Button type={'reset'} text={'Annuler'} />
      </div>
      <Link to={'/registration'} >Inscription</Link>
    </form>
  </div>
  
)}
