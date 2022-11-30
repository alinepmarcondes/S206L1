Feature: Testando API Go Rest.

Background: Executa antes de cada teste
    * def url_base = 'https://jsonplaceholder.typicode.com'

Scenario: Testando retorno /comments e verificando seu tipo.
    Given url url_base
    And path '/comments'
    When method get
    Then status 200
    And match $ == '#[]'
    And match $ == '#[500]'
    And match each $ contains {email: '#string', postId: '#number'}

Scenario: Testando retorno inválido.
    Given url url_base
    And path 'invalido'
    When method get
    Then status 404

Scenario: Verificando retorno de post 1.
    Given url url_base
    And path '/posts/1'
    When method get
    Then status 200
    And match $.id == 1

Scenario: Criando um user.
    Given url url_base
    And path '/users'
    And request {id: 11, name: 'Ana Maria', username: 'maria_ana'}
    When method post
    Then status 201
    And match $.username == '#string'

Scenario: Deletando um user.
    Given url url_base
    And path '/users/11'
    When method delete
    Then status 200

Scenario: Fazendo o get do usuário 11 e não obtendo resultado.
    Given url url_base
    And path '/users/11'
    When method get
    Then status 404

#----------------------------------------------------------------------
#1- 1 suíte de testes com 6 cenários.
#2- Os testes são automatizados.
#3- Os testes se localizam no meio da pirâmide (serviço).
#4- Os testes desenvolvidos são funcionais, porque confirmam se o sistema faz o que os usuários esperam.
#5- Sim, porque verificam o fluxo completo.
#6- Para que funcionem em modo regressão, a repetição dos testes deve ser automatizada para facilitar a verificação sempre que necessário
# com alterações no código.

    