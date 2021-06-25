
const withImages = require('next-images');

module.exports = withImages({
    distDir: 'build/.next',
    future: {
        webpack5: true
    },
    sassOptions: {
        prependData: `
        @import "./src/client/resources/variables.scss";
        @import "./src/client/resources/mixins.scss"; 
        `,
        _indentWidth: 4
    },
    webpack: function (config) {
        const originalEntry = config.entry;

        config.entry = async () => {
            const entries = await originalEntry();

            if (
                entries["main.js"] &&
                !entries["main.js"].includes('./src/client/resources/polyfills.tsx')
            ) {
                entries["main.js"].unshift('./src/client/resources/polyfills.tsx');
            }
            return entries;


        };

        return config;
    },
})

