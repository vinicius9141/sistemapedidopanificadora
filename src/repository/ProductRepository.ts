import * as methods from "firebase/firestore";
import { ProductStore } from "@stores/ProductStore";

import { fireDatabase } from "@/config/database";

class ProductRepository {
  public async findAll() {
    const ref = methods.collection(fireDatabase, "Products");
    const snap = await methods.getDocs(ref);
    const docs = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as { name: string; id: string }[];
    ProductStore().setAll(docs);
  }

  public async create(data: { name: string }) {
    return await methods.addDoc(
      methods.collection(fireDatabase, "Products"),
      data
    );
  }
}

export default new ProductRepository();
