export interface IDeleteDialog {
    name: string
    onSave: (name: string) => void
    onCancel: () => void
  }