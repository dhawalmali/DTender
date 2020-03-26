import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';

import * as M from '../../../node_modules/materialize-css/dist/js/materialize';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tenders: any;
  details = {
    0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''
  };

  isLoadingTenders: boolean = false;
  isLoadingDetails: boolean = false;
  constructor(private blockchainService: BlockchainService) {

  }

  ngOnInit() {
    this.loadTenders();
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, {});
  }

  async loadTenders() {
    this.isLoadingTenders = true;
    this.tenders = await this.blockchainService.getTenders();
    this.isLoadingTenders = false;
  }

  async loadTenderDetails(address: string) {
    this.isLoadingDetails = true;
    this.details = await this.blockchainService.getTenderDetails(address)
    this.details[4] = new Date(parseInt(this.details[4]) * 1000).toDateString();
    this.details[5] = new Date(parseInt(this.details[5]) * 1000).toDateString();
    this.isLoadingDetails = false;
  }

}
