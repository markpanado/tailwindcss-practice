module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        container: {
            backgroundColor: ['bg-yellow-800']
        },
        extend: {},
    },
    variants: {},
    plugins: [],
    purge: {
        enabled: true,
        mode: 'layers',
        layers: ['base', 'components', 'utilities'],
        content: [
            './dist/**/*.html'
        ]
    }
};
