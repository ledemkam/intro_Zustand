import { create} from "zustand";
//import { devtools, persist } from "zustand/middleware";
// import { useCount } from "./useCount";
// import { useName } from "./useName";
import { immer } from "zustand/middleware/immer";

//de ligne 4 a 20 est un exemple de utliser pour les autoselecteurs
// import { StoreApi, UseBoundStore } from 'zustand'

// type WithSelectors<S> = S extends { getState: () => infer T }
//   ? S & { use: { [K in keyof T]: () => T[K] } }
//   : never

// const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
//   _store: S,
// ) => {
//   let store = _store as WithSelectors<typeof _store>
//   store.use = {}
//   for (let k of Object.keys(store.getState())) {
//     ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
//   }

//   return store
// }

// Define the state type

// type State = {
//   name: string;
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// };

// // Create a store

// export const usesStore = create<State>((set) => ({
//   name: "Rico",
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));


//changer le state en dehors du context

// window.setInterval(() => {
//   usesStore.setState(state => ({ count: state.count + 1 }));
// }, 1000);


//export const useStoreSelectors = createSelectors(usesStore)// elle permet de creer les selecteurs automatiquement


//comment implementer les combinaisons de stores: rassembler tous les stores dans un seul store

// export const  useCombinedStores = create(()=>({
//   ...useCount.getState(),
//   ...useName.getState(),
// }))


//Devtools et Persist bzw Middleware
  //devtools permet de voir les changements de state
  //persistpersistance des donnees) permet de sauvegarder le state dans le localstorage

  // type CounState = {
  //   count: number;
  //   increase: (by: number) => void;
  // };

  // const useCountStore = create<CounState>()(
  //   devtools(
  //     persist(
  //       (set) => ({
  //         count: 0,
  //         increase: (by) => set((state) => ({ count: state.count + by })),
  //       }),
  //       { name: "count-store" }
  //     )
  //   )
  // )

  // export default useCountStore;


  // MIDLEWARE IMMER

  type State = {
    count: number;

  };
  type Actions = {
    increment: (qty:number) => void;
    decrement: (qty:number) => void;
  };
  
  export const useCountStore = create<State & Actions>()(   
  immer((set) => ({
    count: 0,
    increment: (qty:number) => set((state) => { state.count += qty }),
    decrement: (qty:number) => set((state) => { state.count -= qty }),
  })
))



