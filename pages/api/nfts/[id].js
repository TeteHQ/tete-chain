import { nfts } from '../../../data/nfts'

export default function nftsHandler({ query: { id } }, res) {
  const filtered = nfts.filter((n) => n.id == id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Nft : ${id} not found.` })
  }
}
