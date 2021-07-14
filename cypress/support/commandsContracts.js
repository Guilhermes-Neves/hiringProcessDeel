import loc from './locators'

Cypress.Commands.add('fillContractGeneralInfo', (contractName, jobTitle, seniorityLevel, scopeOfWork) => {
    cy.get(loc.Contract.input_contractName).type(contractName);
    cy.get(loc.Contract.input_jobTitle).type(jobTitle);
    cy.xpath(loc.Contract.xp_input_seniority_level).type(`${seniorityLevel}{enter}`);
    cy.get(loc.Contract.text_area).type(scopeOfWork)
    cy.get(loc.Contract.input_startDate).click();
    cy.xpath(loc.Contract.xp_abbr_chosenDate).click();
    cy.xpath(loc.Contract.btn_next).click();
})

Cypress.Commands.add('fillContractPaymentDetails', (contractValue, currency) => {
    cy.get(loc.Contract.input_how_much).type(contractValue);
    cy.xpath(loc.Contract.xp_input_currency).type(`${currency}{enter}`);
    cy.xpath(loc.Contract.xp_select_period).click()
    cy.get(loc.Contract.options_periods).then($el => {
        cy.wrap($el)
            .type('Week{enter}')
    })

    cy.xpath(loc.Contract.btn_next).click();
})

Cypress.Commands.add('fillContractPaymentDetails', (contractValue, currency, period) => {
    cy.get(loc.Contract.input_how_much).type(contractValue);
    cy.xpath(loc.Contract.xp_input_currency).type(`${currency}{enter}`);
    cy.xpath(loc.Contract.xp_select_period).click()
    cy.get(loc.Contract.options_periods).then($el => {
        cy.wrap($el)
            .type(`${period}{enter}`)
    })

    cy.xpath(loc.Contract.btn_next).click();
})

Cypress.Commands.add('fillContractDefineDates', () => {
    //Here we can develop the test changing the first payment date if necesssary
    cy.xpath(loc.Contract.btn_next).click();
})

Cypress.Commands.add('fillContractExtras', (specialClause) => {
    cy.xpath(loc.Contract.xp_div_special_clause).click();
    cy.get(loc.Contract.text_area).type(specialClause);
    cy.xpath(loc.Contract.btn_next).click();
})

Cypress.Commands.add('fillContractCompliance', (country, state) => {
    cy.xpath(loc.Contract.xp_input_contractor_country).type(`${country}{enter}`);
    cy.xpath(loc.Contract.xp_input_contractor_state).type(`${state}{enter}`);
    cy.xpath(loc.Contract.xp_btn_create_contract).click();
})

Cypress.Commands.add('validateCreatedContract', (startDate, contractType, jobTitle, seniorityLevel, currencySymbol, rate, period, contractorCountry, contractorState, specialClause) => {
    cy.xpath(loc.CreatedContract.xp_btn_editDate).click()
    cy.get(loc.CreatedContract.contractStartDate).should('contains.text', startDate);
    cy.get(loc.CreatedContract.btn_close_edit_date).click();
    cy.xpath(loc.CreatedContract.contractFields('Contract type')).should('have.text', contractType);
    cy.xpath(loc.CreatedContract.contractFields('Job title')).should('have.text', jobTitle);
    cy.xpath(loc.CreatedContract.contractFields('Seniority level')).should('have.text', seniorityLevel);
    cy.xpath(loc.CreatedContract.contractFields('Rate')).should('contains.text', `${currencySymbol}${rate} Per ${period}`);
    cy.xpath(loc.CreatedContract.contractFields("Contractor's Country")).should('have.text', `${contractorState} (${contractorCountry})`);
    cy.xpath(loc.CreatedContract.contractSpecialClause).should('have.text', specialClause);
})