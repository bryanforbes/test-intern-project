export const destination = './dist/';

export const environments: any[] = [
	{ browserName: 'chrome' }
];

export const maxConcurrency = 1;

export const tunnel = 'NullTunnel';

export const loaders = {
	'host-browser': 'node_modules/dojo-loader/loader.js',
	'host-node': 'dojo-loader'
};

export const loaderOptions = {
	baseUrl: `${ destination }`,
	packages: [
		{ name: 'ts-helpers', location: `../node_modules/ts-helpers`, main: 'index.js' },
		{ name: 'test-intern-project', location: `src` },
		{ name: 'tests', location: `tests` }
	]
};

export const suites: string[] = [ 'tests/unit/all' ];

export const functionalSuites: string[] = [ 'tests/functional/all' ];

export const excludeInstrumentation = /^(?:dist\/tests|node_modules)\//;
