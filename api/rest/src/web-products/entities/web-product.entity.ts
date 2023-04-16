export class WebProduct {
    name:  string;
    slug: string;
    description: string;
    type_id: string;
    price: string;
    shop_id: string;
    sale_price: string;
    language: string;
    min_price: string;
    max_price: string;
    sku: string;
    quantity: string;
    in_stock: string;
    is_taxable: string;
    shipping_class_id: string;
    status: string;
    product_type: string;
    unit: string;
    height: string;
    width: string;
    length: string;
    image: {
        id: string,
        original: string,
        thumbnail: string
    };
    video: any;
    gallery: any;
    deleted_at: string; 
    created_at: string; 
    updated_at: string; 
    author_id: string; 
    manufacturer_id: string; 
    is_digital: number; 
    is_external: number; 
    external_product_url: string; 
    external_product_button_text: string; 
    ratings: string; 
    total_reviews: number; 
    rating_count: any; 
    my_review: any;
    in_wishlist: boolean;
    blocked_dates: any;
    translated_languages: any;
    categories: any;
    shop: object;
    type: object;
    variations: any;
    metas: any;
    manufacturer: any;
    variation_options: any;
    tags: any;
    author: any;
    barcode_no: string;
    supplier_name: string;
    design_number: number;
}