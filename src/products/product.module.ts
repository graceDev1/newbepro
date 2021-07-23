import { Module } from "@nestjs/common";

import { ProductsController } from "./products.controller";
import { ProductService } from "./product.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./schema/product.schema";

@Module({
    imports:[MongooseModule.forFeature([
        {
            name:'Product',
            schema: ProductSchema
        }
    ])],
    controllers:[ProductsController],
    providers: [ProductService]
})

export class ProductModule{}