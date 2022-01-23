import { Suplier } from "./suplier.model";

export interface Product
{
  id?:Number;
  name:string;
  price:Number;
  discount?:Number;
  imageUrl:string
  suplier?:Suplier;
  
}
