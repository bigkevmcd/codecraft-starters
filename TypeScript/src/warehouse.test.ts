import * as warehouse from './__fixtures__/warehouse.json';

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

type binPredicate = (bin: Bin) => boolean;

function findWarehouseBins(warehouse: Warehouse, pred: binPredicate): any[] {
  return warehouse.aisles.flatMap((aisle: Aisle) => aisle.bins.filter(pred));
}

describe('findWarehouseBins', () => {
  it('accepts a warehouse', () => {

    const bins = findWarehouseBins(warehouse, (bin: any): boolean => true);

    expect(bins).toEqual([
      {
        id: "1",
        quantity: 50,
        sku: "PROD01",
      },
      {
        id: "2",
        quantity: 5,
        sku: "PROD02",
      },
      {
        id: "16",
        quantity: 0,
        sku: "PROD03",
      },
      {
        id: "17",
        quantity: 24,
        sku: "PROD03",
      },
      {
        id: "18",
        quantity: 25,
        sku: "PROD03",
      },
    ]);
  });
});