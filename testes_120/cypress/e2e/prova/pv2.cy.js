/// <reference types="cypress"/>

describe('Criando cenario de testes para o site Banking Project', ()=>{
    //Caso 1
    it('Caso de teste: Fazendo um depósito com sucesso.', ()=>{
        cy.visit(site)
        logarUsuario(2)
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type('120')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('have.text', 'Deposit Successful')
    })

    //Caso 2
    it('Caso de teste: Fazendo depósito sem preencher os campos.', ()=>{
        cy.visit(site)
        logarUsuario(3)
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('form.ng-pristine > .btn').click()
        cy.get('.form-control').should('be.empty')
    })

    //Caso 3
    it('Caso de teste: Acessando os usuários e pesquisando com sucesso.', ()=>{
        cy.visit(site)
        cy.get(':nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type('Harry')
        cy.get('tr.ng-scope > :nth-child(1)').should('have.text', 'Harry')
    })
  
})

let site = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'

function logarUsuario(numero){
    let nomes = ['Hermoine Granger', 'Harry Potter', 'Ron Weasly', 'Albus Dumbledore', 'Neville Longbottom']

    cy.visit(site)
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select(numero)
    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text', nomes[numero-1])
}