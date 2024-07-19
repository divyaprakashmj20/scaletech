import { Component, OnInit  } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  items: MenuItem[] | undefined;

  constructor(private router: Router){}

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.scrollTo('about-us-id')

            },
            {
                label: 'About US',
                icon: 'pi pi-users',
                command: () => this.scrollTo('about-us-id')

            },
            {
                label: 'Products',
                icon: 'fas fa-list',
                items: [
                    {
                        label: 'Auto Scale',
                        icon: 'fas fa-wrench',
                        command: () => this.scrollTo('autoscale-id')
                    },
                    {
                        label: 'Restaurant POS',
                        icon: 'fas fa-cutlery',
                        command: () => this.scrollTo('pos-id')
                    }

                    // {
                    //     label: 'Templates',
                    //     icon: 'pi pi-palette',
                    //     items: [
                    //         {
                    //             label: 'Apollo',
                    //             icon: 'pi pi-palette'
                    //         },
                    //         {
                    //             label: 'Ultima',
                    //             icon: 'pi pi-palette'
                    //         }
                    //     ]
                    // }
                ]
            },
            {
                label: 'Contact Us',
                icon: 'pi pi-phone',
                command: () => this.scrollTo('contact-id')
            },
        ]
    }


    scrollTo(sectionId: string) {
        this.router.navigate([], { fragment: sectionId }).then(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          });    }
}
