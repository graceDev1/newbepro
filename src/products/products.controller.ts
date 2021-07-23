import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductService){}

    @Post()
    addProduct(@Body() prodComplete: {title: string, description: string, price:number} ): any {
        const generatedId = this.productsService.insertProduct(prodComplete.title, prodComplete.description, prodComplete.price);
        return { id: generatedId}
    }

    @Get()
    getAllProduct(){
        return this.productsService.getProduct();
    }

    @Get(':id')
    getOneProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId);
    }

    @Put(':id')
    updateProduct(
        @Param('id') prodId: string, 
        @Body() completeProd: { title:string, description: string, price: number}){
            this.productsService.updateOneProduct(prodId,completeProd.title,completeProd.description,completeProd.price);
            return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string){
        this.productsService.deleteOneProduct(prodId);
        return null;
    }
}