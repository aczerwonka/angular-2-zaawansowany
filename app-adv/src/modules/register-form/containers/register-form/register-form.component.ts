import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  config$: any;

  constructor(private registerService: RegisterService) {
    this.config$ = this.registerService.getConfig().pipe(
      map((resp) => {
        const data = [{
          "type": "input",
          "name": "email"
        }, ...resp.data];
        return data;
      })
    );
  }

  ngOnInit() {
  }

}
