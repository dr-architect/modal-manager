import { Modals } from "../../components/modal-manager/modals-config";
import { IDeleteDialog } from "../../types/modal.interfaces";
import { useModal } from "../useModal";


export const useDeleteDialog = (name: string, setName: (name: string) => void) => {
  const editModal = useModal<IDeleteDialog>(Modals.DeleteDialog);
  
    return () => {
      editModal.open({
        name: name,
          onSave: (changedName: string) => {
            setName(changedName)
            editModal.close()
        },
        onCancel: editModal.close,
      })
    }
  }