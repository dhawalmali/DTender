import { Component } from '@angular/core';



@Component({
    selector: 'app-loading-spinner',
    template: `<div class="lds-ring" style="display: block;margin:0 auto;" ><div></div><div></div><div></div><div></div></div>`,
    styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {

}