import { Earth, Mail } from "lucide-react";
import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const handleSearch = async (value: string) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${value}`,
      );
      setData(response.data);
      console.log("Axtarış nəticələri:", data);
      console.log("Axtarış nəticələri:", response.data);
    } catch (error) {
      console.error("Axtarış zamanı xəta baş verdi:", error);
    }
  };
  return (
    <div className="p-20 max-w-md mx-auto">
      <Button
        variant="link"
        url="https://www.google.com"
        leftIcon={<Earth size={14} />}
      >
        Salam
      </Button>
      <Input
        variant="borderless"
        label="E-Mail"
        type="email"
        placeholder="Mailinizi daxil edin zehmet olmazsa"
        leftIcon={<Mail size={18} />}
        isSearchInput={true}
        value={value}
        debounceMs={1000}
        onChange={(e) => setValue(e.target.value)}
        onAsyncSearch={handleSearch}
        searchResults={data.map((item) => item.email)}
        onResultSelect={(result) => setValue(result)}
      />
    </div>
  );
}

export default App;
