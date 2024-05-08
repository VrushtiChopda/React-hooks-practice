import React from 'react';
import './App.css';

//-----------customHooks-----------
import DocTitle from './components/CustomHooks/useDocumentTitle/DocTitle';
import UseDocumentTitle from './components/CustomHooks/useDocumentTitle/useDocumentTitle';        

//------------useRef-------------
// import FocusInput from './components/useRef/FocusInput';
// import HookTimer from './components/useRef/HookTimer';

 // -----------useMemo------------- 
// import Count from './components/useMemo/Count';

// ----------useReducer----------
// import CounterOne from './components/useReducer/CounterOne';
// import DataFetching from './components/useReducer/DataFetching';
// import CounterTwo from './components/useReducer/CounterTwo';
// import CounterThree from './components/useReducer/CounterThree';

/* ----------useContext---------- */
// import ComponentA from './components/useContext/ComponentA';
// export const UserContext = React.createContext()
// export const ChildContext = React.createContext()
/* -----------useState---------- */
// import Counter from './components/useState/Counter';
// import CounterArray from './components/useState/CounterArray';
// import CounterObj from './components/useState/CounterObj';
// import CounterTwo from './components/useState/CounterTwo';

/* ----------useEffect---------- */
// import Counter from './components/useEffect/Counter';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Interval from './components/useEffect/Interval';
// import DataFetching from './components/useEffect/DataFetching';




function App() {

  return (
    <div className="App">
      {/* -----------useState---------- */}
      {/* <Counter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterObj /> */}
      {/* <CounterArray /> */}

      {/* ----------useEffect---------- */}
      {/* <Interval /> */}
      {/* <Counter /> */}
      {/* <DataFetching /> */}

      {/* ----------useContext---------- */}
      {/* <UserContext.Provider value={"vrushti"}>
        <ChildContext.Provider value={"Chopda"}>
          <ComponentA />
        </ChildContext.Provider>
      </UserContext.Provider> */}

      {/* ----------useReducer---------- */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <DataFetching /> */}

      {/* -----------useMemo------------- */}
      {/* <Count /> */}

      {/* -----------useRef------------- */}
      {/* <FocusInput /> */}
      {/* <HookTimer />*/}

       {/* -----------customHooks------------- */}
       <DocTitle />
       <useDocumentTitle />
    </div>
  );
}

export default App;
