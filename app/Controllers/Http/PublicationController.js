'use strict'
const Publication  = use('App/Models/Publication')
const Helpers = use('Helpers')
const Drive = use('Drive')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
1
/**
 * Resourceful controller for interacting with publications
 */
class PublicationController {
  /**
   * Show a list of all publications.
   * GET publications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ view, params}) {
    const pub = await Database
      .table('publications')
      .orderBy('id', 'desc')  
      .limit(4)
    return view.render('welcome',{pub} )
    }
    async index_pub ({ view, params}) {
      const pub = await Database
      .table('publications')
      .orderBy('id', 'asc')  
      .limit(6)
      return view.render('publication.index',{pub}  )
      }

  async index_contact({view}){
    return view.render('/contact')
} 
async about({view}){
  const pub = await Database
      .table('publications')
      .orderBy('id', 'desc')  
      .limit(3)
  return view.render('/about',{pub} )
} 

  /**
   * Render a form to be used for creating a new publication.
   * GET publications/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new publication.
   * POST publications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  async indexPub ({ view }) {
    return view.render('publication/show')
  }

  async addpro ({ view }) {
    return view.render('admin/publication/Article/add')
  }
  /**
   * Display a single publication.
   * GET publications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */



  async store ({ session, response,request }) {
    const pub = await Publication.create({
      titre:request.input('titre'),
      resume:request.input('resume'),
      texte:request.input('texte')
    
    } )
    session.flash({ notification:'Enregistrer avec succes'} )
    return response.redirect('/add')
      }



  async show ({ params, request, response, view }) {
 const pub = await Publication.find(params.id)
    return view.render('publication/show',{
      pub:pub.toJSON()
    } )
  }

  async fichiers({response, request}) {
    const file = request.file('fichier', {
      types: ['audio', 'video', 'image', 'pdf']
    });
    if (!file)
      return response.status(404).json({message: "Vous n'avez pas insérer  de fichier."});
    await file.move(Helpers.publicPath('fichiers/'), {
      name: 'fichier-' + ((new Date()).getTime()) + '.' + file.extname,
      overwrite: true
    });
    if (!file.moved())
      return response.status(404).json({message: "Désolé, une erreur c'est produit."});
    return response.json({url: 'fichiers/' + file.fileName});
  }




  async api_post({request, response}) {
    let publication = await Publication.create(request.only(['titre', 'resume', 'texte']));
    publication.save()
    return response.json(publication);
  }

  /**
   * Render a form to update an existing publication.
   * GET publications/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update publication details.
   * PUT or PATCH publications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a publication with id.
   * DELETE publications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const publication= await Publication.find(params.id)
    await publication.delete()
    return response.redirect('/viewliste')
  }

  


async api_put({ params, request, response }) {
  const publication= await Publication.find(params.id)
  publication.titre = request.input('titre'),
  publication.resume = request.input('resume'),
  publication.texte = request.input('texte')
  await publication.save()
  return response.redirect('viewliste' )
}



async ajout_contenu({view}) {
  return view.render('admin/publication/ajouter', {
   
  })
}

 

}

module.exports = PublicationController
