import Products from "../models/ProductModel.js";


export const getProduct = async (req, res) => {
    try {
        const product = await Products.findAll({
            attributes: ['id', 'imgBig', 'name', 'price', 'brand', 'cpu_model', 'graphic_card','ram_size', 'hard_disk', 'oc']
        });
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

export const getOneProduct = async (req, res) => {
    const productId = req.body.id
    try {
        const product = await Products.findOne({
            where: {
                id: productId
            },
            attributes: ['id', 'imgBig','img_1', 'img_2', 'name', 'price', 'brand', 'model', 'cpu_model', 'ram_size', 'graphic_card', 'graphic_card_ram', 'hard_disk', 'oc', 'product_description']
        });
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}
