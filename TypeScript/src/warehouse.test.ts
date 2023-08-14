import * as warehouse from './__fixtures__/warehouse.json';
import { findWarehouseBins } from './warehouse';

describe('findWarehouseBins', () => {
  it('finds bins in their aisles', () => {
    const bins = findWarehouseBins(warehouse, (bin: any): boolean => true);

    expect(bins).toEqual([
      {
        aisleId: "1",
        bin: {
          id: "1",
          quantity: 50,
          sku: "PROD01",
        },
      },
      {
        aisleId: "1",
        bin: {
          id: "2",
          quantity: 5,
          sku: "PROD02",
        },
      },
      {
        aisleId: "2",
        bin: {
          id: "16",
          quantity: 0,
          sku: "PROD03",
        },
      },
      {
        aisleId: "2",
        bin: {
          id: "17",
          quantity: 24,
          sku: "PROD03",
        },
      },
      {
        aisleId: "2",
        bin: {
          id: "18",
          quantity: 25,
          sku: "PROD03",
        },
      },
    ]);
  });

  it('filters bins', () => {
    const bins = findWarehouseBins(warehouse, (bin: any): boolean => bin.quantity > 24);

    expect(bins).toEqual([
      {
        aisleId: "1",
        bin: {
          id: "1",
          quantity: 50,
          sku: "PROD01",
        },
      },
      {
        aisleId: "2",
        bin: {
          id: "18",
          quantity: 25,
          sku: "PROD03",
        },
      },
    ]);
  });
});