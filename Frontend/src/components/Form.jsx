// FavoriteForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FavoriteForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    favoriteFootballer: '',
    favoriteFootballClub: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const response = await axios.post('http://localhost:3000/favorites', form);
      console.log(response.data);
      if (response.status === 201) {
        alert('Favorites saved successfully');
        setForm({ favoriteFootballer: '', favoriteFootballClub: '' });
        navigate('/'); // Navigate to the landing page after saving
      }
    } catch (err) {
      console.error('Error saving favorites:', err);
    }
  };

    return (
        <div className="absolute top-0 left-0 -z-20 w-full min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex flex-col items-center p-4">
              <div className="bg-red-800 p-8 rounded-lg shadow-lg max-w-sm w-full text-black border-4 border-yellow-600 ">
      <h1 className="text-2xl font-semibold mb-6 text-center text-white">Favorite Footballer and Team</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white">Favorite Footballer</label>
          <input
            type="text"
            name="favoriteFootballer"
            value={form.favoriteFootballer}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-blue-500"
            placeholder="Enter your favorite footballer"
          />
        </div>
        <div>
          <label className="block text-white">Favorite Football Club</label>
          <input
            type="text"
            name="favoriteFootballClub"
            value={form.favoriteFootballClub}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-blue-500"
            placeholder="Enter your favorite football club"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Save Favorites
        </button>
      </form>
    </div>
    </div>
  
  );
};

export default FavoriteForm;