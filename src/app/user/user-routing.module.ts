import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './../user/components/login/login.component';
import { SignInComponent } from './../user/components/sign-in/sign-in.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'signIn',
        component: SignInComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {}
