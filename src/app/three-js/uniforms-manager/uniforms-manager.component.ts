import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { UniformFormData, UniformState, UniformType } from 'src/app/types/uniforms';
import { UniformsService } from 'src/app/services/uniforms.service';

@Component({
  selector: 'app-uniforms-manager',
  templateUrl: './uniforms-manager.component.html',
  styleUrls: ['./uniforms-manager.component.scss']
})
export class UniformsManagerComponent implements OnInit {

  form = this.fb.group({
    fields: this.fb.array([])
  });

  @Output() public uniformsChange = new EventEmitter<UniformState>();
  public $formChanges = this.form.valueChanges.subscribe(x => {
    this.uniformsChange.emit(this.uniformsService.buildUniform(this.form.get("fields")?.value as UniformFormData[]));
  })

  constructor(private fb: FormBuilder, private uniformsService: UniformsService) { }

  ngOnInit(): void {
  }

  get fields() {
    return this.form.controls["fields"] as FormArray
  }

  get fieldsControls() {
    return this.fields.controls as FormGroup[];
  }

  addField() {
    const fieldForm = this.fb.group({
      type: "",
      value: "",
      name: ""
    }, {
      validators: Validators.compose([
        Validators.required
      ])
    });

    this.fields.push(fieldForm);

  }

  deleteField(index: number) {
    this.fields.removeAt(index);
  }

  public isTexutureFileType(type: UniformType) {
    return type == "texture_file";
  }
}
