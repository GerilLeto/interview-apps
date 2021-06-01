import { timeAPI } from './http';
export const fetchCurrentTime = () => timeAPI.get('/time/current');