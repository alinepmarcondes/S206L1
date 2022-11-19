/// <reference types="cypress"/>

describe('Criando cenario de testes para o site Amazon', ()=>{
  //Caso 1
  it('Caso de teste: Entrando nos "Mais Vendidos" com sucesso', {
      retries: {
        runMode: 3,
        openMode: 1,
      },
    }, ()=>{
      cy.visit('https://www.amazon.com.br/')
      cy.wait(1000)
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible > :nth-child(2) > .hmenu-item').click()
      cy.get('#zg_banner_text').should('have.text', 'Mais vendidos')
  })

  //Caso 2
  it('Caso de teste: Realizando uma pesquisa com filtro com sucesso', {
      retries: {
        runMode: 3,
        openMode: 1,
      },
    }, ()=>{
      cy.visit('https://www.amazon.com.br/')
      cy.wait(1000)
      cy.get('#twotabsearchtextbox').type('matematica com python').press('enter')
      cy.get('#low-price').type('35')
      cy.get('#high-price').type('55')
      cy.wait(1000)
      cy.get('.a-button-input').click()
      cy.get('.a-color-state').should('have.text', '"matematica com python"')
  })

  //Caso 3
  it('Caso de teste: Adicionando item no carrinho e deletando com sucesso', {
        retries: {
        runMode: 3,
        openMode: 1,
      },
    }, ()=>{
      cy.visit('https://a.co/d/fjWdkTh')
      cy.wait(1000)
      cy.get('#add-to-cart-button').click()
      cy.get('#nav-cart-count').should('have.text', '1')
      cy.wait(1000)
      cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
      cy.wait(1000)
      cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()
      cy.wait(1000)
      cy.get('#sc-subtotal-label-activecart').should('contain.text', 'Subtotal  (0 itens):')
  })

  //Caso 4
  it('Caso de teste: Realizando um login com falha (sem preencher campos)', {
      retries: {
        runMode: 3,
        openMode: 1,
      },
    }, ()=>{
      cy.visit('https://www.amazon.com.br/')
      cy.wait(1000)
      cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click()
      cy.get('.a-button-inner > #continue').click()
      cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content').should('contain.text', '\n  Digite seu e-mail ou número de telefone celular\n')
  })

 //Caso 5
 it('Caso de teste: Inserindo um CEP válido', {
  retries: {
    runMode: 5,
    openMode: 1,
  },
},
  ()=>{
  cy.visit('https://www.amazon.com.br/')
  cy.wait(1000)
  cy.get('#glow-ingress-line2').click()
  cy.get('#GLUXZipUpdateInput_0').type('01153')
  cy.get('#GLUXZipUpdateInput_1').type('000')
  cy.get('#GLUXZipUpdate').click()
  cy.get('#glow-ingress-line2').should('contain.text','01153000')
})

  //Caso 6
  it('Caso de teste: Inserindo um CEP inválido', {
      retries: {
        runMode: 5,
        openMode: 1,
      },
    }, ()=>{
      cy.visit('https://www.amazon.com.br/')
      cy.wait(1000)
      cy.get('#glow-ingress-line2').click()
      cy.get('#GLUXZipUpdateInput_0').clear()
      cy.get('#GLUXZipUpdateInput_1').clear()
      cy.get('#GLUXZipUpdateInput_0').type('37549')
      cy.get('#GLUXZipUpdateInput_1').type('000')
      cy.get('#GLUXZipUpdate').click()
      cy.get('#GLUXZipError > .a-box > .a-box-inner > div').should('have.text', 'Insira um CEP válido')
  })
  
})

