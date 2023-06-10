import * as methods from "firebase/firestore";

import { fireDatabase } from "@/config/database";
import { iVehicleDTO, iVehicleRepository } from "@/interface/VeichlesInterface";

import { VehicleStore } from "@/stores/VehicleStore";

class VehicleRepository implements iVehicleRepository {
  public async findAll(): Promise<void> {
    const ref = methods.collection(fireDatabase, "Vehicles");
    const snap = await methods.getDocs(ref);
    const docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as any as iVehicleDTO[];
    VehicleStore().setAll(docs);
  }
  public async create(data: Omit<iVehicleDTO, "id">): Promise<iVehicleDTO> {
    return (await methods.addDoc(
      methods.collection(fireDatabase, "Vehicles"),
      data
    )) as any as iVehicleDTO;
  }

  public async update(data: iVehicleDTO) {
    const t = methods.doc(fireDatabase, "Vehicles", data.id);
    const resolve = { ...data } as any;
    delete resolve.id;
    return await methods.updateDoc(t, resolve);
  }

  public async destroy(data: { id: string }) {
    return await methods.deleteDoc(
      methods.doc(fireDatabase, "Vehicles", data.id)
    );
  }
}

export default new VehicleRepository();
