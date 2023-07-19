import './App.css'
import { PropertiesDisplay } from './components/properties-display'

function App() {
    return (
        <main className='flex flex-col justify-center gap-5'>
            <h1>Welcome to Marvelous Mansions</h1>
            <h2 className='text-3xl'>A one stop shop to your dream property!</h2>
            <h3 className='text-2xl font-bold my-3'>Current property listings:</h3>
            <PropertiesDisplay />
        </main>
    )
}

export default App
