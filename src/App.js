import DataDialog from './components/DataDialog';
import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';


const columns = [
  { title: "Name", field: "name", width: 150 },
  { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
  { title: "ID", field: "id" },
  { title: "Gender", field: "gender", hozAlign: "center" },
  { title: "Friendly?", field: "friendly", hozAlign: "center", formatter: "star" },
  { title: "Email", field: "email", hozAlign: "center", formatter: "tickCross" }
];

function App() {

  const [data, setData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/data').then((response) => {
  //     setData(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  const handleDialogOpen = () => {
    setDialogOpen(true);
    axios.get('http://localhost:5000/data').then((response) => {
      setData(response.data);
    });
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Button className='btn-div' variant="contained" color="primary" onClick={handleDialogOpen}>
        Open Dialog
      </Button>
      <DataDialog data={data} columns={columns} open={dialogOpen} onClose={handleDialogClose} />
    </div>
  );
}

export default App;


/*
npx create-react-app my-app
cd my-app
npm start
npm run dev
npm install tabulator react-tabulator axios --save

npm i react-tabulator --legacy-peer-dep

npm i json-server
npm run server
npm install tabulator-tables

npm install @mui/material @emotion/react @emotion/styled
npm install @material-ui/core @material-ui/icons --save

to uninstall from project.json
npm uninstall --save <package_name>
*/
