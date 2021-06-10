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
    }
})
