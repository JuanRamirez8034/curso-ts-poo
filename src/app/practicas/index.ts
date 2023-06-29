import { Product } from "../models/product.model";
import { PrivateFecth } from "./Fetch/class/PrivateFetch";
import fetch from 'node-fetch';

const requestFecth = new PrivateFecth<Product>('https://api.escuelajs.co/api/v1/products');

(async()=>{

  // const response = await fetch('https://api.escuelajs.co/api/v1/products');
  // const body = await response.json();

  // console.log(body);

  const resp = await requestFecth.request('GET');

  if(!Array.isArray(resp))return;
  
  console.log('longitud respuesta -> ' + resp.length );

  const resp2 = requestFecth.localDelete(resp[0]);

  const length = requestFecth.getAllData().length;

  console.log('elemento eliminado', resp[0], 'nueva longitud ->', length);
  
  const find = requestFecth.find(requestFecth.getAllData()[0]);

  console.log('filtardo', find);
  
  
  
})();
