import { useState } from "react";
import { ModalManager } from "./components/modal-manager/modal-manager";
import { useDeleteDialog } from "./hooks/modals/useDeleteDialog";

export function App() {
  const [name, setName] = useState("");
  const editEditModal = useDeleteDialog(name, setName);

  return (
    <>
      <h1>Frontend task</h1>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={editEditModal}>Open modal</button>
      <ModalManager/>
    </>
  )
}