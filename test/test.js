const assert = require('assert');
const makeTypedError = require('../');

const CustomError = makeTypedError({name: 'CustomError', message: 'InitialMessage', extra: true});

const a = new CustomError('MessageOverride');

const MyError = makeTypedError({name: 'MyError', message: 'InitialMessage', code: 34});

const b = new MyError();

describe('Test "a" properties', () => {

    it('should have "name" property', () => {
        assert(a.hasOwnProperty('name'))
    });

    it('should have "message" property', () => {
        assert(a.hasOwnProperty('message'))
    });

    it('should have "extra" property', () => {
        assert(a.hasOwnProperty('extra'))
    });

    it('message should be "MessageOverride"', () => {
        assert(a.message === 'MessageOverride')
    });

    it('extra should be "true"', () => {
        assert(a.extra === true)
    });

    it('should be instance of Error', () => {
        assert(a instanceof Error)
    });

    it('should be instance of CustomError', () => {
        assert(a instanceof CustomError)
    });

    it('should not be instance of MyError', () => {
        assert(!(a instanceof MyError))
    });

});

describe('Test "b" properties', () => {

    it('should have "name" property', () => {
        assert(b.hasOwnProperty('name'))
    });

    it('should have "message" property', () => {
        assert(b.hasOwnProperty('message'))
    });

    it('should have "code" property', () => {
        assert(b.hasOwnProperty('code'))
    });

    it('message should be "InitialMessage"', () => {
        assert(b.message === 'InitialMessage')
    });

    it('should be instance of Error', () => {
        assert(b instanceof Error)
    });

    it('should be instance of MyError', () => {
        assert(b instanceof MyError)
    });

    it('should not be instance of CustomError', () => {
        assert(!(b instanceof CustomError))
    });

});
