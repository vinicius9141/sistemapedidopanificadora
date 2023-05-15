import * as methods from "firebase/firestore";

import { fireDatabase } from "@/config/database";
import { iDriverDTO, iDriverRepository } from "@/interface/DriverInterfaces";
import { DriverStore } from "@/stores/DriverStore";

class DriverRepository implements iDriverRepository {
  public async findAll(): Promise<void> {
    const ref = methods.collection(fireDatabase, "Drivers");
    const snap = await methods.getDocs(ref);
    const docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as any as iDriverDTO[];
    DriverStore().setAll(docs);
  }
  public async create(data: Omit<iDriverDTO, "id">): Promise<iDriverDTO> {
    return (await methods.addDoc(
      methods.collection(fireDatabase, "Drivers"),
      data
    )) as any as iDriverDTO;
  }
}

export default new DriverRepository();
