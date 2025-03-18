//Configurar Back-End
//Criar 2 variáveis - Consumir framework (express) e outra instância
const express = require('express');
const app = express();

//Rota para os arquivos estaticos (public)
app.use(express.static('public'));

//Qual porta que irá rodar
app.listen (3000, () => {
    console.log(`Servidor rodando no link http://localhost:3000`)
})

