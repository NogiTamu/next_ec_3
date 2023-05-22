import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
// 商品一覧の配列
export const merchandiseListsAtom = atom<any>([]);

// フィルタ周り
export const squeezeMerchandiseAtom = atom<any>([]);
export const selectedCategorieAtom = atom<any[]>([]);

// カート周り
export const cartAtom = atomWithStorage<any[]>("StorageCart",[]);
