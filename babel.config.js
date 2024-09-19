module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
// the entire point of babel here is so that ES6 modules work with jest
