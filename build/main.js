require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Truck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review__ = __webpack_require__(3);



const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const truckSchema = new Schema({
    name: { type: String },
    speciality: { type: String },
    price: { type: Number },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

const Truck = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Truck', truckSchema);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truck__ = __webpack_require__(2);



const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const ReviewSchema = new Schema({
    title: String,
    text: String,
    truck: { type: Schema.Types.ObjectId, ref: 'Truck' }
});

const Review = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Review', ReviewSchema);



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_truck__ = __webpack_require__(8);


const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const { PORT, url_DB } = process.env;




__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect(url_DB);
const db = __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('[MongoDB] Connected !');
});

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_2_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));

app.use('/food-truck', __WEBPACK_IMPORTED_MODULE_4__routes_truck__["a" /* truckRouter */]);
app.use('/', (req, res) => {
    res.send("Bien joué !");
});

app.listen(PORT, () => {
    console.log(`[APP running on port : ${PORT}]`);
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return truckRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_truck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_review__ = __webpack_require__(3);



const truckRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

truckRouter.get('/', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].find({}, (err, truck) => {
        if (err) res.send(err);
        res.send(truck);
    });
});

truckRouter.post('/add', (req, res) => {
    const newTruck = new __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */](req.body);
    newTruck.save((err, truck) => {
        if (err) res.send(err);
        res.json(truck);
        res.redirect('/food-truck/');
    });
});

truckRouter.get('/:id', (req, res) => {
    let _id = req.params.id;
    __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].findById({ _id }, (err, truck) => {
        if (err) res.send(err);
        res.json(truck);
    });
});

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
    __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].findById(req.params.id, (err, truck) => {
        if (err) res.send(err);
        Object.assign(truck, req.body).save((err, truck) => {
            if (err) res.send(err);
            res.json({ message: "Food Truck uploded !", truck });
        });
    });
});

truckRouter.delete('/:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].remove({ _id: req.params.id }, (err, truck) => {
        if (err) res.send(err);
        res.json({ message: "Food Truck deleted !", truck });
    });
});

truckRouter.post('/review/add/:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].findById(req.params.id, (err, truck) => {
        if (err) res.send(err);
        const newReview = new __WEBPACK_IMPORTED_MODULE_2__models_review__["a" /* Review */](req.body);
        newReview.save((err, review) => {
            if (err) res.send(err);
            truck.reviews.push(newReview);
            truck.save((err, review) => {
                if (err) res.send(err);
                res.json({ message: 'Add review !', review });
            });
        });
    });
});



/***/ })
/******/ ]);
//# sourceMappingURL=main.map