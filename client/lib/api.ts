import axios from 'axios';
import { Resume, ApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadResume = async (file: File): Promise<ApiResponse<Resume>> => {
  const formData = new FormData();
  formData.append('resume', file);
  
  const response = await api.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
};

export const editResume = async (resumeId: string, command: string): Promise<ApiResponse<Resume>> => {
  const response = await api.post('/edit', {
    resumeId,
    command,
  });
  
  return response.data;
};

export const getResumePreview = async (resumeId: string): Promise<ApiResponse<Resume>> => {
  const response = await api.get(`/render/${resumeId}`);
  return response.data;
};

export default api;
