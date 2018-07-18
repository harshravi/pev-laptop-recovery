import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AcountsService } from '../accounts.service'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(public loggingService: LoggingService,
    public accountsService: AcountsService) { }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdate.emit(status);
  }
}
