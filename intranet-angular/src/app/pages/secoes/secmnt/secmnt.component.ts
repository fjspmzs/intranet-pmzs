
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonBalloonComponent } from '../../../components/button-balloon/button-balloon.component';

@Component({
    selector: 'br-secmnt',
    standalone: true,
    imports: [ButtonBalloonComponent],
    template: `
    <h1>1ª Seção</h1>
    <br-button-balloon [items]="items"></br-button-balloon>
  `,
})
export class SecmntPageComponent implements OnInit {
    public items: any[] = [];

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.generateSubRoutesList();
    }

    private generateSubRoutesList(): void {
        // Find the route configuration for 'secmnt'
        const secmntRoute = this.router.config.find(route => route.path === 'secmnt');
        if (secmntRoute && secmntRoute.children) {
            this.items = secmntRoute.children.map(child => ({
                name: child.path,
                href: `secmnt/${child.path}`
            }));
        }
    }
}
