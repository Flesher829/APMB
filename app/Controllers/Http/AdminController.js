'use strict'
const User = use('App/Models/User')
const Publication = use('App/Models/Publication')
class AdminController {

    async index({view}){
        return view.render('admin.index')
    } 

    async articlelist ({ view }) {
        const publication = await Publication.all()
        return view.render('admin/publication/Article/liste',{
          publication:publication.toJSON()} )
      }

 async ajout ({view}){
     return view.render('admin/publication/Article/ajouter')
 } 


 async articlEdit({view,params}){
     const publication= await Publication.find(params.id)
    return view.render('admin/publication/Article/modifier',{publication:publication.toJSON()} )
} 

 

async registerutil({view}){
    return view.render('admin/utilisateur/register')
}

async dashboard({view}){
    return view.render('admin/dashboard')
}

async indexutil({view}){
    const user= await User.all()
    
    return view.render('admin/utilisateur/index',{
        user:user.toJSON()} )
}
async modifuser({params,view}){
    const user=await User.find(params.id)
    return view.render('admin/utilisateur/modifier',{user:user.toJSON()})
}

 

async website({view}){
    return view.render('admin/website')
}

 
}

module.exports = AdminController
