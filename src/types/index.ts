

export type MenuItemI = {
    id: number;
    name: string;
    price: number;
};

export type OrderItem = MenuItemI & {
    cantidad: number;
};