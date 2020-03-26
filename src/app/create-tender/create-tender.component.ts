import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlockchainService } from '../blockchain.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.css']
})
export class CreateTenderComponent implements OnInit {

  isLinear: boolean = false;
  isLoading: boolean = false;

  constructor(private blockchainService: BlockchainService,private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
      });
    });
  }

  async onSubmit(form: NgForm){
    if(!form.valid)
      return;
    const tenderTitle = form.value.tenderTitle;
    const industry = form.value.industry;
    const description = form.value.description;
    const bidO = (new Date($('#bidO').val()).getTime())/1000;
    const bidC = (new Date($('#bidC').val()).getTime())/1000;

    // console.log(tenderTitle);
    // console.log(industry);
    // console.log(description);
    // console.log(bidO);
    // console.log(bidC);

    this.isLoading = true;
    await this.blockchainService.createTender(tenderTitle,industry,description,bidO,bidC);
    this.isLoading = false;
    this.router.navigate(['/tenders']);
  }

}
