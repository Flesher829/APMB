'use strict'

class StoreUser {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required|confirmed|min:4'
    }
  }


  get messages () {
    return {
      'email.required': 'email address est exigé.',
      'password.confirmed': 'Revoyer le mot de passe.',
      'email.email': 'Veillez donner un email valide.',
      'email.unique': 'Cet email existe déjà.',
      'password.required': 'le champs mot de passe est exigé',
      'password.min': 'pas moins de 4 caractere'
    }
  }
}

module.exports = StoreUser
