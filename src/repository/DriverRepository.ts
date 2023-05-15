import * as methods from "firebase/firestore";

import { fireDatabase } from "@/config/database";
import { iDriverDTO, iDriverRepository } from "@/interface/DriverInterfaces";

class DriverRepository implements iDriverRepository {
  public async create(data: Omit<iDriverDTO, "id">): Promise<iDriverDTO> {
    return (await methods.addDoc(
      methods.collection(fireDatabase, "Drivers"),
      data
    )) as any as iDriverDTO;
  }
}

export default new DriverRepository();
