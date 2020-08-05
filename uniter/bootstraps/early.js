module.exports = function (environment) {
    environment.defineCoercingFunction('describe', window.describe);
    environment.defineCoercingFunction('expect', window.expect);
    environment.defineCoercingFunction('it', window.it);

    environment.defineSuperGlobal('cy', window.cy);
};
