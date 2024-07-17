//import { usesStore } from "./store";

import { useCountStore } from "./store";

//import useCountStore from "./store";

//import { useStoreSelectors } from "./store";
//import { useCombinedStores } from './store';

export default function App() {
  // methode 1
  //const {name,count, increment, decrement } = usesStore();

  // methode 2
  //alternative a la ligne 4, on peut faire comme suit en utilisant les selecteurs(ligne 8 a 12)
  //les selecteurs permettent d eviter les rerendu inutiles
// const name = usesStore().name;
// const count = usesStore().count;
// const increment = usesStore().increment;
// const decrement = usesStore().decrement

//methode 3: on peut utiliser les selecteurs automatiquement
//augmente les performances en evitant les rerendus inutiles

  // const name = useStoreSelectors.use.name();
  // const count = useStoreSelectors.use.count();
  // const increment = useStoreSelectors.use.increment();
  // const decrement = useStoreSelectors.use.decrement();

  //methode 4: on peut utiliser lorsqu on a plusieurs stores
  //const {name, count, increment, decrement} = useCombinedStores();

  //devtools and persist bzw middleware
    //const {count,increase} = useCountStore();

  //IMMER middleware
  const {count,increment,decrement} = useCountStore();
  return (
    <>
      <h1>hello zustand</h1>
      <div>
        {/* <p>{name}</p> */}
        {/* <button onClick={increment} >increment</button>
                 ------
        <button onClick={decrement} >decrement</button> */}
        {/* <button onClick={() => increase(1)}>increment</button>
        <p>Counter:{count} </p> */}
        <p>Counter:{count} </p>
        <button onClick={() => increment(1)}>increment</button>
        <button onClick={() => decrement(1)}>decrement</button>
      </div>
    </>
  );
}
