import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IProduct } from "./interface/product.interface";



@Injectable()
export class ProductService{

    constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>){}
    
    async insertProduct(title: string, description: string, price: number){
       const newProduct = new this.productModel({title, description, price});
       const result = await newProduct.save();
       return result;
    }

    async getProduct(){
        const products = await this.productModel.find();
        return products;
    }

    async getSingleProduct(prodId: string){
        const oneProduct = await this.productModel.findOne({_id: prodId});
        return oneProduct;
    }

    async updateOneProduct(id: string, title:string, description:string, price:number){
        const updatedProduct = await this.productModel.findByIdAndUpdate({_id:id}, {title, description, price});
        return updatedProduct;
    }


    async deleteOneProduct(id:string){
       const deletedProduct = await this.productModel.findByIdAndDelete({_id:id});
       return deletedProduct;
    }

   
}