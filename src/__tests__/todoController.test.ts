import { Prisma } from "@prisma/client"
import { supertestInstance,server } from "./_testUtils"

afterEach(done => { 
    server.close() 
    done()
})


describe("Testing TODO controller",()=>{

    it('GET "/api" Getting all the tasks ', async () => {
        const res = await supertestInstance.get('/api')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        console.log(res.body);
        
        expect(typeof res.body.message).toEqual("string")
        expect(Array.isArray(res.body.task) ).toEqual(true)
    })
    
    let id:number;

    it('POST "/api" creating task ', async () => {
        const res = await supertestInstance.post('/api').send({taskName:"test"})
        expect(res.status).toEqual(201)
        expect(res.type).toEqual(expect.stringContaining('json'))
        id=res.body.task.id;
        console.log(res.body);
    })

    it('GET "/api/:id" Getting task by id ', async () => {
        const res = await supertestInstance.get(`/api/${id}`)
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        console.log(res.body);
        
        expect(typeof res.body.message).toEqual("string")
        expect(res.body.task.id).toEqual(id)
    })


    it('PUT "/api" updating task ', async () => {
        const res = await supertestInstance.put(`/api/${id}`).send({status:true})
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        console.log(res.body);
    })

    it('PUT "/api" deleting task ', async () => {
        const res = await supertestInstance.delete(`/api/${id}`)
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        console.log(res.body);
    })
    
    
})

