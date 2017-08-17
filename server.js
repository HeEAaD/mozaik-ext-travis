'use strict'

require('dotenv').load({ silent: true })

const path = require('path')
const Mozaik = require('@mozaik/server')

let configFile = process.argv[2] || 'config.yml'

console.log(`> using config file: '${configFile}'\n`)

Mozaik.configureFromFile(path.join(__dirname, configFile))
    .then(config => {
        Mozaik.registerApi('travis', require('@mozaik/ext-travis/client'))
        Mozaik.start()
    })
    .catch(err => {
        console.error(err)
    })
