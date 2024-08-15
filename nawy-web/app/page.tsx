"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Apartment {
  id: number;
  address: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  squareFootage: number;
  hasBalcony: boolean;
  isAvailable: boolean;
}

export default function Home() {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/apartments`);
      setApartments(response.data);
    };
    fetchApartments();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Apartments List</h1>

      <div className="mb-4">
        <Link href="/create" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Create New Apartment
        </Link>
      </div>

      <ul className="space-y-4">
        {apartments.map((apartment: any) => (
          <li key={apartment.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{apartment.address}</h2>
            <Link href={`/apartments/${apartment.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
