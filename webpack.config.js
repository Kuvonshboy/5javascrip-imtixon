const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname, 'src/js/main.js'),
        about: path.resolve(__dirname, 'src/js/about.js')
    },
    output:{
        path: path.resolve(__dirname, 'public'),
        filename : '[name][contenthash].js',
        clean: true
    },
    plugins:[
        new HtmlWebpackPlugin({
          title: "Countires | Home",
          template:'./src/index.html',
          filename: 'index.html',
          chunks: ['main']
        }),
        new HtmlWebpackPlugin({
         title: "Countires | Abouta",
         template:'./src/pages/about.html',
         filename:'about.html', 
         chunks: ['about']  
        })

    ]
    
}