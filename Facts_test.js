const joi = require('joi');
const chai = require('chai');


const schemaFact = joi.object({
    status: joi.object({
        verified: joi.exist(),
        sentCount: joi.number()
    }),
    _id: joi.string(),
    user: joi.string(),
    text: joi.string(),
    type: joi.string(),
    deleted: joi.boolean(),
    createdAt: joi.string(),
    updatedAt: joi.string(),
    __v: joi.number(),
    source: joi.string(),
    used: joi.boolean()
})


Feature('Facts');

Scenario('Buscar um fato randômico',  async ({ I }) => {
    response = await I.sendGetRequest('')
    // Verificar se o código de status HTTP retornado é 200 OK.
    I.seeResponseCodeIs(200)
    // Verificar se a resposta da API é um JSON válido.
    I.seeResponseMatchesJsonSchema(schemaFact)
    // Verificar se o campo "text" contém um fato sobre gatos.
    text = response.data.text
    chai.assert.typeOf(text, 'string')
    // Verificar se o campo "createdAt" contém a data e hora corretas.
    dateCreatedAt = new Date(response.data.createdAt)
    chai.assert.instanceOf(dateCreatedAt, Date, 'createdAt não é uma instancia de Data')
    // Verificar se o campo "updatedAt" está vazio ou contém a data e hora corretas.
    I.seeResponseValidByCallback(({data})=>{
    chai.assert.isTrue(data.updatedAt == null || new Date (data.updatedAt) instanceof Date)})
});







