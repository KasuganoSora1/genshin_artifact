const path=require("path");
module.exports={
    entry:__dirname+"/js_src/echarts.ts",
    output:{
        path:path.resolve(__dirname,'js_dst'),
        filename:"echarts_index.js"
    },
    mode:'development',
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