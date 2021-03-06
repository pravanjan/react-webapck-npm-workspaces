const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports  = {
    entry:"./src/index.tsx",
    mode: "development",

    
    module:{
        rules:[
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                }
            }
        ]
    },
    plugins:[
    new HtmlWebpackPlugin({    template: "index.html"})

    ],
    
   resolve:{
       extensions:[".tsx", ".ts",".js"],
   },
   output:{
       path: path.resolve(__dirname, "build"),
       filename: "bundle.js",
       
   },
   devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
  },

   
   
};
