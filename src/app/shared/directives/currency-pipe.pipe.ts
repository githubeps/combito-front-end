import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var clean = value.replace(/[^-0-9\.]/g, '');
    var negativeCheck = clean.split('-');
    var decimalCheck = clean.split('.');

    if (negativeCheck[1] != undefined) {
      negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
      clean = negativeCheck[0] + '-' + negativeCheck[1];
      if (negativeCheck[0].length > 0) {
        clean = negativeCheck[0];
      }

    }
    if (decimalCheck[1] != undefined) {
      decimalCheck[1] = decimalCheck[1].slice(0, 2);
      clean = decimalCheck[0] + '.' + decimalCheck[1];
    }

    return clean;
  }

  parse(value: string, fractionSize: number = 2): string {

    var clean = value.replace(/[^-0-9\.]/g, '');
    var negativeCheck = clean.split('-');
    var decimalCheck = clean.split('.');

    if (negativeCheck[1] != undefined) {
      negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
      clean = negativeCheck[0] + '-' + negativeCheck[1];
      if (negativeCheck[0].length > 0) {
        clean = negativeCheck[0];
      }

    }
    if (decimalCheck[1] != undefined) {
 
      
      decimalCheck[1] = decimalCheck[1].slice(0, 2);
      clean = decimalCheck[0] + '.' + decimalCheck[1];
    }

    return clean;
  }

parseOnBlur(value: string, fractionSize: number = 2): string {

    var clean = value.replace(/[^-0-9\.]/g, '');
    var negativeCheck = clean.split('-');
    var decimalCheck = clean.split('.');

    if (negativeCheck[1] != undefined) {
      negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
      clean = negativeCheck[0] + '-' + negativeCheck[1];
      if (negativeCheck[0].length > 0) {
        clean = negativeCheck[0];
      }

    }
    if (decimalCheck[1] != undefined) {
       
        decimalCheck[1] =this.pad(decimalCheck[1],2,0);
      
      decimalCheck[1] = decimalCheck[1].slice(0, 2);
      clean = decimalCheck[0] + '.' + decimalCheck[1];
    }

   if (decimalCheck[1] == undefined) {
   
      clean = decimalCheck[0] + '.00' ;
    }    
    return clean;
  }  
 
  pad(input, length, padding) {
    var str = input + "";
    return (length <= str.length) ? str : this.pad(str + padding, length, padding);

  }

}
