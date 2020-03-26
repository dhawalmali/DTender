import { Injectable } from '@angular/core';
import factory from '../../../ethereum/factory';
import web3 from '../../../ethereum/web3';
import * as Tender from '../../../ethereum/build/Tender.json';

@Injectable({
    providedIn: 'root'
})
export class BlockchainService {


    async getTenders() {
        const tenders = await factory.methods.getDeployedTenders().call();
        return tenders;
    }

    async getTenderDetails(address: string) {
        const tender = new web3.eth.Contract(
            JSON.parse(Tender.interface),
            address
        );
        const details = await tender.methods.getTenderDetails().call();
        return details;
    }

    async createTender(tenderTitle: string, industry: string, description: string, bidO: number, bidC: number) {
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createTender(tenderTitle, industry, description, bidO, bidC).send({
            from: accounts[0]
        });
    }

}