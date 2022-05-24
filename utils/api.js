import { Client } from "redis-omx";

export const redis = {
    _client: null,
    async client() {
        if (!this._client) {
            this._client = await new Client().open(process.env.REDIS_URI);
        }
        return this._client;
    },
    async close() {
        if (this._client) {
            await this._client.close();
            this._client = null;
        }
    },
    async repo(schema) {
        return await this.client().then((client) =>
            client.fetchRepository(schema)
        );
    },
    async create(schema, data) {
        return await this.repo(schema)
            .then(async (repo) => {
                const entity = repo.createEntity(data);
                const id = await repo.save(entity);
                if (data?.expire > 0) await repo.expire(id, data.expire);
                return id;
            })
            .catch(() => 0);
    },
    async find(schema, id) {
        return await this.repo(schema)
            .then(async (repo) => await repo.fetch(id))
            .catch((err) => {});
    },
    async remove(schema, id) {
        return await this.repo(schema).then(
            async (repo) => await repo.remove(id)
        );
    },
};
