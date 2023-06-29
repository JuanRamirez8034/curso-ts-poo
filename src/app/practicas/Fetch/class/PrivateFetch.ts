import { Method, PrivateFecthInterface } from "../models/fetch.interface";
import fetch from "node-fetch";

export class PrivateFecth<TypeClass> implements PrivateFecthInterface {
  protected url: string;
  protected data:  TypeClass[] | null;

  constructor(url:string){
    this.url = url;
    this.data = null;
  }

  public getAllData(): Array<TypeClass> {
    if(this.data === null) return [];
    if(!Array.isArray(this.data))return [this.data];
    return this.data;
  }

  public async request(method: Method, body?:unknown):Promise<TypeClass | TypeClass[] | null> {
    const jsonString = JSON.stringify(body);
    let resp = await fetch(this.url, {method:method, body:jsonString});
    let data = await resp.json();
    
    this.data = data;

    if(!Array.isArray(this.data)){
      this.data = [data];
    }
    
    return [...this.data];
  }

  /**
   * encontrar un elemento
   * @param element 
   * @type TypeClass
   * @returns 
   */
  public find(element: TypeClass): TypeClass {
    
    if(this.data===null) throw new Error('Data is not initialized');

    if(Array.isArray(this.data)){
      const elTypeClass : TypeClass = this.data
      .reduce((elTyClss, count)=>{
        if(elTyClss === element){
          return elTyClss;
        }
        return count;
      });
      return elTypeClass;
    }

    return element;
  }

  /**
   * eliminar elementos del arreglo local en memoria
   * @param element 
   * @type TypeClass
   * @returns TypeClass | TypeClass[] | null 
   */
  public localDelete(element: TypeClass): TypeClass | TypeClass[] | null {

    if(this.data===null) throw new Error('Data is not initialized');
    
    if(Array.isArray(this.data)){
      this.data = this.data.filter(e => element !== e);
      this.data.length <= 0 ? null : this.data;
    }

    return this.data;
  }

  /**
   * Ordenar los datos de la peticion
   * @param order 
   * @type enum "ASC" | "DESC"
   * @returns TypeClass | TypeClass[] | null
   */
  public orderData(order: "ASC" | "DESC", index:unknown): TypeClass | TypeClass[] | null {
    throw new Error('errorooooo')
    // if(Array.isArray(this.data)){
    //   this.data.sort((eA, eB)=>{
    //     if(order==='ASC'){
    //       return eA[index] - eB[index];
    //     }

    //     return eB[index] - eA[index];
    //   })
    // }

    // if(this.data===null) throw new Error('Data is not initialized');

    // return this.data;
  }

}