describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:9091/login')
    //Hacer clic en Iniciar Sesion
    cy.get('#login-linkIC').click();

    //Acciones de Iniciar Sesion
    //*User
    cy.get('#userLogin').focus();
    cy.get('#userLogin').type('admin');
    cy.get('#userLogin').blur();
    //*Pass
    cy.get('#passwordLogin').focus();
    cy.get('#passwordLogin').type('admin');
    cy.get('#passwordLogin').blur();
    //*Boton Iniciar Sesion
    cy.get('#InicioLogin').click();
    cy.url().should('include', '/ingresar');

    cy.get('#btPlanes').click();

    cy.get('#verPlanes').click();

    cy.get(':nth-child(61) > :nth-child(5) > .btn-success').click();

    cy.get('#nomServ').clear();
    cy.get('#nomServ').focus();
    cy.get('#nomServ').type('Sabado de Ayuno');

    cy.get('#preServ').clear();
    cy.get('#preServ').focus();
    cy.get('#preServ').type('150');

    cy.get('#ModalEditar > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.get('.swal2-confirm').click();
    cy.get('.swal2-confirm').click();


  })
})