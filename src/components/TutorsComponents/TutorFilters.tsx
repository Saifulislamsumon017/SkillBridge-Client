'use client';

import { fetcher } from '@/api/fetcher.api';
import { ICategory } from '@/interfaces/category.interface';
// import { fetcher } from '@/services/api';
import { useEffect, useState } from 'react';

interface QueryState {
  search: string;
  category: string;
  sort: string;
}

interface Props {
  query: QueryState;
  setQuery: React.Dispatch<React.SetStateAction<QueryState>>;
}

const TutorFilters = ({ query, setQuery }: Props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetcher('/categories');
        setCategories(data);
      } catch {
        console.error('Failed to load categories');
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6">
      <input
        placeholder="Search tutor..."
        className="border p-3 rounded-xl w-full"
        value={query.search}
        onChange={e =>
          setQuery(prev => ({
            ...prev,
            search: e.target.value,
          }))
        }
      />

      <select
        className="border p-3 rounded-xl"
        value={query.category}
        onChange={e =>
          setQuery(prev => ({
            ...prev,
            category: e.target.value,
          }))
        }
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <select
        className="border p-3 rounded-xl"
        value={query.sort}
        onChange={e =>
          setQuery(prev => ({
            ...prev,
            sort: e.target.value,
          }))
        }
      >
        <option value="">Sort By</option>
        <option value="rating">Highest Rating</option>
        <option value="price">Lowest Price</option>
      </select>
    </div>
  );
};

export default TutorFilters;
