import { LoyaltyUser, adminPermissions } from './enums.js';
import { Price, Country } from './types';

export interface Review {
	name: string;
	stars: number;
	loyaltyUser: LoyaltyUser;
	date: string;
}

export interface User {
	permissions: adminPermissions;
	firstName: string;
	lastName: string;
	isReturning: boolean;
	age: number;
	stayedAt: string[];
}

export interface Property {
	image: string;
	title: string;
	price: Price;
	location: {
		firstLine: string;
		city: string;
		code: number | string;
		country: Country;
	};
	contact: [number, string];
	isAvailable: boolean;
}
