import './App.css';
import Header from './Components/Header/Header';
import data from './Data/data';
import DataGrid from 'react-data-grid';
import { generateColumns } from './Data/data-utils';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div>
        <DataGrid 
          columns={generateColumns(data)}
          rows={data}/>
      </div>
      <VictoryBar domainPadding={50} />

      <VictoryChart domainPadding={50} />

      <VictoryPie domainPadding={50} />

    </div>
  );
}

export default App;
