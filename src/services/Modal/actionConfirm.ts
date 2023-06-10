import { ref } from "vue";

export const modalActive = ref<Function>(() => {});

export const setModalConfirm = (action: Function) => {
  modalActive.value = action;
};

export const modalConfirm = async (confirm: boolean, callback: Function) => {
  if (confirm) {
    try {
      callback();
      modalActive.value(false);
    } catch (error) {
      console.log(error);
    }
  } else modalActive.value(false);
};
