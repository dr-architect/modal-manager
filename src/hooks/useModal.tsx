import { currentModal } from "../components/modal-manager/current-modal";
import { Modals } from "../components/modal-manager/modals-config";

export const useModal = <P,>(name: Modals) => {
 return {
  open: (props: P) => {
   currentModal.set({name, props: props})
  },
  close: () => {
   currentModal.set(null)
  },
 }
}