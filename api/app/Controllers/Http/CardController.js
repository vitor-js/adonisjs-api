'use strict'

const Card = use('App/Models/Card')

class CardController {
 
  async index () {
    const cards = await Card.query().with('user').fetch()
    return cards
  }

  async store ({ request,auth }) {
    const data = request.only(['title','status','color_bg,','color_bg,','color_select','content'])
    const card = await Card.create({user_id: auth.user.id,...data,color_bg:'aaaa'})
    return card
  }

  async show ({ params }) {
    const card = await Card.findOrFail(params.id)
    return card
  }

  async destroy ({ params, auth,response }) {
    const card = await Card.findOrFail(params.id)
    if(card.user.id !== auth.user.id) {
      return response.status(401)
    }
    await card.delete()
    return card
  }
}

module.exports = CardController
