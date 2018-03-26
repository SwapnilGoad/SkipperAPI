
//method:post path: /admin/agency 
module.exports.register = (event, context, callback) => {
    //Add new Agency Code goes here
};

//method: get path: /admin/agency/{id}
module.exports.get = (event, context, callback) => {
    //Get the details of a particular agency record code goes here
}

//method: get path: /admin/agencies
module.exports.list = (event, context, callback) => {
    //Get a list of all agencies goes here
};

//method: put path: /admin/agency/{id}
module.exports.update = (event, context, callback) => {
    //update a particular agency record goes here
}

//method post /admin/agency/{id}/contact
module.exports.addcontact = (event, context, callback) => {
    //add agency contact code goes here
}

//method put /admin/contact/{id}
module.exports.updatecontact = (event, context, callback) => {
    //update agency contact goes here
}

//method: update path: /admin/agency/{id}/contacts
module.exports.listcontacts = (event, context, callback) => {
    //update agency contacts goes here
}

//method: delete path: /admin/agency/{id}
module.exports.remove = (event, context, callback) => {
    //delete an agency code  goes here
    //we need to delete agency contact details too
}

//method delete /admin/agencies
module.exports.removeall = (event, context, callback) => {
    //delete all agencies code  goes here
    //we need to delete agency contact details too
}

//method delete /admin/agency/contact/{id}
module.exports.removecontact = (event, context, callback) => {
    //update agency contacts goes here
}

//method delete /admin/agency/{id}/contacts
module.exports.removeallcontacts = (event, context, callback) => {
    //delete all contacts for a particular agency
}


