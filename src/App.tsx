import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import DesignTech from './components/DesignTech';
import Impact from './components/Impact';
import Team from './components/Team';
import Conclusion from './components/Conclusion';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <DesignTech />
      <Impact />
      <Team />
      <Conclusion />
    </div>
  );
}

export default App;
