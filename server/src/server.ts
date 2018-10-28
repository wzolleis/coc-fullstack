const express = require('express');

const app = express();

app.get('/', (_: any, res: any) => {
    res.send({hi: 'there'});

});

const PORT: string = process.env.PORT || '8080';

app.listen(PORT, () => {
    console.log('started server @ port ', PORT);
})