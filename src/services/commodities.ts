import { Commodity } from '../types';

// Mock API service for commodities
export class CommoditiesService {
  private static instance: CommoditiesService;
  private commodities: Commodity[] = [];

  private constructor() {
    this.initializeMockData();
  }

  static getInstance(): CommoditiesService {
    if (!CommoditiesService.instance) {
      CommoditiesService.instance = new CommoditiesService();
    }
    return CommoditiesService.instance;
  }

  private initializeMockData() {
    this.commodities = [
      {
        userId: 1,
        id: 1,
        name: 'Laptop Computer',
        description: 'High-performance laptop for office work with 16GB RAM and 512GB SSD',
        category: 'Electronics',
        price: 899.99,
        stock: 15,
        status: 'ACTIVE',
        imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop'
      },
      {
        userId: 1,
        id: 2,
        name: 'Office Chair',
        description: 'Ergonomic office chair with lumbar support and adjustable height',
        category: 'Furniture',
        price: 249.99,
        stock: 8,
        status: 'ACTIVE',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop'
      },
      // Add more mock data as needed
    ];
  }

  async getAllCommodities(): Promise<Commodity[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.commodities]);
      }, 500);
    });
  }

  async getCommodityById(id: number): Promise<Commodity | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const commodity = this.commodities.find(c => c.id === id);
        resolve(commodity || null);
      }, 300);
    });
  }

  async createCommodity(commodity: Omit<Commodity, 'id' | 'userId'>): Promise<Commodity> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newCommodity: Commodity = {
          ...commodity,
          id: Math.max(...this.commodities.map(c => c.id)) + 1,
          userId: 1
        };
        this.commodities.push(newCommodity);
        resolve(newCommodity);
      }, 500);
    });
  }

  async updateCommodity(id: number, updates: Partial<Commodity>): Promise<Commodity | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.commodities.findIndex(c => c.id === id);
        if (index !== -1) {
          this.commodities[index] = { ...this.commodities[index], ...updates };
          resolve(this.commodities[index]);
        } else {
          resolve(null);
        }
      }, 500);
    });
  }

  async deleteCommodity(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.commodities.findIndex(c => c.id === id);
        if (index !== -1) {
          this.commodities.splice(index, 1);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  }

  async getCommoditiesByCategory(category: string): Promise<Commodity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = this.commodities.filter(c => c.category === category);
        resolve(filtered);
      }, 300);
    });
  }

  async getLowStockCommodities(): Promise<Commodity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowStock = this.commodities.filter(c => c.status === 'LOW_STOCK' || c.stock <= 5);
        resolve(lowStock);
      }, 300);
    });
  }

  async searchCommodities(query: string): Promise<Commodity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const searchResults = this.commodities.filter(c =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
        );
        resolve(searchResults);
      }, 300);
    });
  }
}
