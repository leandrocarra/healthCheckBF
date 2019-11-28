var app = require("express")();
var bodyParser = require("body-parser");
var checkCheck = require('./healthCheck');

var PORT = process.env.PORT || 3000;

var urlStatus;
var url = 'https://www.magazineluiza.com.br/';

var urls = {
  'sites': [
    {
      url: 'https://www.magazineluiza.com.br/',
      name: 'Magazine Luiza'
    },
    {
      url: 'https://www.americanas.com.br/',
      name: 'Americanas'
    },
    {
      url: 'https://www.submarino.com.br/',
      name: 'Submarino'
    },
    {
      url: 'https://www.ricardoeletro.com.br/',
      name: 'Ricardo Eletro'
    },
    {
      url: 'https://www.casasbahia.com.br/',
      name: 'Casas Bahia'
    },
    {
      url: 'https://www.mercadolivre.com.br/',
      name: 'Mercado Livre'
    },
    {
      url: 'https://www.shoptime.com.br/',
      name: 'Shop Time'
    },
    {
      url: 'https://www.netshoes.com.br/',
      name: 'NetShoes'
    },
    {
      url: 'https://www.amazon.com.br/',
      name: 'Amazon'
    },
    {
      url: 'https://www.pontofrio.com.br/',
      name: 'Ponto Frio'
    },
    {
      url: 'https://www.kabum.com.br/',
      name: 'Kabum'
    },
    {
      url: 'https://www.fastshop.com.br/',
      name: 'Fast Shop'
    },
    {
      url: 'https://www.dafiti.com.br/',
      name: 'Dafit'
    }
  ]
}
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const promises = urls.sites.map(site => checkCheck(site));

  Promise
    .all(promises)
    .then((result) => {
      res.render("index", {result});
      // console.log(result)
    })
});

app.listen(PORT, () => { console.log("Server online on http://localhost:3000") });
