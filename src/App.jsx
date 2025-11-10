import "./styles.css";
import { TextField, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { addSyntheticLeadingComment } from "typescript";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(mockItems);
  }, []);

  return <div className="App">
    <TextField onChange={(e) => setSearch(e.target.value) >
    asd
    </TextField>
    <List>
      {items.map(item => (
        <ListItem key={item.key}>
          {item.name}
        </ListItem>
      ))}
    </List>
  </div>;
}

const mockItems = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Cherry" },
];
const fakeSave = (item) =>
  new Promise((resolve) => setTimeout(() => resolve(item), 1000));
