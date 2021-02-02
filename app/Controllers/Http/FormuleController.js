'use strict'

class FormuleController {
    async index ({ view }) {
        return view.render('formules')
      }
}

module.exports = FormuleController
