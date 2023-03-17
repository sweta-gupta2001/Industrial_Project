const express = require('express');

const userModels = require('../models/addonor');

const addModels = require('../models/hospital');

const patientModel = require('../models/patient');

const router = express.Router();

router.post('/Adddonor', (req, res) =>{
    const userobj = new userModels ({
        bname: req.body.bname,
        bgrp: req.body.bgrp,
        loc: req.body.loc,
        ph: req.body.ph
    });
    userobj.save()
    .then(inserteddocument => {
        res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
    })
    .catch(err => {
        res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        process.exit();
    })
})


router.get('/Adminviewall', (req, res) => {
    userModels.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

router.delete('/Deletedonor/:id', (req, res) => {
    userModels.findOneAndRemove({ "ph": req.params.id })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.empid);
            }
        }) 
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
        })
});

router.post('/searchdonor', (req, res) => {
    //console.log(req.body.loginemail)
    //console.log(req.body.emppass)
    userModels.find({ "bgrp": req.body.Searchdonorbgrp, "loc": req.body.Searchdonorloc })
        .then(getsearchdocument => {
            console.log(getsearchdocument)
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument)
            }
            else {
                res.status(404).send({ message: "NOT MATCHED" })
            }
        }) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD 


router.post('/Hospital', (req, res) => {
    //console.log(req.body.loginemail)
    //console.log(req.body.emppass)
    addModels.find({ "bname": req.body.Searchdonorbname, "dt": req.body.Searchdonordt })
        .then(getsearchdocument => {
            console.log(getsearchdocument)
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument)
            }
            else {
                res.status(404).send({ message: "NOT MATCHED" })
            }
        }) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD

router.post('/Patient', (req, res) => {
    //console.log(req.body.loginemail)
    //console.log(req.body.emppass)
    patientModel.find({ "dt": req.body.Searchdonordt})
        .then(getsearchdocument => {
            console.log(getsearchdocument)
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument)
            }
            else {
                res.status(404).send({ message: "NOT MATCHED" })
            }
        }) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD 


router.post('/Hospital1', (req, res) =>{
    //console.log(req.body.dt)
    const userobj = new addModels ({
        bname: req.body.bname,
        bgrp: req.body.bgrp,
        loc: req.body.loc,
        dt: req.body.dt,
    });
    userobj.save()
    .then(inserteddocument => {
        res.send(inserteddocument);
    })
    .catch(err => {
        res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        process.exit();
    })
})

router.post('/Patient1', (req, res) =>{
    const userobj = new patientModel ({
        bname: req.body.bname,
        bgrp: req.body.bgrp,
        loc: req.body.loc,
        ph: req.body.ph,
        dt: req.body.dt,
        qt: req.body.qt
    });
    userobj.save()
    .then(inserteddocument => {
        res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
    })
    .catch(err => {
        res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        process.exit();
    })
})


module.exports = router;