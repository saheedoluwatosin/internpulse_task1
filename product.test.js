const request = require('supertest')
const app = require('../internpulse/index')



const productid = "67176a8fcdd7de44f9f39671"

it('should create a new product and return JSON',async ()=>{
        const response = await request(app)
        .post('/api/createproduct')
        .send({product_name:"Product1" ,
            product_category:"category3"
        });
        expect(response.statusCode).toBe(200);
         
    })




it('Should return all product',async ()=>{
    const response = await request(app)
    .get('/api/allproducts')
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/)
})

it('should return a product by ID',async ()=>{
    const response = await request(app)
    .get(`/api/product/${productid}`)
    expect(response.statusCode).toBe(200);
    
})


it('should retrieve a product by name',async ()=>{
    const response = await request(app)
    .get('/api/searchproduct')
    .query({ product_name: 'Product1' });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  
})

it('should update a product and return JSON', async () => {
    const response = await request(app)
    .put('/api/update') 
    .query({ product_name: 'Product1' }) 
    .send({ new_name: 'UpdatedProduct1' }); 
    expect(response.statusCode).toBe(200); 
    expect(response.headers['content-type']).toMatch(/json/);
  });



  it('should delete a product by name and return JSON', async () => {
    const response = await request(app)
    .delete('/api/deleteproductname') 
    .query({ product_name: 'UpdatedProduct1' }); 
    expect(response.statusCode).toBe(200); 
    expect(response.headers['content-type']).toMatch(/json/); 
  });



  it('should delete a product by ID',async ()=>{
        const response = await request(app)
        .delete(`/api/deleteproduct/${productid}`)
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/); 
  })