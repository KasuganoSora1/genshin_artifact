const path=require("path");
module.exports={
    entry:{
        "echarts":__dirname+"/js_src/echarts.ts",
        "echarts_all":__dirname+"/js_src/echarts_all.ts"
    },
    output:{
        path:path.resolve(__dirname,'js_dst'),
        filename:'[name].js'
        //filename:"echarts_index.js,echarts_all.js"
    },
    mode:'development',
    //devtool:'source-map',
    module:{
        rules: [{
            test: /\.ts$/,
            use:{
                loader:"ts-loader"
            },
            exclude:/node_modules/
        }]
    }
}