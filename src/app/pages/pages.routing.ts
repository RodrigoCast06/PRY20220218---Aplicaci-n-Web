import { NgModule} from '@angular/core'
import { Routes, RouterModule } from "@angular/router";
import { EquipoComponent } from "./equipo/equipo.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: EquipoComponent},
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})
export class PagesRoutingModule {}