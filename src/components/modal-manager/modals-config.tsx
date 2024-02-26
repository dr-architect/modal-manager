
import React, {LazyExoticComponent} from "react";

export enum Modals {
 DeleteDialog,
}

export const modalsConfig: Record<Modals, LazyExoticComponent<any>> = {
 [Modals.DeleteDialog]: React.lazy(() => import('../modals/DeleteDialog.tsx')),
}