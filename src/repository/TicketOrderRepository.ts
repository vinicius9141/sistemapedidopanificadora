import * as methods from "firebase/firestore";

import { fireDatabase } from "@/config/database";
import {
  iTocketOrderDTO,
  iTocketOrderRepository,
} from "@/interface/TicketOrderInterface";
import { TicketOrderStore } from "@/stores/TicketOrderStore";

class TicketOrderRepository implements iTocketOrderRepository {
  public async findAll(): Promise<void> {
    const ref = methods.collection(fireDatabase, "TicketOrder");
    const snap = await methods.getDocs(ref);
    const docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as any as iTocketOrderDTO[];
    TicketOrderStore().setAll(docs);
  }
  public async create(
    data: Omit<iTocketOrderDTO, "id">
  ): Promise<iTocketOrderDTO> {
    return (await methods.addDoc(
      methods.collection(fireDatabase, "TicketOrder"),
      data
    )) as any as iTocketOrderDTO;
  }
}

export default new TicketOrderRepository();
