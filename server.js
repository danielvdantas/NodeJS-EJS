// Cria um servidor para mostrar tudo o que está sendo construído dentro do navegador.
const express = require('express');
// Instancia o express.
const app = express();
// Informa ao express que será usado o ejs para renderizar
// VIEW ENGINE é a ferramenta usada para renderizar HTML usando o EJS
app.set("view engine", "ejs");
// APP.GET está criando uma rota. Quando acessar o site. O "/" é o domínio principal do site
app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScripr para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "bestado"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript."
    // Resposta é para renderizar o index
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res) {
    // Resposta é para renderizar o index
    res.render("pages/about");
})

// Função que ouve a porta '8080'. Rodando na nossa máquina
app.listen(8080);
console.log('Rodando mesmo!')