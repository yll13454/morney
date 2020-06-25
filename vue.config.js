module.exports = {
  lintOnSave: false
}
const path = require('path')

module.exports = {
	lintOnSave: false,
	chainWebpack:config=>{
		const dir = path.resolve(__dirname,'src/assets/icons')


        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)//匹配规则，只要是.svg结尾的都用上面那个规则
            .include.add(dir) //只处理处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                extract:false,//不要解析出文件
                symbolId: 'icon-[name]',
            }).end();
    
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])

        config.module.rule('svg').exclude.add(dir)//其他svg loader排除这个目录
    }
}