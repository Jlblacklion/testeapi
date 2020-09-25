const express = require ('express');
const app = express();

app.get('/about', (req, res) => {
    res.json({
        name: '',
        email: '',
        img: '',
        url: [  
            {
                type: 'Git',
                url: 'https://github.com/Jlblacklion/'
            },

            {
                type: 'Git',
                url: 'https://github.com/Jlblacklion/'
            },

            {
                type: 'Git',
                url: 'https://github.com/Jlblacklion/'
            }
        ]
    })
})

//Port
app.listen(3000, () => {
    console.log(" porta 3000 rodando ");
})