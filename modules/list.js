const error = require('./error')
const help  = require('./help')

module.exports = (api, args) => {

  const command = args.splice(0, 1)[0]

  switch (command) {
    case 'add':
    case '-a':
      addList(api, args)
      break

    case 'delete':
    case '-d':
      removeList(api, args)

    default:
      help()

  }
}

function addList (api, args) {
  try {
    api.addList(args[0])
  } catch (error) {
    error(error)
  }
}

function removeList (api, args) {
  try {
    api.removeList(args[0])
  } catch (error) {
    error(error)
  }
}
