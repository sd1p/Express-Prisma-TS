import { supertestInstance,server } from "./_testUtils"

afterEach(done => { 
    server.close() 
    done()
})

describe("Testing server",()=>{
    it('GET "/" Testing if server is running', async () => {
        const res = await supertestInstance.get('/')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({"message":"hey there"})
    })
})

