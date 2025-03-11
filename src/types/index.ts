

export type MenuItemI = {
    id: number;
    name: string;
    price: number;
};

export type orderItem = MenuItemI & {
    cantidad: number;
};