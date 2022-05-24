import { Entity, Schema } from "redis-omx";

class Pool extends Entity {
    constructor(schema) {
        super(schema);
    }
}

export default new Schema("Pool", Pool);
