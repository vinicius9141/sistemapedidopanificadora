import * as methods from "firebase/firestore";

import { fireDatabase } from "@/config/database";
import { iAddressDTO, iEndressRepository } from "@/interface/AddressInterface";
import { AddressStore } from "@/stores/AddressStore";

class AddressRepository implements iEndressRepository {
  public async findAll(): Promise<void> {
    const ref = methods.collection(fireDatabase, "Addresses");
    const snap = await methods.getDocs(ref);
    const docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as any as iAddressDTO[];
    AddressStore().setAll(docs);
  }
  public async create(data: Omit<iAddressDTO, "id">): Promise<iAddressDTO> {
    return (await methods.addDoc(
      methods.collection(fireDatabase, "Addresses"),
      data
    )) as any as iAddressDTO;
  }
}

export default new AddressRepository();
