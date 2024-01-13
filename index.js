import express from 'express';
import ejs from 'ejs';
import axios from 'axios';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async(req, res)=>{
    const result = await axios.get("https://animechan.xyz/api/random");
    res.render('index.ejs',{
        quote: result.data.quote,
        character : result.data.character,
        anime: result.data.anime
    });
});











app.listen(port, ()=>console.log(`server running on ${port}`));