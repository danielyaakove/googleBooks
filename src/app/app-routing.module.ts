import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from "./Components/login/login.component";
import { SearchComponent } from "./Components/search/search.component";
import { FavoritesComponent } from "./Components/favorites/favorites.component";
import { BookDetailsComponent } from "./Components/book-details/book-details.component";
import { AuthGuard } from "./sherd/auth.guard";

//, canActivate: [AuthGuard]
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "search",
    component: SearchComponent
  },
  { path: "favorite", component: FavoritesComponent },
  {
    path: "details",
    component: BookDetailsComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
