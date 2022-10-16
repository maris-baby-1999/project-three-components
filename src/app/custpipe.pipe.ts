import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe'
})
export class CustpipePipe implements PipeTransform {

  transform(value:string,name:string):string {
    return 'firstname'+name
  }

}
