/** @format */

import { create } from 'zustand';

import { api } from '@/api';

interface ProgressState {
	data: any;
	loading: boolean;
	fetch: () => Promise<void>;
}

export const useProgressStore = create<ProgressState>((set) => ({
	data: null,
	loading: false,

	fetch: async () => {
		set({ loading: true });

		const res = await api.getProgress();

		if (res.success) {
			set({ data: res.data });
		}

		set({ loading: false });
	},
}));
