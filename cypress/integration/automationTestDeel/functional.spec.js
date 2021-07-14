/// <reference types="cypress"/>

require('cypress-xpath');
import loc from '../../support/locators'
import '../../support/commandsContracts'

describe('Should test at a functional level', () => {
    before(function() {
        cy.fixture('../fixtures/userData').as('user').then(() => {
            cy.login(this.user.email, this.user.password);      
        })
    })

    it('Should create a new Contract', function() {
        cy.fixture('../fixtures/contractData').as('contract').then(() => {
            const todayDate = new Date();
            cy.xpath(loc.Home.xp_p_createContract).click();
            cy.xpath(loc.Contract.xp_h4_fixedRate).click();
           
            cy.fillContractGeneralInfo(
                this.contract.contractName, 
                this.contract.jobTitle, 
                this.contract.seniorityLevel, 
                this.contract.scopeOfWork
            );
    
            cy.fillContractPaymentDetails(
                this.contract.rate,
                this.contract.currency,
                this.contract.period
            );
    
            cy.fillContractDefineDates();
            cy.fillContractExtras(this.contract.specialClause);
            cy.fillContractCompliance(this.contract.contractorCountry, this.contract.contractorState);

            const contractStartDate = `${todayDate.toString().substr(4,3)} ${todayDate.getUTCDate() - 1}, ${todayDate.getFullYear()}`;
            
            cy.validateCreatedContract(
                contractStartDate, 
                this.contract.contractName,
                this.contract.jobTitle,
                this.contract.seniorityLevel,
                this.contract.symbolCurrency,
                this.contract.rate,
                this.contract.period.toLowerCase(),
                this.contract.contractorCountry,
                this.contract.contractorState,
                this.contract.specialClause
            );
        })
        
    })
})