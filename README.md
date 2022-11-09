# S206L1

## _Passo a passo de como executar o projeto:_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/alinepmarcondes/S206L1/tree/master)

- 1- Baixe a seguinte dependência:
  Ela é utilizada para simular a tecla 'enter' sendo pressionada (.press('enter'))

```sh
import '@walmyr-filho/cy-press'
```

- 2- Abra o cypress pela linha de comando:

```sh
./node_modules/.bin/cypress open
```

- 3- Selecione o "E2E Testing" e abra no Chrome

- 4- Abra o arquivo "lista1.cy.js"

## Passo a passo de como gerar o relatório de testes:

- 1- Feche o cypress

- 2- Verifique se o arquivo cypress.config.js está configurado da seguinte maneira:

```sh
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
```

- 3- Verifique se o arquivo cypress/support/e2e.js contém:

```sh
import 'cypress-mochawesome-reporter/register';
```

- 4- Rode specs pela linha de comando:

```sh
./node_modules/.bin/cypress run --spec 'cypress/e2e/lista1.cy.js/'
```

> Observação:
> Para os testes foi alterado a quantidade de vezes em que seria testado antes que apontasse erro. Por padrão, cada teste é feito somente uma vez. Ao entrar no site da Amazon, em alguns
> casos, a página inicial era diferente (não sei ao certo o motivo, já que o link é o mesmo), o que acarretava em erro. Ao ter feito essa mudança, os testes ficaram mais estáveis.
