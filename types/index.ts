
export enum PaymentStatus {
  CREATED = 'created',
  AWAITING_PAYMENT = 'awaiting_payment',
  PENDING_CONFIRMATION = 'pending_confirmation',
  SETTLED = 'settled',
  EXPIRED = 'expired',
  FAILED = 'failed'
}

export enum PaymentMethod {
  WALLET_SIGNING = 'wallet_signing',
  MANUAL_TRANSFER = 'manual_transfer'
}

export interface PaymentIntent {
  id: string;
  amount: number;
  tokenSymbol: string;
  tokenMint: string;
  method: PaymentMethod;
  status: PaymentStatus;
  destinationAddress: string;
  customerAddress?: string;
  txHash?: string;
  expiresAt: number;
  createdAt: number;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: number;
  lastUsedAt?: number;
}

export interface AnalyticsData {
  totalRevenue: number;
  transactionCount: number;
  settlementRate: number;
  history: { date: string; amount: number }[];
}
