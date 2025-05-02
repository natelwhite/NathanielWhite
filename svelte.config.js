import adapter from '@sveltejs/adapter-static';
const config = {
  kit: {
	appDir: 'app',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
	paths: {
		base: "https://natewhite.site/"
	}
  }
};
export default config;
