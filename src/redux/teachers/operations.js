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
      const dbRef = ref(db, 'teachers');

      // Подготовка запроса на пагинацию
      const dataQuery = lastKey
        ? query(dbRef, orderByKey(), startAt(lastKey), limitToFirst(5))
        : query(dbRef, orderByKey(), limitToFirst(4));

      // Делаем оба запроса параллельно
      const [snapshot, countSnapshot] = await Promise.all([
        get(dataQuery),
        lastKey === null ? get(dbRef) : Promise.resolve(null), // Только при первом запросе
      ]);

      const data = snapshot.val();
      const teachersArray = data ? Object.values(data) : [];

      const lastTeacherKey =
        teachersArray.length > 0 ? Object.keys(data).pop() : null;

      // Убираем дубликат, если это не первый запрос
      if (lastKey) {
        teachersArray.shift();
      }

      // Считаем общее количество, если был countSnapshot
      let totalCount = null;
      if (countSnapshot) {
        const countData = countSnapshot.val();
        totalCount = countData ? Object.keys(countData).length : 0;
      }

      return {
        teachers: teachersArray,
        lastKey: lastTeacherKey,
        totalCount: totalCount, // может быть null при последующих запросах
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

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
