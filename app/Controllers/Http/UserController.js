'use strict'

const User = use ('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({view}){
    return view.render('connexion')
 
}  

async connecte({request,auth,session,response}){
 await auth.attempt(request.input('email'),request.input('password'))
 session.flash({ notification:'Bienvenue'}) 

  return response.redirect('adminindex')

}


async connecteradmin ({auth,response} ){
  
  await auth.logout()
  return response.redirect('/')
} 

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ session, response,request }) {
const user = await User.create({
  nom:request.input('nom'),
  prenom:request.input('prenom'),
  email:request.input('email'),
  sexe:request.input('sexe'),
  tel:request.input('tel'),
  statut_utilisateur:request.input('statut_utilisateur'),
  password:request.input('password'),
} )
session.flash({ notification:'Enregistrer avec succes'} )
return response.redirect('/indexutilisateur')
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const user = await User.find(params.id)
user.nom=request.input('nom')
user.prenom=request.input('prenom')
user.email=request.input('email')
user.sexe=request.input('sexe')
user.tel=request.input('tel')
user.statut_utilisateur=request.input('statut_utilisateur')
user.password=request.input('password')
await user.save()
return response.redirect('back')
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const user= await User.find(params.id)
   await  user.delete()
    response.redirect('/indexutilisateur')
  }
}

module.exports = UserController
