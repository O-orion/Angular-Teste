import { Injectable } from "@angular/core";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class UniqueIdService{

  //gerador de ids
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWidthPrefix(prefix: string): string{
    if(!prefix){
      throw new Error('Informe um prefixo, por-favor, fique com Deus! :)');

    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds ++;
    return `${prefix}-${uniqueId}`

  }

  private generateUniqueId(): string{
    return uuidv4
  }

  public getNumberOfGeneratedUniqueIds(): number{
    return this.numberOfGeneratedIds
  }
}


