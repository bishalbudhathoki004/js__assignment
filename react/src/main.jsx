import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './day_6/task1.jsx'
import ToggleButton from './day_6/task2.jsx'
import TextInputDisplay from './day_6/task3.jsx'
import ThemeSwitcher from './day_6/task4.jsx'
import ColorPicker from './day_6/task5.jsx'
import ToggleImage from './day_6/task6.jsx'
import PasswordToggle from './day_6/task8.jsx'
import RandomQuote from './day_6/task9.jsx'
import TrafficLight from './day_6/task10.jsx'
import ClickTracker from './day_6/task7.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
    <ToggleButton/>
    <TextInputDisplay/>
    <ThemeSwitcher/>
    <ColorPicker/>
    <ToggleImage/>
    <ClickTracker/>
    <PasswordToggle/>
    <RandomQuote/>
    <TrafficLight/>
  
  
  </StrictMode>,
)
