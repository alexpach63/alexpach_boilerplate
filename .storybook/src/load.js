function requireContext(context) {
	context
		.keys()
		.forEach((filename) => context(filename));
}

export function loadStories(folder) {
	const componentsContext = require.context(
		'../../src/components',
		true,
		/\.stories\.tsx$/,
	);

	const containersContext = require.context(
		'../../src/containers',
		true,
		/\.stories\.tsx$/,
	);

	requireContext(componentsContext);
	requireContext(containersContext);
}
