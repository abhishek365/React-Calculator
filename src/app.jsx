import { useState } from 'preact/hooks'
import styles from "./app.module.css";
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

export function App() {
  const [calVal, setCalVal] = useState("");
  const handleButtonClick = (btn) => {
    if (btn === 'C') {
      setCalVal('');
    } else if (btn === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let val = calVal+btn;
      setCalVal(val);
    }
  }
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}/>
        <ButtonsContainer input={calVal} setInput={handleButtonClick}/>
      </div>
    </>
  )
}
