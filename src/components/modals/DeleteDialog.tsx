import Portal from "../../portals/ModalPortal";
import { ModalBackDrop } from "../ui/modal/ModalBackDprop";
import { ModalBody } from "../ui/modal/ModalBody";
import { ModalContent } from "../ui/modal/ModalContent";
import { ModalFooter } from "../ui/modal/ModalFooter";
import { ModalHeader } from "../ui/modal/ModalHeader";
import {AlertSvg } from "../../assets/alert";
import { Button } from "../ui/buttons/Button";
import { useKeypress } from "../../hooks/useKeyPress";
import { IDeleteDialog } from "../../types/modal.interfaces";

const KEY = 'Escape';

interface DeleteDialogProps extends Omit<IDeleteDialog, 'name' | 'onSave'> {
    onSave: () => void;
}
const DeleteDialog: React.FC<DeleteDialogProps> = ({ onSave, onCancel }) => {
    useKeypress(KEY, onCancel, [onCancel]);

    return (
        <Portal>
            <ModalBackDrop>
                <ModalContent>
                    <ModalHeader>
                        <AlertSvg/>
                    </ModalHeader>
                    <ModalBody>
                        <span className="font-semibold text-lg pb-2">Delete subprocess 03A456 Picking smtg_long name</span>
                        <span className="font-normal text-sm">Are you sure you want to delete this subprocess? This action cannot be undone.</span>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="button"
                            title="Close"
                            handleClick={onCancel}
                            className={'btn-primary'}>
                            Close
                        </Button>
                        <Button
                            type="button"
                            title="Delete"
                            freeze
                            handleClick={onSave}
                            className={'btn-danger'}>
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </ModalBackDrop>
         </Portal >
        )
}

export default DeleteDialog