const locators = {
    Login: {
        input_email: '[name=email]',
        input_password: '[name=password]',
        btn_login: 'log in'
    },

    Home: {
        btn_CloseModal: '.button-close',
        loggedUser: '.user-tag-name',
        xp_p_createContract: '//p[text()="Create a Contract"]'
    },

    Contract: {
        xp_h4_fixedRate: '//h4[text()="Fixed Rate"]',
        input_contractName: '[name=name]',
        input_jobTitle: '[name=jobTitle]',
        xp_input_seniority_level: '//div[text()="Select..."]',
        text_area: '.textarea',
        input_startDate: '[name=effectiveDate]',
        xp_abbr_chosenDate: `//abbr[text()='${new Date().getUTCDate() - 1}']`,
        btn_next: '//div[contains(text(),"next")]',
        input_how_much: '[name=rate]',
        xp_input_currency: '//div[contains(text(), " - ")]',
        xp_select_period: '//div[text()="Month"]',
        options_periods: '.select__menu',
        xp_div_special_clause: '//div[text()="add a special clause"]',
        xp_input_contractor_country: '//div[contains(text(),"Select country")]',
        xp_input_contractor_state: '//div[contains(text(),"Choose a state")]',
        xp_btn_create_contract: '//div[contains(text(),"create contract")]'
    },

    CreatedContract: {
            contractStartDate: '.calendar-input',
            xp_btn_editDate: '//h4//button',
            btn_close_edit_date: '[theme=close-icon]',
            contractFields: field => `//div//h4[contains(.,"${field}")]/../..//div[contains(@class, 'flex')]//h4`,
            contractSpecialClause: '//div//h4[contains(.,"Special clause")]/../..//div[contains(@class, "pre-wrap")]'
    }
}

export default locators;