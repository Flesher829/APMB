'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', 'PublicationController.index')
//Route.on('/').render('welcome')
Route.get('connexion', 'UserController.index')
Route.post('connecter', 'UserController.connecte')
Route.get('Formul', 'FormuleController.index')
Route.get('index_PuBM', 'PublicationController.index_pub')
Route.get('/contact', 'PublicationController.index_contact')
Route.get('/about', 'PublicationController.about')

Route.delete('destroy/:id', 'PublicationController.destroy')
Route.get('inscrire_O1', 'AdminController.registerutil')
Route.get('/articles/:id', 'PublicationController.show')
Route.get('animation', 'AdminController.dashboard')
Route.post('/contact', 'ContactController.send')
////
Route.get('showpub/:id', 'PublicationController.show')
Route.get('showpub', 'PublicationController.indexPub')
Route.get('auditer', 'PublicationController.update')
Route.post('/api/contenus', 'PublicationController.api_post').as('api.post.contenus');

Route.post('api/fichiers', 'PublicationController.fichiers').as('api.post.fichiers')
///articles//
Route.group(()=> (

Route.get('viewliste', 'AdminController.articlelist'),

Route.get('ajouter', 'AdminController.ajout'),
Route.put('/api/contenus/:id', 'PublicationController.api_put').as('api.post.contenus'),

Route.get('indexanales', 'AdminController.indexannale'),
  
Route.get('modifannale', 'AdminController.annaleModif'), 
 
Route.get('/modifieruser/:id', 'AdminController.modifuser'),
Route.get('cards_index', 'AdminController.indexcards'),

Route.get('website', 'AdminController.website'),

Route.get('ajouxcan', 'AdminController.annaleajout'),


Route.get('/add','PublicationController.addpro' ),
Route.get('indeannale', 'AdminController.annainde'),
Route.post('/logout','UserController.connecteradmin'), 

Route.get('inscrire_O1', 'AdminController.registerutil'),
Route.get('adminindex', 'AdminController.index'),
Route.get('indexutilisateur', 'AdminController.indexutil'),
Route.get('modifier/:id','AdminController.articlEdit'), 
Route.post('addpub', 'PublicationController.store'))
).middleware(['auth'])

///
Route.post('ajouterutilisateur', 'UserController.store').validator('StoreUser')
Route.delete('del/:id', 'UserController.destroy')
Route.put('/modifierutil/:id', 'UserController.update')
Route.get('/ajout-de-contenu','PublicationController.ajout_contenu' )

