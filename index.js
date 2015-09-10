var libxmljs = require('libxmljs');

function Qbxml() {
}

function validate(qbxml) {
    var qbxmlParsed,
        xsd,
        xsdParsed;

    qbxmlParsed = libxmljs.parseXmlString(qbxml);

    return qbxmlParsed.validate(xsdParsed);
}

module.exports = new Qbxml();
module.exports.validate = validate;

