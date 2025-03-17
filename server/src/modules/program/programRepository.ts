import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  name: string;
};

class ProgramRepository {
  readById(parsedId: number) {
    throw new Error("Method not implemented.");
  }
  async readAll(): Promise<Program[]> {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM program");
    return rows as Program[];
  }
}

export default new ProgramRepository();
