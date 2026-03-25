/** @format */

import { create } from 'zustand';

import type { IChoice } from '@/interfaces/data';

interface LessonState {
	current: number;
	setCurrent: (val: number) => void;

	next: () => void;
	prev: () => void;

	selected: IChoice | null;
	setSelected: (choice: IChoice | null) => void;

	isChecked: boolean;
	setIsChecked: (val: boolean) => void;
}

export const useLessonStore = create<LessonState>((set, get) => ({
	current: 0,

	setCurrent: (val) =>
		set({
			current: val,
			selected: null,
			isChecked: false,
		}),

	next: () => {
		const { current } = get();
		set({
			current: current + 1,
			selected: null,
			isChecked: false,
		});
	},

	prev: () => {
		const { current } = get();
		if (current === 0) return;

		set({
			current: current - 1,
			selected: null,
			isChecked: false,
		});
	},

	selected: null,
	setSelected: (choice) => set({ selected: choice }),

	isChecked: false,
	setIsChecked: (val) => set({ isChecked: val }),
}));
