import { Component } from '@angular/core';
import { LoggingService } from '../logging.service'
import { AcountsService } from '../accounts.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
    private accountsService: AcountsService) {
      this.accountsService.statusUpdate.subscribe(
        (status: string) => alert('New Sataus: '+ status)
      );
     }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

  }
}
