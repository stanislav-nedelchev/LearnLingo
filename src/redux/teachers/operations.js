// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { get, query, ref, orderByKey } from 'firebase/database';
// import { db } from '../../api/firebaseConfig.js';

// export const fetchTeachers = createAsyncThunk(
//   'teachers/fetchTeachers',
//   async (_, { rejectWithValue }) => {
//     try {
//       const dbRef = ref(db);
//       const dataQuery = query(dbRef, orderByKey());
//       const snapshot = await get(dataQuery);

//       const data = snapshot.val();

//       if (!data || !data.teachers) {
//         return [];
//       }

//       return data.teachers;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

export const fetchTeachersWithFilters = createAsyncThunk(
  'teachers/fetchTeachersWithFilters',
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(db);
      const dataQuery = query(dbRef, orderByKey());
      const snapshot = await get(dataQuery);

      const data = snapshot.val();

      if (!data || !data.teachers) {
        return [];
      }

      return data.teachers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  get,
  query,
  ref,
  orderByKey,
  limitToFirst,
  startAt,
} from 'firebase/database';
import { db } from '../../api/firebaseConfig.js';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (lastKey = null, { rejectWithValue }) => {
    try {
      const dbRef = ref(db, 'teachers'); // Указываем, что данные берутся из раздела teachers

      // Если lastKey есть, начинаем с него, иначе получаем первые 4
      const dataQuery = lastKey
        ? query(dbRef, orderByKey(), startAt(lastKey), limitToFirst(5)) // Запрашиваем 5 учителей при втором запросе
        : query(dbRef, orderByKey(), limitToFirst(4)); // Для первого запроса загружаем 4

      const snapshot = await get(dataQuery);

      const data = snapshot.val();

      // Преобразуем объект в массив (если нужно)
      const teachersArray = Object.values(data);

      // Сохраняем последний ключ для пагинации
      const lastTeacherKey =
        teachersArray.length > 0 ? Object.keys(data).pop() : null;

      // Если уже есть lastKey, удаляем первого учителя из массива (чтобы "перекидывать" старый)
      if (lastKey) {
        teachersArray.shift(); // Удаляем первый элемент (который уже был на предыдущей странице)
      }

      return { teachers: teachersArray, lastKey: lastTeacherKey };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
