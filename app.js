const express = require ('express');
const app = express();


const PORT = process.env.PORT  || 8877

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
app.listen(PORT, () => {
    console.log(" porta 3000 rodando " + PORT);
})