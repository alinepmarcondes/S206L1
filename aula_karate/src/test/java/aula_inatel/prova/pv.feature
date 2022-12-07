Feature: Testando API Go Rest.

Background: Executa antes de cada teste
    * def url_base = 'https://jsonplaceholder.typicode.com'

Scenario: Testando a quantidade de /users.
    Given url url_base
    And path '/users'
    When method get
    Then status 200
    And match $ == '#[10]'

Scenario: Testando retorno do usuário 3 e retorno do JSON.
    Given url url_base
    And path '/users/3'
    When method get
    Then status 200
    And match $.name == 'Clementine Bauch'

Scenario: Testando retorno de /todos e verificando seu tipo.
    Given url url_base
    And path '/todos'
    When method get
    Then status 200
    And match each $ contains {userId: '#number', id: '#number', title: '#string', completed: '#boolean'}

Scenario: Adicionando um comentário.
    Given url url_base
    And path '/comments'
    And request {id: 501, name: 'Ana Maria', email: 'maria_ana@gmail', body: 'este é um comentário'}
    When method post
    Then status 201
    And match $.name == '#string'

Scenario: Buscando um post inexistente.
    Given url url_base
    And path '/posts/-1'
    When method get
    Then status 404
    
