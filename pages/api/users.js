import middleware from "../../middlewares/middleware";
import nextConnect from "next-connect";

const handler = nextConnect();


handler
    .use(middleware)
    .get((req, res) => {
        req.db.collection("sessions").find().toArray()
               .then(users => {
                   return res.json({users})
               })
               .catch(err => res.status(500).json({message: "Internal Server Error"}))
    })

export default handler