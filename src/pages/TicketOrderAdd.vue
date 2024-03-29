<template>
  <MainContainer>
    <FormContainer @form-submit="handleSubmit" :btn-send-value="btnValue">
      <div class="text-white text-lg pl-1 font-light text-left w-full mx-2">
        Produtos
      </div>
      <div class="bg-white w-full flex flex-wrap h-32 mx-2 overflow-y-auto">
        <div v-for="product in ProductsTemp()">
          <p
            class="border border-light border-slate-300 h-10 p-2 mt-1 flex items-center"
            v-if="product != null"
          >
            {{ product?.name || "" }} {{ ", qtd.: " + product?.qtd || "" }}
          </p>
        </div>
      </div>
      <Select
        label="Cliente"
        input-size="w-[47%]"
        :data="selectOptions.clients"
        v-on:get-value="handleSelectClient"
      />

      <Select
        label="Rota"
        input-size="w-[47%]"
        :data="selectOptions.Addresses"
        v-on:get-value="(e:any) => (data.address = e)"
      />
      <Select
        label="Veículo"
        input-size="w-[47%]"
        :data="selectOptions.vehicles"
        v-on:get-value="(e:any) => (data.vehicle = e)"
      />
      <Select
        label="Motorista"
        input-size="w-[47%]"
        :data="selectOptions.drivers"
        v-on:get-value="(e:any) => (data.driver = e)"
      />
      <Input
        v-on:get-value="(e:any) => (data.date = e)"
        :value="data.date"
        label="Data"
        input-size="w-[47%]"
        type="date"
      />
      <Input
        v-on:get-value="(e:any) => (data.hour = e)"
        :value="data.hour"
        label="Horário"
        input-size="w-[47%]"
        type="time"
      />
    </FormContainer>
    <Table>
      <div
        class="flex bg-white px-2"
        v-for="(dataProduct, indexProduct) in allProducts"
      >
        <div
          class="w-5/12 text-center border border-slate-300 overflow-x overflow-x-hidden"
        >
          {{ dataProduct.name }}
        </div>
        <div class="w-3/12 px-2 border border-slate-300">
          <input
            type="number"
            :value="0"
            class="w-full px-2 border-2 border-slate-800 rounded-lg"
            @input="(element:any) => {
              setProduct({ ...dataProduct, element: element.target, index: indexProduct })
            }"
            ref="productsInptEl"
            :data-name="dataProduct.name"
            :data-id="json.stringify({ ...dataProduct, index: indexProduct })"
          />
        </div>
        <div class="w-2/12 border border-slate-300">
          <button class="w-full bg-success shadow-md">Add</button>
        </div>
        <div class="w-2/12 border border-slate-300">
          <button class="w-full bg-yellow-300 shadow-md" v-if="dataProduct.qtd">
            Rm
          </button>
        </div>
      </div>
    </Table>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Table from "@components/Form/Table.vue";
import Input from "@components/Form/Input.vue";
import Select from "@components/Form/Select.vue";
import { onMounted, reactive, ref, watch } from "vue";
import { ProductStore } from "@stores/ProductStore";
import { iDriverDTO } from "@/interface/DriverInterface";
import { iClientDTO } from "@/interface/ClientInterface";
import { iVehicleDTO } from "@/interface/VeichlesInterface";
import { DriverStore } from "@stores/DriverStore";
import { iAddressDTO, iAddressForm } from "@/interface/AddressInterface";
import { VehicleStore } from "@/stores/VehicleStore";
import { AddressStore } from "@/stores/AddressStore";
import { ClientStore } from "@/stores/ClientStore";
import { TicketCreateService } from "@services/TicketOrderServices";
import { routerQuery } from "@/routes";
import { TicketOrderStore } from "@/stores/TicketOrderStore";
import { iTocketOrderDTO } from "@/interface/TicketOrderInterface";

const allProducts = ref<any[]>([]);

const id = ref<string>("");
const btnValue = ref<string>("");
const productsInptEl = ref<HTMLInputElement[]>();
const json = ref(JSON);

const setProduct = (e: any) => {
  const value = e.element.value;
  const hasProduct = data.products[e.id];
  if (value < 1) {
    e.element.value = 0;
    hasProduct.qtd = 0;
    return;
  }

  data.products[e.id] = { ...e, qtd: parseInt(value) };
};

type iData = {
  date: string;
  hour: string;
  driver: iDriverDTO | null;
  products: any;
  address: iAddressDTO | null;
  vehicle: iVehicleDTO | null;
  client: iClientDTO | null;
};

let data = reactive<iData>({
  date: "",
  hour: "",
  driver: null,
  products: {},
  address: null,
  vehicle: null,
  client: null,
});

const ProductsTemp = () => {
  return Object.values(data.products).map((item: any) => {
    if (item.qtd > 0) return item;
  });
};

const selectOptions = reactive<{
  clients: any[];
  drivers: iDriverDTO[];
  vehicles: iVehicleDTO[];
  products: any[];
  Addresses: iAddressForm[] | { id: string; name: string }[];
}>({
  clients: [{ id: "", name: "Selecione o Cliente" }],
  drivers: [],
  vehicles: [],
  products: [],
  Addresses: [{ id: "", name: "Selecione o Cliente" }],
});

const handleSelectClient = async (e: any) => {
  selectOptions.clients.forEach(async (client: any) => {
    if (client && client.id == e) {
      data.client = client;

      selectOptions.Addresses = await client.routeName?.addresses.map(
        (item: iAddressForm) => {
          const name = `${item.street} ${item.number} - ${item.destrict}`;
          const id = `${item.street} ${item.number} - ${item.destrict}`;
          return { ...item, name, id };
        }
      );
      data.address = selectOptions.Addresses[0] as any;
    }
  });
};

watch(
  () => [
    DriverStore().getAll,
    VehicleStore().getAll,
    ClientStore().getAll,
    ProductStore().product,
  ],
  () => {
    selectOptions.drivers = DriverStore().getAll;
    data.driver = selectOptions.drivers[0];
    selectOptions.vehicles = VehicleStore().getAll;
    data.vehicle = selectOptions.vehicles[0];

    selectOptions.clients = [selectOptions.clients[0], ...ClientStore().getAll];

    selectOptions.products = ProductStore().product;
  }
);

const setEditInProducts = (current: any) => {
  const poductsInput = document.querySelectorAll("input");
  for (let index = 0; index < poductsInput.length; index++) {
    const product = poductsInput[index] as any;

    if (product.dataset["name"] && product.dataset["name"] == current.name) {
      product.value = current.qtd;
      const d = JSON.parse(product.dataset["id"] as string);
      setProduct({ ...d, element: product });
    }
  }
};

onMounted(async () => {
  await ProductStore().findAll();
  allProducts.value = ProductStore().all.map((product) => {
    return { ...product, qtd: 0 };
  });
  await DriverStore().findAll();
  await ClientStore().findAll();
  await VehicleStore().findAll();
  await AddressStore().findAll();
  await ClientStore().findAll();
  const store = TicketOrderStore();

  if (routerQuery().type == "edit") {
    data = { ...store.getCurrent } as iTocketOrderDTO;
    id.value = store.getCurrent?.id as string;
    data.products = {} as any;
    const temp: any = store.getCurrent?.products;
    for (let i = 0; i < temp.length; i++) {
      const el = temp[i];
      setEditInProducts(el);
    }

    btnValue.value = "Editar";
  }
});

const handleSubmit = async () => {
  data.products = await Object.values(data.products).map((prod: any) => {
    delete prod.element;
    delete prod.index;
    return prod;
  });

  TicketCreateService(data as any);
};
</script>
