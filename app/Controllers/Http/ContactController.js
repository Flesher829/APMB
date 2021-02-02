'use strict'
const Mail = use('Mail')

class ContactController {

    async send ( {response, request, session} ) {
        const {nom,prenom, email,subject, message} =request.post();
       
        
       await Mail.raw('Mail envoyé par : '+email+'\n\n'+message, (envoi) => {
            envoi
              .to(email)
              .from('julesviwakinnou9@gmail.com')
              .subject(subject);
          });
          session.flash({
            notification: {
              type: "info",
              message:
                "Votre message a été bien reçu ! Nous vous ferons un retour d'ici là",
            },
          });
          return response.redirect('/');
    }


}

module.exports = ContactController
