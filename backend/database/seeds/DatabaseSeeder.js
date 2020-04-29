'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Mauricio Bavaresco',
      email: 'm@m.com',
      password: '123456'
    })
    await user.teams().create({
      name: 'CPDeG',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
