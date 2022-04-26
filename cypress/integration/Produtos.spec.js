///<reference types="cypress" />
var faker = require('faker');

/*
DocTeste({
    Rotina: 
    Objetivo:
    TelaPrincipal:
    PreRequisitos:
    Descricao:
    ResultadoEsperado:
    AnalistaOrigem: Manoela Marie Mulhmann
})
*/  

describe('Funcionalidade Pagina de Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
       cy.get('[class="product-block grid"]').first().click()
       
       //pode-se usar first (primeiro), last(ultimo) ou .eq(3) -pegar posição especifica (comecando pela posicao zero)
       //caso seja necessário escolher um item especifico com um conteudo especifico, voce pode usar .contains('descrição do item a ser selecionado')
    });

    it('Deve selecionar um produto da lista e adicionar ao carrinho', () => {
        var quantidade = 3
        
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade+' x "Ariel Roll Sleeve Sweatshirt" foram adicionadas no seu carrinho.')

    });
});