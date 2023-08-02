//config supertest
const supertest = require('supertest') 
export const server = require("../index")
export const supertestInstance = supertest(server)

