import adapter from '@sveltejs/adapter-static';
const config = {
  kit: {
	appDir: 'build',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	}
  }
};
export default config;
