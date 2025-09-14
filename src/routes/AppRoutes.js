import { lazy } from "react";

export const AppRoutes = [
  {
    path: "home",
    component: lazy(() => import("../views/Home")),
    loadable: true,
    uiName: "Home",
  },
  {
    path: "builder",
    component: lazy(() => import("../views/FormBuilder")),
    loadable: true,
    uiName: "Form Builder",
  },
  {
    path: "preview",
    component: lazy(() => import("../views/FormPreview")),
    loadable: true,
    uiName: "Form Preview",
  }
];
