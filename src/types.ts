interface Brand {
  externalId: string;
  slug: string;
  name: string;
  brandImage: {
    url: string;
    altText: string;
  };
}

interface Category {
  externalId: string;
  slug: string;
  name: string;
  isDefault: boolean;
  ancestors: Array<{
    name: string;
    slug: string;
  }>;
}

interface Image {
  externalId: string;
  url: string;
  priority: number;
  isDefault: boolean;
  attributes: {
    [key: string]: any;
  };
}

export interface Price {
  currencyCode: string;
  priceIncTax: number;
  priceExcTax: number;
  isOnPromotion: boolean;
  monthlyFinanceEstimate: number;
  wasPriceExcTax: number;
  wasPriceIncTax: String;
}

interface StockStatus {
  status: string;
}

interface Attributes {
  isApproved: boolean;
  isShownOnTv: boolean;
  isBestSeller: boolean;
  isFreeWaste: boolean;
  isPremium: boolean;
  [key: string]: any;
}

export interface ProductType {
  id: string;
  legacyId: string;
  legacyVariantId: string;
  cultureCode: string;
  isDefaultVariant: boolean;
  attributes: Attributes;
  averageRating: number;
  brand: Brand;
  defaultCategory: Category;
  image: Image;
  price: Price;
  productName: string;
  questionsCount: number;
  reviewsCount: number;
  score: number;
  sku: string;
  slug: string;
  stockStatus: StockStatus;
}

export interface ListingCardProps {
  productName: string;
  price: Price;
  image: Image;
  score: number;
  cultureCode: string;
  reviewsCount: number;
  isBestSeller: boolean;
  brandImage: string;
}

export type Option = {
  value: string | number;
  displayValue: string;
  count: number;
  identifier: string;
};

export type Facet = {
  identifier: string;
  displayName: string;
  priority: number;
  options: Option[];
  facetType: number;
};
