import { Roommate } from "./roommate";

export interface Listing {
  listingId: string;
  address: string;
  rent: number;
  availability: string; // e.g. "2025-08-01"
  bedrooms: number;
  bathrooms: number;
  description: string;
  utilitiesIncluded: boolean;
  averageUtilities: number;
  roommates: Roommate[];
  sharedRoom: boolean;
  sharedRoommates?: number;
  catsAndDogsAllowed: boolean;
  washerDryer: boolean;
  offStreetParking: boolean;
  driveway: boolean;
  distanceFromCampus: string;
  photo: File | null;
  deleted: boolean;
  userId: string;
}