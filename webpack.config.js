const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jek-mobile-timetable.js',
        library: {
            name: 'jekmobiletimetable',
            type: 'umd',
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|json)$/i,
                type: 'asset/resource',
            },
        ]
    }

};