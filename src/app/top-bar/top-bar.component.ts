import { Component, OnInit } from '@angular/core';
import { LoggerService} from '../services/logger.service';

@Component({
selector: 'app-top-bar',
templateUrl: './top-bar.component.html',
styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

constructor(private logger:LoggerService) {
    this.logger.debug('dans le constructeur...');
}

ngOnInit(){

}
}