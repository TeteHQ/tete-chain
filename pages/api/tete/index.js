import { tetes } from "../../../data/tetes"

export default function handler(req, res){

  if (req.method === 'GET'){
    res.status(200).json(tetes)

} else if (req.method === 'POST'){
    const body = req.body

  console.log('body: ', body)

  const newTete = {

    id: body.id,
    isLive: body.isLive,
    placedBets: body.placedBets,
    league: body.league,
    date: body.date,
    time: body.time,
    item: body.item    
   }

  res.status(201).json({Data:`${body.item} ${body.isLive}`,
    
   })}}