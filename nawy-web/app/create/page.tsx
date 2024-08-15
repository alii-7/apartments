"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateApartmentPage = () => {
  const [address, setAddress] = useState("");
  const [numberOfBedrooms, setNumberOfBedrooms] = useState(1);
  const [numberOfBathrooms, setNumberOfBathrooms] = useState(1);
  const [squareFootage, setSquareFootage] = useState(0);
  const [hasBalcony, setHasBalcony] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const apartmentData = {
      address,
      numberOfBedrooms,
      numberOfBathrooms,
      squareFootage,
      hasBalcony,
      isAvailable,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apartments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apartmentData),
      });

      if (!res.ok) {
        throw new Error("Failed to create apartment");
      }

      setSuccess("Apartment created successfully!");
      setError("");
      router.push("/"); // Redirect to the list page
    } catch (err: any) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Apartment</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 text-black block w-full border rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bedrooms</label>
          <input
            type="number"
            value={numberOfBedrooms}
            onChange={(e) => setNumberOfBedrooms(Number(e.target.value))}
            className="mt-1 text-black block w-full border rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bathrooms</label>
          <input
            type="number"
            step="0.1"
            value={numberOfBathrooms}
            onChange={(e) => setNumberOfBathrooms(Number(e.target.value))}
            className="mt-1 text-black block w-full border rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Square Footage</label>
          <input
            type="number"
            value={squareFootage}
            onChange={(e) => setSquareFootage(Number(e.target.value))}
            className="mt-1 text-black block w-full border rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Has Balcony</label>
          <input
            type="checkbox"
            checked={hasBalcony}
            onChange={(e) => setHasBalcony(e.target.checked)}
            className="mt-1 text-black block"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Available</label>
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
            className="mt-1 text-black block"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Create Apartment
        </button>
      </form>
    </div>
  );
};

export default CreateApartmentPage;
