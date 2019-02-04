import { Directive, Input, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { InputFieldComponent } from '../components/input-field/input-field.component';
import { SelectFieldComponent } from '../components/select-field/select-field.component';
import { ButtonComponent } from '../components/button/button.component';
import { FormGroup } from '@angular/forms';

const fields = {
  input: InputFieldComponent,
  select: SelectFieldComponent,
  button: ButtonComponent
}

@Directive({
  selector: '[appFormFieldGenerator]'
})
export class FormFieldGeneratorDirective implements OnInit {


  ngOnInit(): void {
    const c = fields[this.fieldConfig.type];
    const factory = this.factoryResolver.resolveComponentFactory(c);
    const component:any = this.container.createComponent(factory);

    component.instance.form = this.form;
    component.instance.config = this.fieldConfig;

  }


  @Input() fieldConfig;
  @Input() form: FormGroup;

  constructor(private container: ViewContainerRef, private factoryResolver: ComponentFactoryResolver) {

  }




}
