import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaChartComponent } from './area-chart/area-chart.component';
import { ShapeChartComponent } from './shape-chart/shape-chart.component';
import { ReactChartComponent } from './react-chart/react-chart.component';
import { ReactAvatarComponent } from './react-avatar/react-avatar.component';
import { InterpolateChartComponent } from './interpolate-chart/interpolate-chart.component';
import { SigninComponent } from './signin/signin.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/area-chart',
        pathMatch: 'full'
    },
    {
        path: 'area-chart',
        component: AreaChartComponent
    },
    {
        path: 'shape-chart',
        component: ShapeChartComponent
    },
    {
        path: 'react-chart',
        component: ReactChartComponent
    },
    {
        path: 'interpolate-chart',
        component: InterpolateChartComponent
    },
    {
        path: 'react-avatar',
        component: ReactAvatarComponent
    },
    {
        path: 'app-signin',
        component: SigninComponent
    },
    {
        path: 'github-profile',
        component: GithubProfileComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AreaChartComponent];
