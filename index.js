function makeTypedError(args) {
    return (class extends Error {
        constructor(message) {
            super(message || args.message);

            for (let key in args) {
                if(key === 'message') continue;
                Object.defineProperty(this, key, {enumerable: false, value: args[key]});
            }

        }
    })
}

module.exports = makeTypedError;