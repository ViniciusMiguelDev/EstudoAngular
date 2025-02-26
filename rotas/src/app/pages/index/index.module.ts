import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TitleComponent }, // Define que o IndexComponent será renderizado na rota '/'
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Configura as rotas dentro do módulo
  ],
  declarations: [], // Se for standalone, não precisa de declarations
  exports: [RouterModule], // Exporta as rotas
})
export class IndexModule {}
