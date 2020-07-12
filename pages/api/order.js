import middleware from "../../middlewares/middleware";
import nextConnect from "next-connect";
import validateOrderData from "../../utils/validateOrderData";

const handler = nextConnect()


handler
    .use(middleware)
    .get((req, res) => {
        console.log("aldjalsdjald")
        req.db.collection("orders").find().toArray()
              .then(orders => {
                  return res.json({orders})
              })
              .catch(err => res.status(500).json({message: "Internal Server Error"}))
    })
    .post((req, res) => {
        let {isValid, message} = validateOrderData(req.body);
        if(!isValid){
            return res.status(400).json({message})
        }
        let {mobile, orderInfo, username, location} = req.body;
        req.db.collection("orders").insertOne({mobile, orderInfo, username, location})
              .then(() => {
                  return res.json({success: true})
              })
              .catch(err => res.status(500).json({message: "Internal Server Error"}))
    })

    export default handler