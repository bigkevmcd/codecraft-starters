interface Product {
    id: string;
    name: string;
    size: number;
}

interface Bin {
    id: string;
    sku: string;
    quantity: number;
}

interface Aisle {
    id: string;
    bins: Bin[];
}

interface Warehouse {
    products: Product[];
    aisles: Aisle[];
}

interface AisleBin {
    aisleId: string;
    bin: Bin;
}

type binPredicate = (bin: Bin) => boolean;

/**
 * Find matching bins in this warehouse
 * @param warehouse 
 * @param pred 
 * @returns 
 */
export function findWarehouseBins(warehouse: Warehouse, pred: binPredicate): AisleBin[] {
    return warehouse.aisles.flatMap(
        (aisle: Aisle) => {
            return aisle.bins.filter(pred).map((bin: Bin) => {
                return {
                    aisleId: aisle.id,
                    bin: bin,
                };
            });
        });
};