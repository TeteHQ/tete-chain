import { redis } from "../../../utils/api";
import Pool from "../../../schemas/Pool";

export default async function handler({ query: { id } }, res) {
    const filtered = await redis.find(Pool, id);

    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({ message: `Nft : ${id} not found.` });
    }
}
