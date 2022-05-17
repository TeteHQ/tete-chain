
export default function handler(req, res){

  if (req.method === 'GET'){
    res.status(200).json()

} else if (req.method === 'POST'){
    const body = req.body

  console.log('body: ', body)

  const newPost = {

    nftId:body.id,
    nftTitle:body.title,
    value: body.value, 
    description: body.description,
    bgImage:body.bgImage,
    chainLogo:body.chainLogo    
   }

  res.status(201).json({Data:`${body.title} ${body.description}`,
    
   })}}