import {nfts} from '../../../data/nfts'

export default function handler(req,res){
const {nftId} = req.query
const nft= nfts.find(nft=>nft.id === parseInt(nftId))
res.status(200).json(nft)
}