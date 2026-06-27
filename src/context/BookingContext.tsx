import { createContext, useContext, useState, ReactNode } from 'react';
import { rooms } from '../data';

export interface SearchData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string;
}

interface BookingContextType {
  searchData: SearchData;
  setSearchData: (data: SearchData) => void;
  updateSearchData: (data: Partial<SearchData>) => void;
  checkAvailability: (roomId: string, checkIn: string, checkOut: string) => boolean;
  getAvailableRooms: () => typeof rooms;
}

const defaultSearchData: SearchData = {
  checkIn: '',
  checkOut: '',
  adults: 2,
  children: 0,
  roomType: 'all',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [searchData, setSearchData] = useState<SearchData>(defaultSearchData);

  const updateSearchData = (data: Partial<SearchData>) => {
    setSearchData((prev) => ({ ...prev, ...data }));
  };

  // Mock availability logic:
  // Deterministically unavailable if the checkIn date day is a multiple of some number based on room.
  const checkAvailability = (roomId: string, checkIn: string, checkOut: string) => {
    if (!checkIn || !checkOut) return true;
    
    const checkInDate = new Date(checkIn);
    const day = checkInDate.getDate();
    
    // Simulate some rooms being booked
    if (roomId === 'deluxe' && day % 3 === 0) return false;
    if (roomId === 'executive' && day % 4 === 0) return false;
    if (roomId === 'family' && day % 5 === 0) return false;
    if (roomId === 'presidential' && day % 7 === 0) return false;
    if (roomId === 'penthouse' && day % 2 === 0) return false; // Penthouse is booked often
    
    return true;
  };

  const getAvailableRooms = () => {
    return rooms.filter((room) => {
      // 1. Check room type match
      if (searchData.roomType !== 'all' && room.id !== searchData.roomType) return false;
      
      // 2. Check capacity
      if (room.capacity < searchData.adults + searchData.children) return false;
      
      // 3. Check real-time date availability
      if (searchData.checkIn && searchData.checkOut) {
        if (!checkAvailability(room.id, searchData.checkIn, searchData.checkOut)) {
          return false;
        }
      }
      
      return true;
    });
  };

  return (
    <BookingContext.Provider value={{ searchData, setSearchData, updateSearchData, checkAvailability, getAvailableRooms }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
