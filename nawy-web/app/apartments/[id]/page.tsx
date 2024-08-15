"use client";

import { Apartment } from "@/app/page";
import axios from "axios";
import { useEffect, useState } from "react";

const ApartmentPage = ({ params }: { params: { id: string } }) => {
  const [apartment, setApartment] = useState<Apartment | null>(null);

  useEffect(() => {
    if (params.id) {
      const fetchApartment = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/apartments/${params.id}`);
        setApartment(response.data);
      };
      fetchApartment();
    }
  }, [params.id]);

  if (!apartment) return <div>Loading...</div>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{apartment.address}</h1>
      <p>
        <strong>Bedrooms:</strong> {apartment.numberOfBedrooms}
      </p>
      <p>
        <strong>Bathrooms:</strong> {apartment.numberOfBathrooms}
      </p>
      <p>
        <strong>Square Footage:</strong> {apartment.squareFootage} sq ft
      </p>
      <p>
        <strong>Has Balcony:</strong> {apartment.hasBalcony ? "Yes" : "No"}
      </p>
      <p>
        <strong>Available:</strong> {apartment.isAvailable ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default ApartmentPage;
