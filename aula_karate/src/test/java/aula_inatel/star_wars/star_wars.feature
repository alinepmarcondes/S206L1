Feature: Testando API StarWars.

Scenario: Testando retorno starships/9/.
        Given url "https://swapi.dev/api/starships/9/"
        When method get
        Then status 200

Scenario: Testando retorno starships/9/ com informações inválidas.
        Given url "https://swapi.dev/api/starships/9/1234"
        When method get
        Then status 404