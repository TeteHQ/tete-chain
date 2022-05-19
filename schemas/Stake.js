import { Entity, Schema } from "redis-omx";

class Stake extends Entity {
    constructor(schema) {
        super(schema);
    }
}

export default new Schema("Stake", Stake);
