const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
const express = require('express')
const path = require('path')

const app = express()
const compiler = webpack(webpackConfig)
const port = 3000

app.use(express.static(path.join(__dirname, '/www')))


app.listen(port, () => {
  console.log('We are at Home');
})

