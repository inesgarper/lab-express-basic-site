const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

// Rutas
app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/about', (req, res) => {
    res.render('about-page')
})

app.get('/works', (req, res) => {

    const singles = [
        {
            name: "Ay Mamá",
            cover: "https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/26615/ay_mama-portada.jpg",
            year: 2022,
            spotify_plays: 6289743,
            duration: "03:01"
        },
        {
            name: "A ver qué pasa",
            cover: "https://i.scdn.co/image/ab67616d0000b273e32db100ea15aa63dcdcfb68",
            year: 2021,
            spotify_plays: 639834,
            duration: "03:52"
        },
        {
            name: "Perra",
            cover: "https://m.media-amazon.com/images/I/71CTa7h11XL._SS500_.jpg",
            year: 2021,
            spotify_plays: 1039834,
            duration: "03:36"
        },
        {
            name: "In Spain We Call It Soledad",
            cover: "https://lastfm.freetls.fastly.net/i/u/770x0/4550caa9de8bbda26d564f179bfa34aa.jpg",
            year: 2020,
            spotify_plays: 11398344,
            duration: "02:57"
        },
        {
            name: "Too Many Drugs",
            cover: "https://m.media-amazon.com/images/I/71STk9O3awL._SS500_.jpg",
            year: 2020,
            spotify_plays: 12646356,
            duration: "05:28"
        }
    ]

    res.render('works-page', { theSongs: singles })
})

app.get('/photo-gallery', (req, res) => {
    res.render('photo-gallery-page')
})

// Levantar el servidor
app.listen(5005, () => console.log('Servidor corriendo en el 5005'))