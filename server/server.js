require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const db = require("./db"); // it knows to look for an index.js file

app.use(express.json());

app.use(cors());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

    try {
        const results = await db.query("select * from restaurants");
        
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
    
            },
            
        });

    } catch (err) {
        console.log(err);
    }
    

    
    
}); 

// get a restaurant 
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id);

    try {
        const results = await db.query("select * from restaurants where id = $1", [req.params.id]);
        
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        });

    } catch (err) {
        console.log(err);
    }

    
});

// create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name,
        req.body.location, req.body.price_range]);
        console.log(results);

        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
    
});

// updtae a restaurant
app.put("/api/v1/restaurants/:id", async (req,res) =>{
  
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id]);

        

        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        });

    } catch (err) {
        console.log(err);
    }

    
});

// delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {

    try { 
        const results = await db.query("DELETE FROM restaurants where id = $1", [req.params.id]);

        res.status(204).json({
            status: "success",
            
        });

    }catch (err) {
        console.log(err);
    }
    
});
const port  = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);

});

