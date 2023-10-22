import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      set => ({
        favorite: [],
        isLoading: false,
        error: null,
        addFavorite: item =>
          set(state => ({
            favorite: [...state.favorite, { ...item, favorite: true }],
          })),
        removeFavorite: ({ id }) =>
          set(state => ({
            favorite: state.favorite.filter(item => item.id !== id),
          })),
      }),
      {
        name: 'carStorage',
        partialize: state => ({ favorite: state.favorite }),
      }
    )
  )
);

export default useStore;
