import * as methods from "firebase/firestore";

import { fireDatabase } from "@/config/database";
import { iDriverDTO, iDriverRepository } from "@/interface/DriverInterface";
import { DriverStore } from "@/stores/DriverStore";

class DriverRepository implements iDriverRepository {
  public async findAll(): Promise<void> {
    const ref = methods.collection(fireDatabase, "Drivers");
    const snap = await methods.getDocs(ref);
    const docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as any as iDriverDTO[];
    await DriverStore().setAll(docs);
  }
  public async create(data: Omit<iDriverDTO, "id">): Promise<iDriverDTO> {
    return (await methods.addDoc(
      methods.collection(fireDatabase, "Drivers"),
      data
    )) as any as iDriverDTO;
  }

  public async update(data: iDriverDTO) {
    const t = methods.doc(fireDatabase, "Drivers", data.id);
    const resolve = { ...data } as any;
    delete resolve.id;
    return await methods.updateDoc(t, resolve);
  }

  public async destroy(data: { id: string }) {
    return await methods.deleteDoc(
      methods.doc(fireDatabase, "Drivers", data.id)
    );
  }
}

export default new DriverRepository();
