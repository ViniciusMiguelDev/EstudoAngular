import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CardComponent }, // Define que o IndexComponent será renderizado na rota '/'
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class PortfolioModule {}
