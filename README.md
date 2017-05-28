# typed-error-factory
Error factory utility module for nodejs

```javascript
const makeTypedError = require('typed-error-factory');

const CustomError = makeTypedError({
    name: 'CustomError',
    message: 'InitialMessage', // default message
    extra: true                // extra properties 
});            

const a = new CustomError('MessageOverride');

const MyError = makeTypedError({
    name: 'MyError',
    message: 'InitialMessage', 
    code: 34
});

const b = new MyError();
```