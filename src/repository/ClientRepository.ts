import * as methods from "firebase/firestore";

import { fireDatabase } from "@/config/database";
import { iClientDTO, iClientRepository } from "@/interface/ClientInterface";
import { ClientStore } from "@/stores/ClientStore";

class ClientRepository implements iClientRepository {
  public async findAll(): Promise<void> {
    const ref = methods.collection(fireDatabase, "Clients");
    const snap = await methods.getDocs(ref);
    const docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as any as iClientDTO[];
    ClientStore().setAll(docs);
  }
  public async create(data: Omit<iClientDTO, "id">): Promise<iClientDTO> {
    return (await methods.addDoc(
      methods.collection(fireDatabase, "Clients"),
      data
    )) as any as iClientDTO;
  }

  public async update(data: iClientDTO) {
    const t = methods.doc(fireDatabase, "Clients", data.id);
    const resolve = { ...data } as any;
    delete resolve.id;
    return await methods.updateDoc(t, resolve);
  }

  public async destroy(data: { id: string }) {
    return await methods.deleteDoc(
      methods.doc(fireDatabase, "Clients", data.id)
    );
  }
}

export default new ClientRepository();
