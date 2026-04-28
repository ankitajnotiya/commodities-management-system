export interface Commodity {
  userId: number;
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  status: 'ACTIVE' | 'INACTIVE' | 'LOW_STOCK';
  imageUrl?: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
}
