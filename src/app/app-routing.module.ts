import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    redirectTo: "chats",
    pathMatch: 'full'
  },
  {
    path:"chats",
    loadChildren: () => import('./modulos/chats/chats.module').then(m => m.ChatsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
