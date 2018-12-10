function lookUpProfileFonctionnelIf(name, prop) {
    let contactObj = contacts.filter(contact => contact.firstName === name)[0];
    
        if (!contactObj) {
            return "No such contact";
        }
        if (!contactObj.hasOwnProperty(prop)) {
            return "No such property";
        }
        return contactObj[prop];
    }
    
    function lookUpProfileFonctionnelTernaire(name, prop) {
        let contactObj = contacts.filter(contact => contact.firstName === name)[0];
    
        return (!contactObj)
            ? "No such contact"
            : (!contactObj.hasOwnProperty(prop)
                ? "No such property"
                : contactObj[prop]
            )
    
    }
    
    function lookUpProfileFonctionnelTernaireAndOr(name, prop) {
        let contactObj = contacts.filter(contact => contact.firstName === name)[0];
    
        return !contactObj && "No such contact"
            || !contactObj.hasOwnProperty(prop) && "No such property"
            || contactObj[prop]
    }