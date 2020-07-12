import middleware from "../../middlewares/middleware";
import nextConnect from "next-connect";

const handler = nextConnect();


handler
    .use(middleware)
    .get((req, res) => {
        if(req.session.menuViews){
            req.session.menuViews += 1;
            return res.status(200).json({succes: true})
        }else{
            req.session.menuViews = 1;
            return res.status(200).json({succes: true})
        }
    })

export default handler 