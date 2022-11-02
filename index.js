express = require("express");
app = express();

const axios = require("axios");
const cheerio = require("cheerio");
const PORT = process.env.PORT || 8877;

function nome_autor(nome) {
  nome = nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  nome = nome.replace(/[\-]/g, "_");
  nome = nome.replace(/[\s]/g, "_");
  nome = nome.replace(/[\W]/g, "");
  return nome;
}

const autores = [
  "Fernando Pessoa",
  "William Shakespeare",
  "Clarice Lispector",
  "Maria Julia Paes de Silva",
  "Friedrich Nietzsche",
  "Augusto Cury",
  "Luís de Camões",
  "Mario Quintana",
  "Confúcio",
  "Roberto Shinyashiki",
  "Pitágoras",
  "Carlos Drummond de Andrade",
  "Dalai Lama",
  "Aristóteles",
  "Haile Selassie",
  "Oliver Wendell Holmes Sr.",
  "Machado de Assis",
  "Oscar Wilde",
  "Platão",
  "Albert Einstein",
  "Charles Chaplin",
  "Stubby Currence",
  "John Wooden",
  "Thich Nhat Hanh",
  "D. Elhers",
  "Fernando Teixeira de Andrade",
  "Gloria Hurtado",
  "Leonardo da Vinci",
  "Paulo Coelho",
  "Antoine de Saint-Exupéry",
  "Joseph Addison",
  "Roger Bussy-Rabutin",
  "Georges Bernanos",
  "Evelyn Beatrice Hall",
  "Geraldo Eustáquio de Souza",
  "Toquinho e Mutinho",
  "Myrtes Mathias",
  "Lilian Tonet",
  "Sócrates",
  "Nemo Nox",
  "Buda",
  "Cora Coralina",
  "Vinicius de Moraes",
  "Amyr Klink",
  "Sarah Westphal",
  "Garth Henrichs",
  "Martin Luther King",
  "Santo Agostinho",
  "Waldemar Valle Martins",
  "Paulo Roberto Gaefke",
  "Millôr Fernandes",
  "Sêneca",
  "Vladimir Maiakóvski",
  "John Dryden",
  "Rui Barbosa",
  "Oswaldo Montenegro",
  "Oliver Goldsmith",
  "Maurice Switzer",
  "Voltaire",
  "Sigmund Freud",
  "Mahatma Gandhi",
  "Leon Tolstói",
  "Jo. Cooke",
  "William James",
  "Henry Ford",
  "Khalil Gibran",
  "Benjamin Franklin",
  "John Ruskin",
  "Victor Hugo",
];

async function pegar_frase(entrada) {
  const sortear = Math.floor(Math.random() * autores.length);
  if (entrada == "a") {
    var autor = nome_autor(autores[sortear]);
    var url = "https://www.pensador.com/autor/" + autor + "/";
  } else {
    var autor = nome_autor(entrada.toString());
    var url = "https://www.pensador.com/autor/" + autor + "/";
  }

  const lista = [];

  try {
    var { data } = await axios.get(url);
    var $ = cheerio.load(data);
  } catch (e) {
    return undefined;
  }

  $(".fr").each((i, elem) => {
    const frase = $(elem).text();
    const movie = { autor, frase };
    lista.push(movie);
  });
  const sortear2 = Math.floor(Math.random() * lista.length);
  return lista[sortear2];
}

app.get("/autor/:autorp", (req, res) => {
  autorP = req.params.autorp;
  function resposta(val) {
    if (val != undefined) {
      res.json({
        autor: val.autor,
        frase: val.frase,
      });
    } else {
      res.json(false);
    }
  }

  pegar_frase(autorP).then((val) => resposta(val));
});

app.listen(PORT, function () {
  console.log(">>Servidor rodando na porta: " + PORT);
});
