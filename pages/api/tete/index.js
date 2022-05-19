import { tetes } from "../../../data/tetes"

export default function handler(req, res){

  if (req.method === 'GET'){
    res.status(200).json(tetes)

} }