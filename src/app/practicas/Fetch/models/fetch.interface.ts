export type Method
 = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface PrivateFecthInterface {
  request(method:Method, body?:unknown):Promise<unknown> | unknown;
  find(element:unknown):unknown;
  localDelete(element:unknown): unknown | null;
  orderData(order:'ASC'|'DESC', index:unknown): unknown| null;
  getAllData():unknown
}