import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
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
  const [restored, setRestored] = useState(false);

  // The booking search is remembered on this device (dates only while still in the future).
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('azure:search') || 'null') as Partial<SearchData> | null;
      if (saved) {
        const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
        const datesOk = typeof saved.checkIn === 'string' && saved.checkIn >= today && typeof saved.checkOut === 'string' && saved.checkOut > saved.checkIn;
        setSearchData((prev) => ({
          ...prev,
          ...(datesOk ? { checkIn: saved.checkIn, checkOut: saved.checkOut } : {}),
          adults: Number.isInteger(saved.adults) ? saved.adults! : prev.adults,
          children: Number.isInteger(saved.children) ? saved.children! : prev.children,
          roomType: typeof saved.roomType === 'string' && (saved.roomType === 'all' || rooms.some((r) => r.id === saved.roomType)) ? saved.roomType : prev.roomType,
        }));
      }
    } catch { /* storage unavailable or corrupt */ }
    setRestored(true);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try { localStorage.setItem('azure:search', JSON.stringify(searchData)); } catch { /* ignore */ }
  }, [restored, searchData]);

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
