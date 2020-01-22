module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets', 
				'store': '@/store', 
				'components': '@/components', 
				'network': '@/network', 
				'views': '@/views'
			} 
		} 
	} 
}
