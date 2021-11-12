describe('Lambda Eats App', () =>{
    beforeEach(() =>{
       cy.visit('http://localhost:3000/pizza')
    })
 
    const nameInput = () => cy.get('input[id="name-input"]');
    const specialT = () => cy.get('input[id="special-text"]');
    const sizeDrop = () => cy.get('select[id="size-dropdown"]');
    const submitBtn = () => cy.get('button[id="order-button"]');
 
    it('sanity check', () => {
       expect(1 + 2).to.equal(3)
       expect(2 + 2).not.to.equal(5);
    })
 
    describe('all elements exist how expected at first render', () =>{
       it('test for all elements to exist', ()=>{
          cy.get('input[name=pepperoni]').should('exist');
          cy.get('input[name=olives]').should('exist');
          cy.get('input[name=bacon]').should('exist');
          cy.get('input[name=mushrooms]').should('exist');
          nameInput().should('exist');
          specialT().should('exist');
          sizeDrop().should('exist');
          submitBtn().should('exist');
       })
       it('submit Button is disabled ', () =>{
          submitBtn().should('be.disabled')
       })
    })
 
    describe('test that you can add text to the box', () => {
       it('can add text to Name', () =>{
          nameInput().should('exist');
          nameInput().type('Danielle');
          nameInput().should('have.value', 'Danielle');
       })
       it('can add value to text to Special Instructions', () => {
          specialT().should('exist')
            .type('hello my name is Danielle')
          specialT().should('have.value', 'hello my name is Danielle')
       })
    })
 
    describe('test that you can select multiple toppings', () => {
       it('can select pepperoni and olives', () => {
          cy.get('input[name=pepperoni]').should('not.be.checked');
          cy.get('input[name=pepperoni]').check()
             .should('have.value', 'on');
          cy.get('input[name=olives]').should('not.be.checked');
          cy.get('input[name=olives]').check()
             .should('have.value', 'on');
       })
       it('can select pepperoni, olives, and mushrooms', () => {
          cy.get('input[name=pepperoni]').should('not.be.checked');
          cy.get('input[name=pepperoni]').check()
             .should('have.value', 'on');
          cy.get('input[name=olives]').should('not.be.checked');
          cy.get('input[name=olives]').check()
             .should('have.value', 'on');
          cy.get('input[name=mushrooms]').should('not.be.checked');
          cy.get('input[name=mushrooms]').check()
                .should('have.value', 'on');
       })
       it('can select pepperoni, olives, mushrooms, and bacon', () => {
          cy.get('input[name=pepperoni]').should('not.be.checked');
          cy.get('input[name=pepperoni]').check()
             .should('have.value', 'on');
          cy.get('input[name=olives]').should('not.be.checked');
          cy.get('input[name=olives]').check()
             .should('have.value', 'on');
          cy.get('input[name=mushrooms]').should('not.be.checked');
          cy.get('input[name=mushrooms]').check()
             .should('be.checked');
          cy.get('input[name=bacon]').should('not.be.checked');
          cy.get('input[name=bacon]').check()
             .should('have.value', 'on');
       })
    })
    
    describe('Form should submit when proper things are filled', () =>{
       it('Submit button is disabled without Name and Size filled', () => {
          submitBtn().should('be.disabled');
          specialT().type('gluten free');
          cy.get('input[name=pepperoni]').check()
          cy.get('input[name=olives]').check()
          cy.get('input[name=mushrooms]').check()
          cy.get('input[name=bacon]').check()
          submitBtn().should('be.disabled');
       })
       it('Submit button becomes clickable when size and Name are filled', () => {
          nameInput().type('Tony Stark');
          submitBtn().should('be.disabled')
          sizeDrop().select('Small')
          submitBtn().should('not.be.disabled')
          sizeDrop().select('Large')
          submitBtn().should('not.be.disabled')
          sizeDrop().select('Medium')
          submitBtn().should('not.be.disabled')
       })
       it('all from Elements Submit', () => {
          nameInput().type('Danielle');
          cy.get('input[name=pepperoni]').check();
          cy.get('input[name=olives]').check();
          cy.get('input[name=mushrooms]').check();
          cy.get('input[name=bacon]').check();
          sizeDrop().select('Small')
          specialT().type('add bbq please');
          submitBtn().click();
          
          cy.contains('Danielle').should('exist')
          cy.contains('pepperoni').should('exist')
          cy.contains('olives').should('exist')
          cy.contains('bacon').should('exist')
          cy.contains('mushrooms').should('exist')
          cy.contains('small').should('exist')
          cy.contains('add bbq please').should('exist')
       })
    })
 })