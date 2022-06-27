import {Router} from 'express';
import contactUser from '../entity/contacts.entity.js';

const router = Router();

router.get('/', async (req, res) => {
    console.log(await contactUser.findOne({name: 'Roman'}));
    res.render('home');
});

router.post('/createContact', async (req, res) => {
    await contactUser.create({
        name: "Pavel",
        number: 756757
    });
    console.log(await contactUser.count());
});

router.put('/updateContact', async (req, res) => {
    await contactUser.updateOne(
        {name: "Pavel"},
        {$set: {name: "Taras"}}
        );
    console.log("Updated contact")
});

router.delete('/deleteContact', async (req, res) => {
    await contactUser.deleteOne({name: "Taras"});
    console.log("Delete contact");
})




export default router;