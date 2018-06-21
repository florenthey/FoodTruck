import express from 'express';
import { Truck } from '../models/truck';
import { Review } from '../models/review';
const truckRouter = express.Router();

truckRouter.get('/', (req, res ) => {
    Truck.find({}, (err, truck) => {
        if (err) res.send(err)
            res.send(truck)
    })
})

truckRouter.post('/add', (req, res) => {
    const newTruck = new Truck(req.body)
    newTruck.save((err, truck) => {
        if (err) res.send(err)
            res.json(truck)
            res.redirect('/food-truck/')
    })
})

truckRouter.get('/:id', (req, res) => {
    let _id = req.params.id;
    Truck.findById({_id}, (err, truck) => {
        if (err) res.send(err)
            res.json(truck)
    })
})

// truckRouter.put('/:id', (req, res) => {
//     Truck.findById(req.params.id, (err, truck) => {
//         if (err) res.send(err)
//             truck.name = req.body.name;
//             truck.speciality = req.body.speciality;
//             truck.price = req.body.price;
//             truck.save((err) => {
//                 if (err) res.send(err)
//                 res.json({message : "Food Truck uploded !"})
//             })
//     })
// })

truckRouter.put('/:id', (req, res) => {
    Truck.findById(req.params.id, (err, truck) => {
        if (err) res.send(err)
            Object.assign(truck, req.body).save((err, truck) => {
                if (err) res.send(err)
                res.json({message : "Food Truck uploded !", truck})
            })
    })
})

truckRouter.delete('/:id', (req, res) => {
    Truck.remove({_id : req.params.id}, (err, truck) => {
        if (err) res.send(err)
            res.json({message : "Food Truck deleted !", truck})
    })
})

truckRouter.post('/review/add/:id', (req, res) => {
    Truck.findById(req.params.id, (err, truck) => {
        if (err) res.send(err)
            const newReview = new Review(req.body)
            newReview.save((err, review) => {
                if (err) res.send(err)
                    truck.reviews.push(newReview)
                    truck.save((err, review) => {
                        if (err) res.send(err)
                            res.json({message : 'Add review !', review})
                    })
            })
    })
})

export { truckRouter }