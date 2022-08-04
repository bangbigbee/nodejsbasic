import express from "express"
import homeController from '../controller/homecontroller';
let router = express.Router();

const initWebRoute = (app) => {
    //get muốn lấy thông tin về (Read in CRUD)
    //post muốn thêm thông tin vào dtb (Create in Create-Read-Update-Delete)
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser)
    router.get('/about', (_req, res) => {
        res.send(`I'm BigBee`)
    })
    return app.use('/', router)

}
export default initWebRoute;
//module.export = initWebRoute;