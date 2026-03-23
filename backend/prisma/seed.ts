import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

// Initialize the native Postgres connection pool and adapter
const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Cleaning up existing data...');
  // Delete in order to avoid foreign key constraint errors
  await prisma.saleRecord.deleteMany();
  await prisma.recipeIngredient.deleteMany();
  await prisma.supplierPrice.deleteMany();
  await prisma.menuItem.deleteMany();
  await prisma.inventoryItem.deleteMany();
  await prisma.supplier.deleteMany();

  console.log('Seeding suppliers...');
  const meatSupplier = await prisma.supplier.create({
    data: { name: 'Fresh Meat Supply Co.', phone: '91234567', items: ['Chicken', 'Pork'] },
  });
  const vegSupplier = await prisma.supplier.create({
    data: { name: 'Green Market Veggies', phone: '98765432', items: ['Bok Choy', 'Garlic', 'Chili'] },
  });
  const dryGoodsSupplier = await prisma.supplier.create({
    data: { name: 'Ah Seng Dry Goods', phone: '99998888', items: ['Rice', 'Noodles', 'Soy Sauce'] },
  });

  console.log('Seeding inventory items...');
  const chicken = await prisma.inventoryItem.create({
    data: { name: 'Whole Chicken', category: 'Meat', quantity: 50, unit: 'kg', minQuantity: 15, supplier: meatSupplier.name, targetPrice: 4.5 },
  });
  const rice = await prisma.inventoryItem.create({
    data: { name: 'Jasmine Rice', category: 'Rice', quantity: 100, unit: 'kg', minQuantity: 25, supplier: dryGoodsSupplier.name, targetPrice: 1.2 },
  });
  const noodles = await prisma.inventoryItem.create({
    data: { name: 'Yellow Noodles', category: 'Noodles', quantity: 20, unit: 'kg', minQuantity: 5, supplier: dryGoodsSupplier.name, targetPrice: 2.0 },
  });
  const bokChoy = await prisma.inventoryItem.create({
    data: { name: 'Bok Choy', category: 'Vegetables', quantity: 10, unit: 'kg', minQuantity: 3, supplier: vegSupplier.name, targetPrice: 3.0 },
  });
  const soySauce = await prisma.inventoryItem.create({
    data: { name: 'Dark Soy Sauce', category: 'Sauces', quantity: 5, unit: 'L', minQuantity: 1, supplier: dryGoodsSupplier.name, targetPrice: 5.5 },
  });

  console.log('Seeding supplier prices...');
  await prisma.supplierPrice.createMany({
    data: [
      { supplierId: meatSupplier.id, supplierName: meatSupplier.name, inventoryItemId: chicken.id, price: 4.5 },
      { supplierId: dryGoodsSupplier.id, supplierName: dryGoodsSupplier.name, inventoryItemId: rice.id, price: 1.2 },
      { supplierId: vegSupplier.id, supplierName: vegSupplier.name, inventoryItemId: bokChoy.id, price: 3.0 },
    ],
  });

  console.log('Seeding menu items...');
  const chickenRice = await prisma.menuItem.create({
    data: { name: 'Hainanese Chicken Rice', price: 4.5, category: 'Rice Dishes' },
  });
  const chickenNoodles = await prisma.menuItem.create({
    data: { name: 'Chicken Noodle Soup', price: 4.0, category: 'Noodle Dishes' },
  });

  console.log('Seeding recipe ingredients...');
  // Chicken Rice Recipe
  await prisma.recipeIngredient.createMany({
    data: [
      { menuItemId: chickenRice.id, inventoryItemId: chicken.id, inventoryItemName: chicken.name, quantity: 0.2, unit: 'kg' },
      { menuItemId: chickenRice.id, inventoryItemId: rice.id, inventoryItemName: rice.name, quantity: 0.15, unit: 'kg' },
      { menuItemId: chickenRice.id, inventoryItemId: soySauce.id, inventoryItemName: soySauce.name, quantity: 0.01, unit: 'L' },
    ],
  });

  // Chicken Noodles Recipe
  await prisma.recipeIngredient.createMany({
    data: [
      { menuItemId: chickenNoodles.id, inventoryItemId: chicken.id, inventoryItemName: chicken.name, quantity: 0.15, unit: 'kg' },
      { menuItemId: chickenNoodles.id, inventoryItemId: noodles.id, inventoryItemName: noodles.name, quantity: 0.2, unit: 'kg' },
      { menuItemId: chickenNoodles.id, inventoryItemId: bokChoy.id, inventoryItemName: bokChoy.name, quantity: 0.05, unit: 'kg' },
    ],
  });

  console.log('Generating 4 weeks of historical sales data...');
  const menuItems = await prisma.menuItem.findMany();
  const today = new Date();
  let totalSalesCreated = 0;

  for (let daysAgo = 28; daysAgo >= 0; daysAgo--) {
    const targetDate = new Date();
    targetDate.setDate(today.getDate() - daysAgo);

    const dailyOrdersCount = Math.floor(Math.random() * 25) + 15;

    for (let i = 0; i < dailyOrdersCount; i++) {
      const randomDish = menuItems[Math.floor(Math.random() * menuItems.length)];
      const quantity = Math.floor(Math.random() * 4) + 1;

      const saleTime = new Date(targetDate);
      saleTime.setHours(10 + Math.floor(Math.random() * 11), Math.floor(Math.random() * 60), 0, 0);

      await prisma.saleRecord.create({
        data: {
          menuItemId: randomDish.id,
          menuItemName: randomDish.name,
          quantity: quantity,
          timestamp: saleTime,
        }
      });
      
      totalSalesCreated++;
    }
  }

  console.log(`✅ Success! Seeded base data and generated ${totalSalesCreated} historical sale records.`);
}

main()
  .catch((e) => {
    console.error('Failed to seed database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });