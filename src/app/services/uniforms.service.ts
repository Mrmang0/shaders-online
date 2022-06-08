import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { UniformFormData, UniformState, UniformType } from '../types/uniforms';


@Injectable({
  providedIn: 'root'
})
export class UniformsService {

  private typeFunctionMappings: { [key in UniformType]: (x: string) => any } = {
    float: this.getFloatValue,
    texture_file: this.getTextureByFile,
    texture_url: this.getTextureByUrl
  }

  constructor() { }

  public buildUniform(formData: UniformFormData[]) {
    console.log(formData);

    const state: UniformState = {};

    formData.forEach(x => {

      if (!x.type) return;

      const value = this.typeFunctionMappings[x.type](x.value);
      state[x.name] = {
        value: value,
        key: x.name
      };
    });

    console.log(state);
    return state;
  }

  private getFloatValue(value: string) {
    if (!value) return null;
    return Number.parseFloat(value)
  }

  private getTextureByFile(value: string) {

  }

  private getTextureByUrl(value: string) {
    const loader = new THREE.TextureLoader();

    const texture = loader.load(value);
    return texture;
  }
}
